/* ═══════════════════════════════════════════════
   Query PWA — app.js
═══════════════════════════════════════════════ */

/* ── IndexedDB ──────────────────────────────── */
const db = new Dexie('QueryPWAv3');
db.version(1).stores({
  profiles: 'id, name, createdAt',
  entries:  '++id, profileId, isPinned, createdAt'
});

/* ── State ──────────────────────────────────── */
const S = { profiles:[], activeId:null, entries:[], query:'', peer:null };

/* ── DOM ────────────────────────────────────── */
const $ = id => document.getElementById(id);

/* ── Utilitaires ────────────────────────────── */
const genId = () => Math.random().toString(36).substring(2,8).toUpperCase();

function formatDate(ts) {
  if (!ts) return '';
  return new Date(ts).toLocaleDateString(navigator.language || 'en', {day:'2-digit',month:'short',year:'numeric'});
}

const isHTML = s => /<[a-z][\s\S]*>/i.test(s||'');

function escHTML(s) {
  return String(s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function linkify(text) {
  return text.replace(/(https?:\/\/[^\s<"'>]+)/g,
    u=>`<a href="${u}" target="_blank" rel="noopener noreferrer">${u}</a>`);
}

function processContent(raw, q) {
  let out = isHTML(raw) ? raw : linkify(escHTML(raw));
  if (q) {
    const eq = q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    out = out.replace(new RegExp(`(?![^<]*>)(${eq})`,'gi'),'<mark>$1</mark>');
  }
  return out;
}

/* ── Toast ──────────────────────────────────── */
let _tt;
function toast(msg, ms=2500) {
  const el=$('toast'); el.textContent=msg; el.classList.add('show');
  clearTimeout(_tt); _tt=setTimeout(()=>el.classList.remove('show'),ms);
}

/* ── DB ops ─────────────────────────────────── */
async function dbLoadProfiles() {
  S.profiles = await db.profiles.orderBy('createdAt').toArray();
}

async function dbSaveProfile(data) {
  const names = S.profiles.map(p=>p.name.toLowerCase());
  let name = data.name || t('defaultProfileName');
  if (names.includes(name.toLowerCase())) {
    let i=2; while(names.includes(`${name.toLowerCase()} (${i})`)) i++;
    name = `${name} (${i})`;
  }
  const id  = name.toLowerCase().replace(/[^a-z0-9]/g,'_')+'_'+Date.now();
  const now = Date.now();
  await db.profiles.add({id, name, createdAt:now});
  const rows = (data.entries||[]).map((e,i)=>{
    if (!e && e !== '') return null;
    return {
      profileId:id,
      content:  typeof e==='string' ? e : (e && typeof e==='object' ? (e.content||'') : ''),
      isPinned: (e && typeof e==='object') ? !!e.isPinned : false,
      createdAt:(e && typeof e==='object' && e.createdAt) ? e.createdAt : now+i,
    };
  }).filter(r=>r!==null);
  if(rows.length) await db.entries.bulkAdd(rows);
  return {id, name};
}

async function dbDeleteProfile(id) {
  await db.entries.where('profileId').equals(id).delete();
  await db.profiles.delete(id);
}

async function dbLoadEntries(pid) {
  const all = await db.entries.where('profileId').equals(pid).toArray();
  all.sort((a,b)=>{
    if(a.isPinned!==b.isPinned) return a.isPinned?-1:1;
    return (b.createdAt||0)-(a.createdAt||0);
  });
  return all;
}

/* ── P2P ────────────────────────────────────── */
function destroyPeer() {
  if(S.peer){try{S.peer.destroy()}catch(_){} S.peer=null;}
}

function connectP2P(rawCode, {onStatus,onSuccess,onError}) {
  destroyPeer();
  const code = rawCode.trim().toUpperCase();
  if(code.length<4){onError(t('p2pCodeTooShort')); return;}

  const targetId = 'query-ext-'+code;
  const myId     = 'query-recv-'+genId()+genId();

  onStatus(t('p2pConnecting'));
  const peer = new Peer(myId,{host:'0.peerjs.com',port:443,path:'/',secure:true});
  S.peer = peer;
  let done=false;

  const abort = msg => {
    if(done) return; done=true; clearTimeout(tmt); destroyPeer(); onError(msg);
  };
  const tmt = setTimeout(()=>abort(t('p2pTimeout')),22000);

  peer.on('open',()=>{
    onStatus(t('p2pConnectingExt'));
    const conn = peer.connect(targetId,{reliable:true});
    conn.on('data', async raw=>{
      if(done) return; done=true; clearTimeout(tmt);
      try {
        const msg = JSON.parse(raw);
        if(msg.type!=='query-profile') throw new Error('type inattendu');
        const {id,name} = await dbSaveProfile(msg.payload);
        destroyPeer(); onSuccess(name,id);
      } catch { destroyPeer(); onError(t('p2pDataError')); }
    });
    conn.on('error',()=>abort(t('p2pConnFailed')));
  });
  peer.on('error',err=>{
    if(err.type==='peer-unavailable')
      abort(t('p2pNotFound'));
    else abort(t('p2pNetError')+(err.message||err.type));
  });
}

/* ── Sidebar / profils ──────────────────────── */
function renderProfileList() {
  const list=$('profile-list');
  list.innerHTML='';
  if(!S.profiles.length){
    list.innerHTML=`<div style="padding:12px 14px;font-size:12px;color:var(--text-muted);">${t('noProfile')}</div>`;
    return;
  }
  S.profiles.forEach(p=>{
    const el=document.createElement('div');
    el.className='p-item'+(p.id===S.activeId?' active':'');
    el.dataset.id=p.id;
    el.innerHTML=`
      <span class="p-icon">📁</span>
      <span class="p-name">${escHTML(p.name)}</span>
      <span class="p-count" data-c="${p.id}">…</span>
      <button class="p-del" title="Supprimer" data-del="${p.id}">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="3 6 5 6 21 6"/>
          <path d="M19 6l-1 14H6L5 6"/>
          <path d="M10 11v6M14 11v6"/>
        </svg>
      </button>`;
    db.entries.where('profileId').equals(p.id).count().then(n=>{
      const c=el.querySelector(`[data-c="${p.id}"]`); if(c) c.textContent=n;
    });
    el.addEventListener('click',e=>{
      if(e.target.closest('[data-del]')) return;
      selectProfile(p.id);
    });
    el.querySelector('[data-del]').addEventListener('click',e=>{
      e.stopPropagation();
      if(!confirm(t('deleteConfirm', p.name))) return;
      dbDeleteProfile(p.id).then(async()=>{
        await dbLoadProfiles();
        if(S.activeId===p.id){S.activeId=null;S.entries=[];renderCards();}
        renderProfileList();
        toast(t('profileDeleted', p.name));
      });
    });
    list.appendChild(el);
  });
}

async function selectProfile(id) {
  S.activeId=id; S.query='';
  $('search').value=''; $('search-x').classList.remove('on');
  document.querySelectorAll('.p-item').forEach(el=>el.classList.toggle('active',el.dataset.id===id));
  closeSidebar();
  // Sur mobile : revenir à l'onglet Fiches
  setTab('cards');
  const p=S.profiles.find(x=>x.id===id);
  $('tb-name').textContent=p?p.name:'';
  S.entries=await dbLoadEntries(id);
  const n=S.entries.length;
  $('tb-sub').textContent=t('cardCount', n);
  renderCards();
}

/* ── Cards ──────────────────────────────────── */
function renderCards() {
  const wrap=$('cards'), lbl=$('count-lbl');
  const q=S.query.trim().toLowerCase();

  if(!S.activeId){
    wrap.innerHTML=`
      <div class="empty">
        <span class="empty-icon">📂</span>
        <div class="empty-title">${t('noProfileSel')}</div>
        <div class="empty-sub">${t('noProfileSub')}</div>
      </div>`;
    lbl.textContent=''; return;
  }

  const list=q
    ?S.entries.filter(e=>{
        const t=isHTML(e.content)?e.content.replace(/<[^>]+>/g,' '):(e.content||'');
        return t.toLowerCase().includes(q);
      })
    :S.entries;

  lbl.textContent=q?t('resultCount', list.length, S.query):'';

  if(!list.length){
    wrap.innerHTML=`
      <div class="empty">
        <span class="empty-icon">🔍</span>
        <div class="empty-title">${q?t('noResult'):t('emptyProfile')}</div>
        <div class="empty-sub">${q?t('noResultSub', escHTML(S.query)):t('emptyProfileSub')}</div>
      </div>`;
    return;
  }

  wrap.innerHTML='';
  list.forEach((entry,idx)=>{
    const card=document.createElement('div');
    card.className='card'+(entry.isPinned?' pinned':'');
    card.style.animationDelay=`${Math.min(idx*12,120)}ms`;

    const body=document.createElement('div');
    body.className='card-body';
    const content=document.createElement('div');
    content.className='card-content';
    content.innerHTML=processContent(entry.content||'',S.query);
    body.appendChild(content);
    if(entry.createdAt){
      const d=document.createElement('div');
      d.className='card-date'; d.textContent=formatDate(entry.createdAt);
      body.appendChild(d);
    }

    const actions=document.createElement('div');
    actions.className='card-actions';

    // Épingle
    const pinBtn=document.createElement('div');
    pinBtn.className='card-btn'+(entry.isPinned?' pin-on':'');
    pinBtn.title=entry.isPinned?t('pinned'):'';
    pinBtn.innerHTML=`<svg width="14" height="14" viewBox="0 0 24 24" fill="${entry.isPinned?'currentColor':'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="12" y1="17" x2="12" y2="22"/>
      <path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/>
    </svg>`;
    actions.appendChild(pinBtn);

    // Copier
    const copyBtn=document.createElement('button');
    copyBtn.className='card-btn'; copyBtn.title=t('copy');
    const iconCopy=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
    const iconOk=`<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    copyBtn.innerHTML=iconCopy;
    copyBtn.addEventListener('click',e=>{
      e.stopPropagation();
      let text=entry.content||'';
      if(isHTML(text)){const t=document.createElement('div');t.innerHTML=text;text=t.innerText;}
      navigator.clipboard.writeText(text).then(()=>{
        copyBtn.classList.add('ok'); copyBtn.innerHTML=iconOk;
        setTimeout(()=>{copyBtn.classList.remove('ok');copyBtn.innerHTML=iconCopy;},1500);
      });
    });
    actions.appendChild(copyBtn);

    card.appendChild(body); card.appendChild(actions);
    wrap.appendChild(card);
  });
}

/* ── Sidebar / veil ─────────────────────────── */
const openSidebar =()=>{ $('sidebar').classList.add('open');  $('veil').classList.add('open');  };
const closeSidebar=()=>{ $('sidebar').classList.remove('open');$('veil').classList.remove('open'); };

/* ── Welcome ────────────────────────────────── */
const showWelcome=()=>{ $('welcome').style.display='flex'; };
const hideWelcome=()=>{ $('welcome').style.display='none'; };

/* ── Modal import ───────────────────────────── */
function openModal() {
  $('m-code').value=''; setStatus($('m-status'),''); $('m-btn').disabled=false;
  $('modal-bg').classList.add('open');
  setTimeout(()=>$('m-code').focus(),260);
}
function closeModal() { $('modal-bg').classList.remove('open'); destroyPeer(); }

/* ── Status ─────────────────────────────────── */
function setStatus(el, msg, cls='') {
  el.textContent=msg; el.className='status'+(cls?' '+cls:'');
}

/* ── P2P runner ─────────────────────────────── */
function runP2P(code, statusEl, btnEl, onDone) {
  btnEl.disabled=true;
  connectP2P(code,{
    onStatus: msg=>setStatus(statusEl,'⏳ '+msg,'wait'),
    onSuccess: async(name,id)=>{
      setStatus(statusEl, t('profileImported', name), 'ok');
      await dbLoadProfiles(); renderProfileList(); await selectProfile(id);
      onDone(name);
    },
    onError: msg=>{ setStatus(statusEl,'❌ '+msg,'err'); btnEl.disabled=false; },
  });
}

/* ── Tab bar (mobile) ───────────────────────── */
function setTab(name) {
  // Active les classes des onglets
  ['cards','profiles','import'].forEach(t=>{
    $('tab-'+t)?.classList.toggle('active', t===name);
  });
  // Bascule les vues
  if(name==='profiles') { openSidebar(); return; }
  if(name==='import')   { openModal();   return; }
  // 'cards' : juste s'assurer que la sidebar est fermée
  closeSidebar();
  // Remettre l'onglet cards actif immédiatement (import/profiles n'ont pas de "vue")
}

/* ── Événements ─────────────────────────────── */
// Sidebar
$('menu-btn').addEventListener('click', openSidebar);
$('veil').addEventListener('click', closeSidebar);

// Search
$('search').addEventListener('input',()=>{
  S.query=$('search').value;
  $('search-x').classList.toggle('on',!!S.query);
  renderCards();
});
$('search-x').addEventListener('click',()=>{
  $('search').value=''; S.query='';
  $('search-x').classList.remove('on'); renderCards(); $('search').focus();
});

// Sidebar - bouton importer
$('btn-add').addEventListener('click',()=>{ closeSidebar(); openModal(); });

// Modal
$('modal-x').addEventListener('click', closeModal);
$('modal-bg').addEventListener('click',e=>{ if(e.target===$('modal-bg')) closeModal(); });
const doModal=()=>runP2P($('m-code').value,$('m-status'),$('m-btn'),name=>{
  setTimeout(closeModal,1600); toast(t('profileAdded', name));
  // Remettre l'onglet cards actif
  ['cards','profiles','import'].forEach(t=>$('tab-'+t)?.classList.remove('active'));
  $('tab-cards')?.classList.add('active');
});
$('m-btn').addEventListener('click', doModal);
$('m-code').addEventListener('keydown',e=>{ if(e.key==='Enter') doModal(); });

// Welcome
const doWelcome=()=>{
  $('w-btn').disabled=true;
  connectP2P($('w-code').value,{
    onStatus: msg=>setStatus($('w-status'),'⏳ '+msg,'wait'),
    onSuccess: async(name,id)=>{
      setStatus($('w-status'), t('profileImported', name), 'ok');
      await dbLoadProfiles(); hideWelcome(); renderProfileList(); await selectProfile(id);
    },
    onError: msg=>{ setStatus($('w-status'),'❌ '+msg,'err'); $('w-btn').disabled=false; },
  });
};
$('w-btn').addEventListener('click', doWelcome);
$('w-code').addEventListener('keydown',e=>{ if(e.key==='Enter') doWelcome(); });

// Tab bar
$('tab-cards')   ?.addEventListener('click',()=>setTab('cards'));
$('tab-profiles')?.addEventListener('click',()=>{
  setTab('profiles');
  // Quand la sidebar se ferme, remettre l'onglet actif sur cards
  const onClose=()=>{ $('tab-profiles')?.classList.remove('active'); $('tab-cards')?.classList.add('active'); };
  $('veil').addEventListener('click',onClose,{once:true});
  $('sidebar').addEventListener('transitionend',()=>{
    if(!$('sidebar').classList.contains('open')) onClose();
  },{once:true});
});
$('tab-import')  ?.addEventListener('click',()=>{
  openModal();
  // Remettre cards actif à la fermeture de la modal
  ['cards','profiles','import'].forEach(t=>$('tab-'+t)?.classList.remove('active'));
  $('tab-import')?.classList.add('active');
});

/* ── Service Worker ─────────────────────────── */
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(()=>{});
}

/* ── Boot ───────────────────────────────────── */
async function boot() {
  await dbLoadProfiles();
  if(!S.profiles.length){ showWelcome(); return; }
  hideWelcome();
  renderProfileList();
  await selectProfile(S.profiles[0].id);
}
boot();
