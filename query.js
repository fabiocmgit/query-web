/* ════════════════════════════════════════════════════════
   i18n
════════════════════════════════════════════════════════ */
const TR={en:{newCard:"New card",export:"Export",exportAll:"Export all",import:"Import",importMulti:(n,t)=>`Import ${n} profile(s) from ${t} file(s)?`,importDone:(n)=>`✅ ${n} profile(s) imported.`,importPartial:(ok,fail)=>`✅ ${ok} imported, ⚠️ ${fail} failed.`,share:"Share",settings:"Settings",newProfile:"New profile",profiles:"Profiles",searchPh:"Search... (use / for all profiles)",emptyTitle:"No cards yet",emptySub:"Click '+ New card' to get started.",noResultTitle:"No results",noResultSub:"Try different keywords.",pin:"Pin",unpin:"Unpin",edit:"Edit",view:"View",copy:"Copy",copied:"Copied!",exportPdf:"PDF",exportingPdf:"Generating…",pdfPopupBlocked:"❌ Allow pop-ups to export to PDF.",pdfPrintBtn:"🖨️ Print / Save as PDF",resultsN:n=>n===1?"1 result":`${n} results`,allCards:n=>n===1?"1 card":`${n} cards`,newCardTitle:"New card",editCardTitle:"Edit card",edPh:"💡 Write your new card here...\n• # for a tag\n• ! to link another card\n• / in the search bar to look across every profile",save:"✅ Save",modify:"✅ Modify",delete:"🗑️ Delete",cancel:"Cancel",create:"✅ Create",newProfileTitle:"New profile",profilePh:"Profile name (e.g. Work, Personal…)",welcomeTitle:"Welcome! Create your first profile",firstProfilePh:"Your profile name (e.g. Personal, Work…)",settingsTitle:"Settings",general:"General",statistics:"Statistics",language:"Language",totalCards:"Total cards",errEmpty:"Please enter some content.",errProfileEmpty:"Please enter a profile name.",errDuplicate:n=>`"${n}" already exists.`,errLast:"Can't delete the only profile.",confirmCard:"Delete this card?",confirmCardTitle:"Delete card",confirmProfile:n=>`Delete "${n}" and all its cards?`,confirmImport:(c,i,p)=>`Replace ${c} entries in "${p}" with ${i} from file?`,errImport:"Import failed.",shareTitle:"Share via device",sendInstr:'Click "Generate code" to get a connection code. Keep this window open until the transfer is complete.',genCode:"🔑 Generate code",waitMsg:"⏳ Waiting for connection…",sendOk:"✅ Profile sent!",recvInstr:"Enter the code shown on the other device. ⚠️ May not work on corporate or heavily restricted networks.",connectBtn:"🔗 Connect",connecting:"⏳ Connecting…",p2pSendErr:"❌ Connection error. Try again.",p2pShort:"Code must be at least 4 characters.",p2pTimeout:"Timed out — check the code and retry.",p2pDataErr:"Error processing received profile.",p2pFail:"Connection failed. Is the code correct?",p2pNotFound:"Device not found. Make sure it's waiting.",p2pRecvOk:n=>`✅ Profile "${n}" imported!`,defaultProfile:"Imported profile",errQuota:"Storage full — delete some cards or profiles.",qrHint:"Or scan with a phone camera to open Query and import this profile",pwaNoticeTxt:"You're in the browser, not in the Query app on your home screen. Open the installed Query app, go to Share → Receive, and enter this code there so the profile ends up in the app:",pwaImportAnyway:"Import here in the browser instead",modeSend:"Send",modeRecv:"Receive",theme:"Theme",editMode:"Edit",editModeExit:"Done",listMode:"List",gridMode:"Grid",resetSize:"Reset size & position",resetAllSizes:"Reset all sizes",cardColor:"Color",dragHandle:"Drag to position freely",coverAdd:"Banner",coverChange:"Change",confirmRemoveCover:"Remove this banner image?",coverReposition:"Reposition",coverRepositionHint:"Drag to reposition",coverSavePos:"Save position",exportSection:"Export",exportFolder:"Save location",chooseFolder:"Choose folder…",changeFolder:"Change…",exportFolderHint:"Exported JSON files are saved straight to this folder instead of your browser's downloads.",exportFolderUnsupported:"This doesn't work on Firefox — your browser doesn't support choosing a folder, so files will be downloaded normally.",exportFolderReset:"Reset",exportFolderDenied:"Permission denied — files will be downloaded normally.",exportSavedTo:(f,d)=>`✅ ${f} saved to "${d}"`,exportDownloaded:(f)=>`⬇️ ${f} downloaded`,exportAllSavedTo:(n,d)=>`✅ ${n} file(s) saved to "${d}"`,exportAllDownloaded:(n)=>`⬇️ ${n} file(s) downloaded`,helpSection:"Help",guidedTour:"Guided tour",startTour:"Start",guidedTourHint:"Take a quick tour of the app's features — you can restart it anytime.",profilesSection:"Profiles",profilesHint:"Click the emoji to open the picker. Press Enter or click away to save the name.",changeEmoji:"Change emoji",currentProfile:"current",mentionHint:"Type to search a card to link…",mentionNoCards:"No other card to link to yet",mentionUntitled:"(empty card)",mentionDeleted:"Deleted card",mentionDeletedTitle:"This card no longer exists",liveTab:"Live sync",liveInstr:"Unlike Send/Receive (one-time copy), live sync keeps this profile continuously synchronized: anyone with the invite link can create, edit and delete cards, and every change appears for everyone. Data travels only between devices, end-to-end encrypted — no cloud, no account.",liveCreate:"📡 Start sharing",liveJoinInstr:"Join a shared profile with its invite code (to share one of YOUR profiles, use the 📡 icon on its row in the sidebar):",liveJoin:"🔗 Join",liveStatus:n=>n===0?"⏳ Waiting for participants… keep this tab open.":`🟢 Connected — ${n} other device(s)`,liveOffline:"🔴 Sharing unavailable (already open in another tab?)",liveErrCode:"Invalid code — expected format: ABC123-XYZ456.",liveJoined:n=>`✅ Joined shared profile "${n}"!`,liveHostHint:"Changes sync between devices that are online at the same time. When someone reconnects, everything reconciles automatically.",liveCurrent:"This profile is shared",liveBadge:n=>`SHARED · ${n}`,liveInviteLbl:"Invite code — share it privately with your collaborators:",liveNoCrypto:"Sharing needs a secure context (HTTPS).",liveResume:"📡 Resume sharing (same code)",liveStop:"⏹ Stop sharing",livePseudoAsk:"Choose your nickname (visible to the other participants):",livePseudoSet:n=>`✅ Nickname saved: ${n}`,livePseudoTitle:"Your nickname",livePseudoOk:"Join",liveRowTip:"Share this profile live",liveStopConfirm:"Stop sharing this profile? Your local copy stays, but changes will no longer sync. Restarting later will generate a new invite code.",liveStopped:"Sharing stopped.",liveCopyLink:"🔗 Copy invite link",liveLinkCopied:"✅ Invite link copied!",livePseudoLbl:"Nickname:",liveYou:"you",tourWelcomeTitle:"Welcome to Query",tourWelcomeDesc:"A quick tour of everything you can do — takes less than a minute. Restart it anytime from Settings → Help.",tourCreateTitle:"Create & format a card",tourCreateDesc:'Click "+ New card" to create one. Format it with the toolbar: bold, lists, links, colors, images…',tourOrganizeTitle:"Pin, color, organize",tourOrganizeDesc:"Pin important cards to keep them at the top, give them a color to spot them at a glance, and use the eye icon to preview a card without editing it.",tourCanvasTitle:"List or canvas layout",tourCanvasDesc:"Switch to canvas mode (Edit) to freely resize and drag cards anywhere on the board — great for moodboards and visual layouts.",tourSearchTitle:"Search everything",tourSearchDesc:"Type a word to filter cards in the current profile. Add / before your search to look across all profiles at once.",tourProfilesTitle:"Multiple profiles",tourProfilesDesc:"Create as many profiles as you like (Work, Personal, Projects…), switch between them from the sidebar, and reorder them by drag-and-drop.",tourLiveTitle:"Live collaboration",tourLiveDesc:"Share a profile live with others: everyone can create, edit and delete cards in real time, end-to-end encrypted — no server, no account.",tourExportTitle:"Export, import, back up",tourExportDesc:"Export saves the current profile as JSON, Export all saves everything. Tip: pick a folder in Settings → Export so files save there automatically.",tourShareTitle:"Send to another device",tourShareDesc:"The Share button generates a one-time code to transfer a whole profile peer-to-peer between two devices — no server, no account needed.",tourStartTitle:"You're all set!",tourStartDesc:"Everything is stored locally on your device — your data belongs to you. Go ahead and create your first card!",tourNext:"Next",tourSkip:"Skip",tourFinish:"Let's go!"},fr:{newCard:"Nouvelle fiche",export:"Exporter",exportAll:"Tout exporter",import:"Importer",importMulti:(n,t)=>`Importer ${n} profil(s) depuis ${t} fichier(s) ?`,importDone:(n)=>`✅ ${n} profil(s) importé(s).`,importPartial:(ok,fail)=>`✅ ${ok} importé(s), ⚠️ ${fail} échec(s).`,share:"Partager",settings:"Paramètres",newProfile:"Nouveau profil",profiles:"Profils",searchPh:"Rechercher… (« / » pour tous les profils)",emptyTitle:"Aucune fiche",emptySub:"Cliquez sur '+ Nouvelle fiche' pour commencer.",noResultTitle:"Aucun résultat",noResultSub:"Essayez d'autres mots-clés.",pin:"Épingler",unpin:"Désépingler",edit:"Modifier",view:"Consulter",copy:"Copier",copied:"Copié !",exportPdf:"PDF",exportingPdf:"Génération…",pdfPopupBlocked:"❌ Autorise les fenêtres pop-up pour exporter en PDF.",pdfPrintBtn:"🖨️ Imprimer / Enregistrer en PDF",resultsN:n=>n===1?"1 résultat":`${n} résultats`,allCards:n=>n===1?"1 fiche":`${n} fiches`,newCardTitle:"Nouvelle fiche",editCardTitle:"Modifier la fiche",edPh:"💡 Écrivez votre nouvelle fiche ici…\n• # pour créer un tag\n• ! pour lier une autre fiche\n• / dans la recherche pour chercher dans tous les profils",save:"✅ Sauvegarder",modify:"✅ Modifier",delete:"🗑️ Supprimer",cancel:"Annuler",create:"✅ Créer",newProfileTitle:"Nouveau profil",profilePh:"Nom du profil (ex : Travail, Personnel…)",welcomeTitle:"Bienvenue ! Créez votre premier profil",firstProfilePh:"Nom de votre profil (ex : Personnel, Travail…)",settingsTitle:"Paramètres",general:"Général",statistics:"Statistiques",language:"Langue",totalCards:"Total fiches",errEmpty:"Veuillez entrer du contenu.",errProfileEmpty:"Veuillez entrer un nom de profil.",errDuplicate:n=>`« ${n} » existe déjà.`,errLast:"Impossible de supprimer le seul profil.",confirmCard:"Supprimer cette fiche ?",confirmCardTitle:"Supprimer la fiche",confirmProfile:n=>`Supprimer « ${n} » et toutes ses fiches ?`,confirmImport:(c,i,p)=>`Remplacer ${c} entrées dans « ${p} » par ${i} du fichier ?`,errImport:"Erreur d'importation.",shareTitle:"Partager via appareil",sendInstr:"Cliquez sur « Générer un code » pour obtenir un code de connexion. Gardez cette fenêtre ouverte jusqu'à la fin du transfert.",genCode:"🔑 Générer un code",waitMsg:"⏳ En attente de connexion…",sendOk:"✅ Profil envoyé !",recvInstr:"Entrez le code affiché sur l'autre appareil. ⚠️ Peut ne pas fonctionner sur les réseaux d'entreprise ou très sécurisés.",connectBtn:"🔗 Connecter",connecting:"⏳ Connexion…",p2pSendErr:"❌ Erreur de connexion.",p2pShort:"Le code doit comporter au moins 4 caractères.",p2pTimeout:"Délai dépassé — vérifiez le code.",p2pDataErr:"Erreur lors du traitement du profil.",p2pFail:"Connexion échouée. Le code est-il correct ?",p2pNotFound:"Appareil introuvable.",p2pRecvOk:n=>`✅ Profil « ${n} » importé !`,defaultProfile:"Profil importé",errQuota:"Stockage plein — supprimez des fiches ou des profils.",qrHint:"Ou scannez ce code avec l'appareil photo d'un téléphone pour ouvrir Query et importer ce profil",pwaNoticeTxt:"Tu es dans le navigateur, pas dans l'app Query de ton écran d'accueil. Ouvre l'app Query installée, va dans Partager → Recevoir, et entre ce code là-bas pour que le profil arrive dans l'app :",pwaImportAnyway:"Importer ici dans le navigateur quand même",modeSend:"Envoyer",modeRecv:"Recevoir",theme:"Thème",editMode:"Éditer",editModeExit:"Terminer",listMode:"Liste",gridMode:"Grille",resetSize:"Réinitialiser taille/position",resetAllSizes:"Réinitialiser toutes les tailles",cardColor:"Couleur",dragHandle:"Déplacer librement",coverAdd:"Bannière",coverChange:"Changer",confirmRemoveCover:"Supprimer cette image de bannière ?",coverReposition:"Repositionner",coverRepositionHint:"Glissez pour repositionner",coverSavePos:"Enregistrer la position",exportSection:"Exportation",exportFolder:"Emplacement d'enregistrement",chooseFolder:"Choisir un dossier…",changeFolder:"Changer…",exportFolderHint:"Les fichiers JSON exportés sont enregistrés directement dans ce dossier au lieu des téléchargements du navigateur.",exportFolderUnsupported:"Ne fonctionne pas sur Firefox — votre navigateur ne permet pas de choisir un dossier, les fichiers seront téléchargés normalement.",exportFolderReset:"Réinitialiser",exportFolderDenied:"Permission refusée — les fichiers seront téléchargés normalement.",exportSavedTo:(f,d)=>`✅ ${f} enregistré dans « ${d} »`,exportDownloaded:(f)=>`⬇️ ${f} téléchargé`,exportAllSavedTo:(n,d)=>`✅ ${n} fichier(s) enregistré(s) dans « ${d} »`,exportAllDownloaded:(n)=>`⬇️ ${n} fichier(s) téléchargé(s)`,helpSection:"Aide",guidedTour:"Visite guidée",startTour:"Lancer",guidedTourHint:"Fais un tour rapide des fonctionnalités de l'app — tu peux le relancer à tout moment.",profilesSection:"Profils",profilesHint:"Cliquez sur l'émoji pour ouvrir le sélecteur. Appuyez sur Entrée ou cliquez ailleurs pour enregistrer le nom.",changeEmoji:"Changer l'émoji",currentProfile:"actif",mentionHint:"Tapez pour rechercher une fiche à lier…",mentionNoCards:"Pas encore d'autre fiche à lier",mentionUntitled:"(fiche vide)",mentionDeleted:"Fiche supprimée",mentionDeletedTitle:"Cette fiche n'existe plus",liveTab:"Collaborer",liveInstr:"Contrairement à Envoyer/Recevoir (copie ponctuelle), la collaboration garde ce profil synchronisé en continu : toute personne ayant le lien d'invitation peut créer, modifier et supprimer des fiches, et chaque changement apparaît chez tout le monde. Les données circulent uniquement entre les appareils, chiffrées de bout en bout — pas de cloud, pas de compte.",liveCreate:"📡 Démarrer le partage",liveJoinInstr:"Rejoignez un profil partagé avec son code d'invitation (pour partager un de VOS profils, utilisez l'icône 📡 sur sa ligne dans la barre latérale) :",liveJoin:"🔗 Rejoindre",liveStatus:n=>n===0?"⏳ En attente de participants… gardez cet onglet ouvert.":`🟢 Connecté — ${n} autre(s) appareil(s)`,liveOffline:"🔴 Partage indisponible (déjà ouvert dans un autre onglet ?)",liveErrCode:"Code invalide — format attendu : ABC123-XYZ456.",liveJoined:n=>`✅ Profil partagé « ${n} » rejoint !`,liveHostHint:"Les modifications se synchronisent entre les appareils en ligne au même moment. À la reconnexion, tout se réconcilie automatiquement.",liveCurrent:"Ce profil est partagé",liveBadge:n=>`PARTAGÉ · ${n}`,liveInviteLbl:"Code d'invitation — partagez-le en privé avec vos collaborateurs :",liveNoCrypto:"Le partage nécessite un contexte sécurisé (HTTPS).",liveResume:"📡 Reprendre le partage (même code)",liveStop:"⏹ Arrêter le partage",livePseudoAsk:"Choisissez votre pseudo (visible par les autres participants) :",livePseudoSet:n=>`✅ Pseudo enregistré : ${n}`,livePseudoTitle:"Votre pseudo",livePseudoOk:"Rejoindre",liveRowTip:"Partager ce profil en direct",liveStopConfirm:"Arrêter le partage de ce profil ? Votre copie locale est conservée, mais les modifications ne seront plus synchronisées. Relancer plus tard générera un nouveau code d'invitation.",liveStopped:"Partage arrêté.",liveCopyLink:"🔗 Copier le lien d'invitation",liveLinkCopied:"✅ Lien d'invitation copié !",livePseudoLbl:"Pseudo :",liveYou:"vous",tourWelcomeTitle:"Bienvenue dans Query",tourWelcomeDesc:"Un rapide tour de toutes les fonctionnalités — ça prend moins d'une minute. Relance-le à tout moment depuis Paramètres → Aide.",tourCreateTitle:"Créer et mettre en forme une fiche",tourCreateDesc:'Clique sur « + Nouvelle fiche » pour en créer une. Mets-la en forme avec la barre d\'outils : gras, listes, liens, couleurs, images…',tourOrganizeTitle:"Épingler, colorer, organiser",tourOrganizeDesc:"Épingle les fiches importantes pour les garder en haut, donne-leur une couleur pour les repérer d'un coup d'œil, et utilise l'icône œil pour consulter une fiche sans la modifier.",tourCanvasTitle:"Vue liste ou canevas",tourCanvasDesc:"Passe en mode canevas (Éditer) pour redimensionner et déplacer librement tes fiches sur le tableau — parfait pour les tableaux visuels.",tourSearchTitle:"Rechercher partout",tourSearchDesc:"Tape un mot pour filtrer les fiches du profil actuel. Ajoute / avant ta recherche pour chercher dans tous les profils à la fois.",tourProfilesTitle:"Plusieurs profils",tourProfilesDesc:"Crée autant de profils que tu veux (Travail, Personnel, Projets…), passe de l'un à l'autre depuis la barre latérale, et réorganise-les par glisser-déposer.",tourLiveTitle:"Collaboration en direct",tourLiveDesc:"Partage un profil en direct avec d'autres personnes : tout le monde peut créer, modifier et supprimer des fiches en temps réel, chiffré de bout en bout — pas de serveur, pas de compte.",tourExportTitle:"Exporter, importer, sauvegarder",tourExportDesc:"Exporter enregistre le profil actuel en JSON, Tout exporter sauvegarde tout. Astuce : choisis un dossier dans Paramètres → Exportation pour un enregistrement automatique.",tourShareTitle:"Envoyer vers un autre appareil",tourShareDesc:"Le bouton Partager génère un code à usage unique pour transférer un profil entier d'appareil à appareil — pas de serveur, pas de compte.",tourStartTitle:"C'est parti !",tourStartDesc:"Tout est stocké localement sur ton appareil — tes données t'appartiennent. Crée ta première fiche !",tourNext:"Suivant",tourSkip:"Passer",tourFinish:"C'est parti !"}};
let lang='en';
const t=(k,...a)=>{const v=TR[lang]?.[k]??TR.en[k];return typeof v==='function'?v(...a):v??k;};

/* ════════════════════════════════════════════════════════
   STORAGE — IndexedDB primary + in-memory cache + localStorage safety net
   ────────────────────────────────────────────────────────
   Pourquoi cette architecture :
   - IndexedDB est la source de vérité (capacité ~illimitée vs 5Mo localStorage)
   - Un cache mémoire (_cache) sert toutes les lectures synchrones — ainsi
     l'API publique load()/save() reste synchrone et tout le code existant
     fonctionne sans propager d'await partout.
   - Les écritures vers IDB sont async en arrière-plan, debouncées (write-back).
   - localStorage est conservé en miroir TANT QU'IL RENTRE (best-effort) comme
     filet de secours. Si dépassement quota, on ignore silencieusement.
   - bootStorage() doit être appelé avant tout code applicatif (dans init()).
════════════════════════════════════════════════════════ */
const SK='query_app_data';
const IDB_NAME='query_app';
const IDB_STORE='kv';
const IDB_KEY='data';
let _cache=null;          // miroir mémoire de la donnée — source pour load()/save()
let _idbDb=null;          // handle IDBDatabase (null si IDB indisponible)
let _writeTimer=null;     // debounce des écritures IDB
let _writePending=false;  // une écriture est-elle planifiée ?

function _openIdb(){
  return new Promise((resolve)=>{
    if(typeof indexedDB==='undefined'){resolve(null);return;}
    let req;
    try{req=indexedDB.open(IDB_NAME,1);}catch(e){resolve(null);return;}
    req.onupgradeneeded=(e)=>{
      const db=e.target.result;
      if(!db.objectStoreNames.contains(IDB_STORE))db.createObjectStore(IDB_STORE);
    };
    req.onsuccess=(e)=>resolve(e.target.result);
    req.onerror=()=>resolve(null);
    req.onblocked=()=>resolve(null);
  });
}
function _idbGet(){
  return new Promise((resolve)=>{
    if(!_idbDb){resolve(null);return;}
    try{
      const tx=_idbDb.transaction(IDB_STORE,'readonly');
      const store=tx.objectStore(IDB_STORE);
      const req=store.get(IDB_KEY);
      req.onsuccess=()=>resolve(req.result||null);
      req.onerror=()=>resolve(null);
    }catch(_){resolve(null);}
  });
}
function _idbPut(value){
  return new Promise((resolve)=>{
    if(!_idbDb){resolve(false);return;}
    try{
      const tx=_idbDb.transaction(IDB_STORE,'readwrite');
      const store=tx.objectStore(IDB_STORE);
      const req=store.put(value,IDB_KEY);
      tx.oncomplete=()=>resolve(true);
      tx.onerror=()=>resolve(false);
      tx.onabort=()=>resolve(false);
      req.onerror=()=>{};
    }catch(_){resolve(false);}
  });
}

/**
 * À appeler une seule fois, au tout début de init().
 * - Ouvre IndexedDB si dispo
 * - Migre depuis localStorage si IDB est vide mais qu'il y a des données legacy
 * - Pré-remplit le cache mémoire pour les load() synchrones qui suivent
 */
async function bootStorage(){
  _idbDb=await _openIdb();
  let fromIdb=null;
  if(_idbDb)fromIdb=await _idbGet();

  // Lire le legacy localStorage
  let fromLS=null;
  try{const r=localStorage.getItem(SK);if(r)fromLS=JSON.parse(r);}catch(_){}

  if(fromIdb){
    _cache=fromIdb;
    // Si localStorage est vide mais IDB plein (utilisateur sur nouvel appareil
    // ayant restauré IDB via une autre voie), réécrire le snapshot LS best-effort.
    if(!fromLS){try{localStorage.setItem(SK,JSON.stringify(fromIdb));}catch(_){}}
  }else if(fromLS){
    // MIGRATION : IDB vide + localStorage présent → on copie tout vers IDB
    _cache=fromLS;
    if(_idbDb)await _idbPut(fromLS);
    // On NE supprime PAS localStorage — il reste comme filet de sécurité.
  }else{
    _cache=null;
  }
}

/**
 * Lecture synchrone depuis le cache mémoire. Retourne la donnée ou null.
 * Compatible avec l'ancien load().
 */
const load=()=>_cache;

/**
 * Écriture synchrone vers le cache, puis flush async vers IDB + localStorage
 * en arrière-plan (debounce 150ms pour éviter le spam d'I/O).
 * Compatible avec l'ancien save() — retourne true si la donnée est en mémoire.
 */
const save=d=>{
  _cache=d;
  // Best-effort localStorage immédiat — si quota dépassé, on l'ignore.
  // IDB est la vraie source de vérité maintenant.
  try{localStorage.setItem(SK,JSON.stringify(d));}catch(e){
    if(e&&e.name==='QuotaExceededError'){
      // Quota localStorage dépassé. On ne montre PLUS d'alerte car IDB couvre.
      // On vide juste le LS pour libérer la mémoire navigateur — IDB tient le coup.
      try{localStorage.removeItem(SK);}catch(_){}
    }
  }
  // Flush IDB debouncé
  if(_idbDb){
    _writePending=true;
    if(_writeTimer)clearTimeout(_writeTimer);
    _writeTimer=setTimeout(()=>{
      const snapshot=_cache;
      _writePending=false;
      _idbPut(snapshot);
    },150);
  }
  return true;
};

/**
 * Force le flush immédiat vers IDB. À appeler avant unload pour ne pas perdre
 * une écriture debouncée en cours.
 */
function flushStorage(){
  if(_writeTimer){clearTimeout(_writeTimer);_writeTimer=null;}
  if(_writePending&&_idbDb&&_cache){_writePending=false;_idbPut(_cache);}
}
window.addEventListener('beforeunload',flushStorage);
window.addEventListener('pagehide',flushStorage);

/* ════════════════════════════════════════════════════════
   EXPORT FOLDER — stores a FileSystemDirectoryHandle (File System Access API)
   so exports can be written directly to a user-chosen folder instead of
   going through the browser's default downloads location.
   The handle isn't JSON-serializable, so it lives in its own IndexedDB
   (structured-clone storage) rather than in the main kv store.
════════════════════════════════════════════════════════ */
const HDB_NAME='query_app_handles';
const HDB_STORE='h';
const HDB_KEY='exportDir';
let _handleDb=null;
function _openHandleDb(){
  return new Promise((resolve)=>{
    if(typeof indexedDB==='undefined'){resolve(null);return;}
    let req;
    try{req=indexedDB.open(HDB_NAME,1);}catch(e){resolve(null);return;}
    req.onupgradeneeded=(e)=>{
      const db=e.target.result;
      if(!db.objectStoreNames.contains(HDB_STORE))db.createObjectStore(HDB_STORE);
    };
    req.onsuccess=(e)=>resolve(e.target.result);
    req.onerror=()=>resolve(null);
    req.onblocked=()=>resolve(null);
  });
}
async function _handleStore(mode){
  if(!_handleDb)_handleDb=await _openHandleDb();
  if(!_handleDb)return null;
  try{return _handleDb.transaction(HDB_STORE,mode).objectStore(HDB_STORE);}catch(_){return null;}
}
async function getExportDirHandle(){
  const store=await _handleStore('readonly');
  if(!store)return null;
  return new Promise(resolve=>{
    try{
      const req=store.get(HDB_KEY);
      req.onsuccess=()=>resolve(req.result||null);
      req.onerror=()=>resolve(null);
    }catch(_){resolve(null);}
  });
}
async function setExportDirHandle(handle){
  const store=await _handleStore('readwrite');
  if(!store)return false;
  return new Promise(resolve=>{
    try{
      const tx=store.transaction;
      store.put(handle,HDB_KEY);
      tx.oncomplete=()=>resolve(true);
      tx.onerror=()=>resolve(false);
      tx.onabort=()=>resolve(false);
    }catch(_){resolve(false);}
  });
}
async function clearExportDirHandle(){
  const store=await _handleStore('readwrite');
  if(!store)return;
  return new Promise(resolve=>{
    try{
      const tx=store.transaction;
      store.delete(HDB_KEY);
      tx.oncomplete=()=>resolve();
      tx.onerror=()=>resolve();
      tx.onabort=()=>resolve();
    }catch(_){resolve();}
  });
}
async function ensureDirPermission(handle){
  if(!handle)return false;
  const opts={mode:'readwrite'};
  try{
    if((await handle.queryPermission(opts))==='granted')return true;
    if((await handle.requestPermission(opts))==='granted')return true;
  }catch(_){}
  return false;
}

/**
 * Writes JSON export data as a file. If the user has chosen an export folder
 * (and permission is still granted), writes directly into it; otherwise falls
 * back to the regular browser download (<a download>).
 */
async function writeExportFile(filename,exportData,opts){
  const silent=!!(opts&&opts.silent);
  const json=JSON.stringify(exportData,null,2);
  const handle=await getExportDirHandle();
  if(handle&&await ensureDirPermission(handle)){
    try{
      const fileHandle=await handle.getFileHandle(filename,{create:true});
      const writable=await fileHandle.createWritable();
      await writable.write(json);
      await writable.close();
      if(!silent)showToast(t('exportSavedTo',filename,handle.name));
      return true;
    }catch(_){/* fall through to regular download */}
  }
  const url=URL.createObjectURL(new Blob([json],{type:'application/json'}));
  const a=document.createElement('a');
  a.href=url;a.download=filename;
  document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),1000);
  if(!silent)showToast(t('exportDownloaded',filename));
  return false;
}

let _exportDirHandle=null; // cached for the settings UI (label + name display)
async function refreshExportDirUI(){
  const supported=typeof window.showDirectoryPicker==='function';
  const chooseBtn=$('chooseExportDirBtn'),unsupported=$('exportDirUnsupported'),row=$('exportDirRow'),hint=$('lbl-exportFolderHint');
  if(chooseBtn)chooseBtn.style.display=supported?'':'none';
  if(unsupported)unsupported.style.display=supported?'none':'';
  if(hint)hint.style.display=supported?'':'none';
  _exportDirHandle=supported?await getExportDirHandle():null;
  const row_=row,nameEl=$('exportDirName'),lbl=$('lbl-chooseFolder');
  if(lbl)lbl.textContent=t(_exportDirHandle?'changeFolder':'chooseFolder');
  if(_exportDirHandle){
    if(row_)row_.style.display='';
    if(nameEl){nameEl.textContent=_exportDirHandle.name;nameEl.title=_exportDirHandle.name;}
  }else if(row_){
    row_.style.display='none';
  }
}


/* ════════════════════════════════════════════════════════
   STATE
════════════════════════════════════════════════════════ */
let entries=[],currentPid='',profiles={},editIdx=-1,themeMode='light',customColor='#2563eb',editMode=false,tourSeen=false;

/* ════════════════════════════════════════════════════════
   HELPERS
════════════════════════════════════════════════════════ */
const $=id=>document.getElementById(id);
let _toastTimer=null;
function showToast(msg,opts){
  const el=$('toast');if(!el)return;
  el.textContent=msg;
  toggleClass(el,'error',!!(opts&&opts.error));
  if(_toastTimer)clearTimeout(_toastTimer);
  // Re-trigger the transition even if a toast is already showing
  remClass(el,'on');
  void el.offsetWidth;
  addClass(el,'on');
  _toastTimer=setTimeout(()=>remClass(el,'on'),(opts&&opts.duration)||3200);
}
const addClass=(el,...c)=>el.classList.add(...c);
const remClass=(el,...c)=>el.classList.remove(...c);
const toggleClass=(el,c,v)=>el.classList.toggle(c,v);
const isRich=s=>/<[a-z][\s\S]*>/i.test(s);
// SÉCURITÉ (anti-XSS) : tout HTML de fiche passe par DOMPurify avant d'être affiché ou stocké.
// Retire <script>, les attributs on*=, les liens javascript:, <iframe>, etc. Garde la mise en forme.
const PURIFY_CFG={ADD_ATTR:['target','contenteditable'],FORBID_TAGS:['style','form','input','button','textarea','select','iframe','frame','object','embed','base','meta','link']};
if(window.DOMPurify)DOMPurify.addHook('afterSanitizeAttributes',n=>{
  if(n.tagName==='A'&&n.getAttribute('target'))n.setAttribute('rel','noopener noreferrer');
  if(n.hasAttribute&&n.hasAttribute('contenteditable')&&n.getAttribute('contenteditable')!=='false')n.removeAttribute('contenteditable');
});
// Si purify.min.js n'a pas chargé, on échappe tout (texte brut) plutôt que d'afficher du HTML non vérifié.
const cleanHtml=s=>{s=typeof s==='string'?s:'';return window.DOMPurify?DOMPurify.sanitize(s,PURIFY_CFG):s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');};
// Nettoie le contenu d'une fiche seulement s'il contient du HTML (le texte brut est échappé à l'affichage).
const cleanContent=s=>{s=typeof s==='string'?s:'';return isRich(s)?cleanHtml(s):s;};
// RECHERCHE — insensible aux accents : "cafe" doit retrouver "café" et inversement.
// NFD décompose les lettres accentuées en (lettre de base + accent), puis on retire les accents.
const foldAccents=s=>s.normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/œ/g,'oe').replace(/æ/g,'ae');
function isImageOnlyHtml(html){
  const tmp=document.createElement('div');
  tmp.innerHTML=html;
  if(tmp.querySelectorAll('img').length!==1)return false;
  tmp.querySelectorAll('img').forEach(i=>i.remove());
  return tmp.textContent.trim()===''&&tmp.querySelector('video,audio,iframe')==null;
}
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
// Stable id for entries — needed so a "!mention" link survives reorders/edits/exports.
const genId=()=>'c'+Date.now().toString(36)+Math.random().toString(36).slice(2,8);
const fmtDate=ts=>{if(!ts)return'';const d=new Date(ts);return`${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}/${d.getFullYear()}`;};

function showBackdrop(){remClass($('backdrop'),'off');}
function hideBackdrop(){addClass($('backdrop'),'off');}

// In-app confirm dialog — replaces window.confirm() so the popup matches the app's look.
// Returns a Promise<boolean>. Safe to call while another modal (e.g. the card editor) is open.
let _confirmResolve=null,_confirmBackdropWasOn=false;
function openConfirmModal(msg,okLabel,title){
  $('confirmModal-title').textContent=title||t('confirmCardTitle');
  $('confirmModal-msg').textContent=msg;
  $('confirmModalOk').textContent=okLabel||t('delete');
  $('confirmModalCancel').textContent=t('cancel');
  _confirmBackdropWasOn=!$('backdrop').classList.contains('off');
  remClass($('confirmModal'),'off');
  showBackdrop();
  return new Promise(res=>{_confirmResolve=res;});
}
function closeConfirmModal(result){
  addClass($('confirmModal'),'off');
  if(!_confirmBackdropWasOn)hideBackdrop();
  if(_confirmResolve){const r=_confirmResolve;_confirmResolve=null;r(result);}
}
$('confirmModalOk').addEventListener('click',()=>closeConfirmModal(true));
$('confirmModalCancel').addEventListener('click',()=>closeConfirmModal(false));
$('confirmModalClose').addEventListener('click',()=>closeConfirmModal(false));

/* ════════════════════════════════════════════════════════
   THEME
════════════════════════════════════════════════════════ */
function applyTheme(m){
  document.body.classList.remove('dark','custom');
  ['btn-light','btn-dark','btn-custom'].forEach(id=>remClass($(id),'on'));
  $('colorDot').style.background=customColor;
  if(m==='light'){addClass($('btn-light'),'on');$('logo-light').classList.add('on');$('logo-dark').classList.remove('on');}
  else if(m==='dark'){addClass(document.body,'dark');addClass($('btn-dark'),'on');$('logo-light').classList.remove('on');$('logo-dark').classList.add('on');}
  else if(m==='custom'){
    addClass(document.body,'custom');addClass($('btn-custom'),'on');$('logo-light').classList.remove('on');$('logo-dark').classList.add('on');
    const h=customColor.replace('#',''),r=parseInt(h.slice(0,2),16),g=parseInt(h.slice(2,4),16),b=parseInt(h.slice(4,6),16);
    const lum=.299*r+.587*g+.114*b;
    const bg=lum>100?`rgb(${Math.max(r-70,0)},${Math.max(g-70,0)},${Math.max(b-70,0)})`:`rgb(${Math.min(r+60,255)},${Math.min(g+60,255)},${Math.min(b+60,255)})`;
    document.body.style.setProperty('--cx-bg',bg);
    document.body.style.setProperty('--cx-panel',`rgba(${r},${g},${b},0.88)`);
    document.body.style.setProperty('--cx-card','rgba(255,255,255,0.08)');
  }
}
const setTheme=m=>{themeMode=m;applyTheme(m);persist();};

/* ════════════════════════════════════════════════════════
   PERSIST
════════════════════════════════════════════════════════ */
// Demande au navigateur de ne pas purger les données du site quand le disque manque de place.
// Appelé à la première sauvegarde (pas au chargement) : Firefox affiche une demande d'autorisation,
// autant qu'elle arrive quand l'utilisateur a réellement quelque chose à protéger.
let _durableAsked=false;
function requestDurableStorage(){
  if(_durableAsked)return;_durableAsked=true;
  try{
    if(!navigator.storage||!navigator.storage.persist)return;
    navigator.storage.persisted().then(p=>{if(!p)return navigator.storage.persist();}).catch(()=>{});
  }catch(_){}
}
function persist(){requestDurableStorage();const d=load()||{};d.profiles=profiles;d.currentPid=currentPid;d.themeMode=themeMode;d.customColor=customColor;d.language=lang;d.tourSeen=tourSeen;if(!d.searches)d.searches={};const ok=save(d);pushToExtension();return ok;}
function saveSearch(){const d=load()||{};if(!d.searches)d.searches={};d.searches[currentPid]=$('search').value;save(d);}

/* ════════════════════════════════════════════════════════
   CONTENT PROCESSING
════════════════════════════════════════════════════════ */
// Parse a search query into { globalSearch: bool, terms: string[] }
// Leading "/" → search across all profiles. Whitespace-separated words → OR-match.
function parseSearchQuery(raw){
  const r={globalSearch:false,terms:[]};
  if(!raw)return r;
  let q=raw;
  if(q.charAt(0)==='/'){r.globalSearch=true;q=q.slice(1);}
  r.terms=q.split(/\s+/).filter(w=>w.length>0).map(w=>foldAccents(w.toLowerCase()));
  return r;
}
// A term starting with "#" is a tag lookup — matched as a whole word so
// "#js" doesn't also match "#js2" or "objs", unlike the general substring search.
function matchesTerm(targetLower,term){
  if(term.charAt(0)!=='#')return targetLower.includes(term);
  const word=term.slice(1).replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  if(!word)return targetLower.includes('#');
  return new RegExp(`(^|[^\\p{L}\\p{N}_])#${word}(?![\\p{L}\\p{N}_])`,'u').test(targetLower);
}
function matchesAllTerms(targetLower,terms){
  if(!terms||terms.length===0)return true;
  for(let i=0;i<terms.length;i++)if(!matchesTerm(targetLower,terms[i]))return false;
  return true;
}
// Les termes sont déjà "foldés" (accents retirés) par parseSearchQuery. Pour que le
// surlignage retrouve quand même "café" dans le texte réel en tapant "cafe", chaque
// lettre de base est transformée en classe regex couvrant ses variantes accentuées.
const ACCENT_EXP={a:'aàáâãäāăą',c:'cçćč',e:'eèéêëēĕėęě',i:'iìíîïĩīĭįı',n:'nñńņ',o:'oòóôõöøōŏő',s:'sśšş',u:'uùúûüũūŭůűų',y:'yýÿ',z:'zźżž'};
function buildHighlightRegex(terms){
  if(!terms||terms.length===0)return null;
  const esc=terms.slice().sort((a,b)=>b.length-a.length).map(t=>
    t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&').replace(/[a-z]/g,ch=>ACCENT_EXP[ch]?`[${ACCENT_EXP[ch]}]`:ch)
  );
  return new RegExp(`(${esc.join('|')})`,'gi');
}
function walkMark(node,re){
  if(node.nodeType===3){
    const local=new RegExp(re.source,'gi');
    if(!local.test(node.textContent))return;
    const f=document.createDocumentFragment();let li=0;
    node.textContent.replace(new RegExp(re.source,'gi'),(m,...args)=>{
      const off=args[args.length-2];
      if(off>li)f.appendChild(document.createTextNode(node.textContent.slice(li,off)));
      const mk=document.createElement('mark');mk.textContent=m;f.appendChild(mk);
      li=off+m.length;
    });
    if(li<node.textContent.length)f.appendChild(document.createTextNode(node.textContent.slice(li)));
    node.parentNode.replaceChild(f,node);
    return;
  }
  if(node.nodeName==='MARK'||node.nodeName==='A')return;
  Array.from(node.childNodes).forEach(c=>walkMark(c,re));
}
function linkify(node){
  if(node.nodeType===3){const re=/(https?:\/\/[^\s<]+)/g;if(!re.test(node.textContent))return;const f=document.createDocumentFragment();let li=0;node.textContent.replace(/(https?:\/\/[^\s<]+)/g,(u,p,off)=>{if(off>li)f.appendChild(document.createTextNode(node.textContent.slice(li,off)));const a=document.createElement('a');a.href=u;a.textContent=u;a.className='link';a.target='_blank';a.rel='noopener noreferrer';f.appendChild(a);li=off+u.length;});if(li<node.textContent.length)f.appendChild(document.createTextNode(node.textContent.slice(li)));node.parentNode.replaceChild(f,node);return;}
  if(node.nodeName==='A')return;Array.from(node.childNodes).forEach(c=>linkify(c));
}
// Detect "#word" in plain text and turn it into a clickable, searchable tag chip.
// Runs at render time (not on the stored content), so it works retroactively on
// any card that already contains "#word" text, without needing a special editor path.
const TAG_SRC=String.raw`(^|[\s(])#([\p{L}\p{N}_]{1,40})`;
function highlightTags(node){
  if(node.nodeType===3){
    if(!new RegExp(TAG_SRC,'u').test(node.textContent))return;
    const re=new RegExp(TAG_SRC,'gu');
    const f=document.createDocumentFragment();let li=0;
    node.textContent.replace(re,(m,pre,word,off)=>{
      const start=off+pre.length;
      if(start>li)f.appendChild(document.createTextNode(node.textContent.slice(li,start)));
      const span=document.createElement('span');
      span.className='tag-chip';span.dataset.tag=word.toLowerCase();
      span.textContent='#'+word;
      f.appendChild(span);
      li=start+1+word.length;
    });
    if(li<node.textContent.length)f.appendChild(document.createTextNode(node.textContent.slice(li)));
    node.parentNode.replaceChild(f,node);
    return;
  }
  if(node.nodeName==='A'||node.nodeName==='MARK')return;
  Array.from(node.childNodes).forEach(c=>highlightTags(c));
}
// Look up an entry by its stable id within a given profile — used to resolve "!mention" links.
function findEntryById(pid,id){
  const list=profiles[pid]&&profiles[pid].entries;
  if(!Array.isArray(list))return null;
  const idx=list.findIndex(e=>e&&e.id===id);
  return idx<0?null:{entry:list[idx],idx};
}
// Short plain-text preview of a card's content — used as the link-menu label and breadcrumb text.
function cardPreviewLabel(entry){
  const ct=(entry&&entry.content)||'';
  const tmp=document.createElement('div');
  tmp.innerHTML=isRich(ct)?cleanHtml(ct):esc(ct).replace(/\n/g,' ');
  const txt=(tmp.textContent||'').replace(/\s+/g,' ').trim();
  if(!txt)return t('mentionUntitled');
  const words=txt.split(' ').slice(0,6).join(' ');
  return (words.length<txt.length?words+'…':words).slice(0,64);
}
// Partie coûteuse (DOMPurify + 2 parcours du DOM) : sanitize + liens cliquables + chips #tag.
// Ne dépend QUE de entry.content, jamais du texte recherché — donc mise en cache sur l'entrée.
function buildProcessedHtml(content){
  const el=document.createElement('div');
  if(isRich(content)){el.innerHTML=cleanHtml(content);linkify(el);}
  else{const urls=[];let tmp=content.replace(/(https?:\/\/[^\s]+)/g,m=>{urls.push(m);return`[[U${urls.length-1}]]`;});tmp=esc(tmp).replace(/\[\[U(\d+)\]\]/g,(m,id)=>{const u=urls[+id];return`<a href="${esc(u)}" target="_blank" rel="noopener noreferrer" class="link">${esc(u)}</a>`;}).replace(/\n/g,'<br>');el.innerHTML=tmp;}
  highlightTags(el);
  return el.innerHTML;
}
function getProcessedContent(entry){
  if(entry._processedHtml!==undefined)return entry._processedHtml;
  const html=buildProcessedHtml(entry.content||'');
  Object.defineProperty(entry,'_processedHtml',{value:html,writable:true,enumerable:false,configurable:true});
  return html;
}
// `src` est soit une fiche (objet, mise en cache possible) soit une chaîne brute (usage ponctuel).
function processContent(src,filterTerms){
  const isEntry=src&&typeof src==='object';
  const html=isEntry?getProcessedContent(src):buildProcessedHtml(src||'');
  // Accept legacy string filter or new array of terms
  let terms=filterTerms;
  if(typeof filterTerms==='string')terms=filterTerms?[filterTerms.toLowerCase()]:[];
  const re=buildHighlightRegex(terms);
  if(!re)return html; // pas de recherche active → le HTML déjà en cache est le résultat final
  const el=document.createElement('div');
  el.innerHTML=html;
  walkMark(el,re);
  return el.innerHTML;
}
// Même vérification que l'ancien isImageOnly(), mais réutilise le HTML déjà sanitizé/en cache
// au lieu de rappeler DOMPurify une seconde fois à chaque rendu.
function isImageOnlyCached(entry){
  if(entry._imgOnly!==undefined)return entry._imgOnly;
  const v=isRich(entry.content||'')?isImageOnlyHtml(getProcessedContent(entry)):false;
  Object.defineProperty(entry,'_imgOnly',{value:v,writable:true,enumerable:false,configurable:true});
  return v;
}

/* ════════════════════════════════════════════════════════
   SIDEBAR RENDER
════════════════════════════════════════════════════════ */
function renderSidebar(){
  const list=$('profileList');list.innerHTML='';
  Object.entries(profiles).forEach(([pid,p])=>{
    const row=document.createElement('div');row.className='p-row'+(pid===currentPid?' active':'');row.dataset.pid=pid;
    row.innerHTML=`<span class="p-row-drag" title="Réordonner"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="6" r="1.6"/><circle cx="15" cy="6" r="1.6"/><circle cx="9" cy="12" r="1.6"/><circle cx="15" cy="12" r="1.6"/><circle cx="9" cy="18" r="1.6"/><circle cx="15" cy="18" r="1.6"/></svg></span><span class="p-row-icon">${esc(String(p.icon||'📁'))}</span><span class="p-row-name">${esc(p.name)}</span><span class="p-row-count">${p.entries.length}</span><button class="p-row-live" data-pid="${esc(pid)}" title="${t('liveRowTip')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="2"/><path d="M16.24 7.76a6 6 0 0 1 0 8.49"/><path d="M7.76 16.24a6 6 0 0 1 0-8.49"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M4.93 19.07a10 10 0 0 1 0-14.14"/></svg></button><button class="p-row-del" data-pid="${esc(pid)}" title="Delete profile"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>`;
    row.querySelector('.p-row-live').addEventListener('click',e=>{e.stopPropagation();if(window._openLiveShare)window._openLiveShare(pid);});
    row.querySelector('.p-row-del').addEventListener('click',e=>{e.stopPropagation();deleteProfile(pid);});
    row.querySelector('.p-row-drag').addEventListener('pointerdown',e=>{e.stopPropagation();startProfileDrag(e,pid,row);});
    row.addEventListener('click',e=>{if(!e.target.closest('.p-row-drag'))switchProfile(pid);});
    list.appendChild(row);
  });
  if(editMode)list.classList.add('edit-mode');
}

function updateTopbar(){
  const name=profiles[currentPid]?.name||'';
  $('tb-profile-name').textContent=name;
  $('content-title').textContent=name;
  updateCount();
  renderProfileCover();
}
function updateCount(){const n=entries.length;$('content-count').textContent=n>0?t('allCards',n):'';}

/* ════════════════════════════════════════════════════════
   PROFILE COVER IMAGE — a per-profile banner shown above the card list
════════════════════════════════════════════════════════ */
// Downscale + re-encode client-side so a phone photo doesn't bloat IndexedDB.
function resizeImageFile(file,maxDim,quality){
  return new Promise((resolve,reject)=>{
    const reader=new FileReader();
    reader.onerror=()=>reject(reader.error);
    reader.onload=()=>{
      const img=new Image();
      img.onerror=()=>reject(new Error('Invalid image'));
      img.onload=()=>{
        let w=img.naturalWidth,h=img.naturalHeight;
        if(w>maxDim||h>maxDim){
          if(w>=h){h=Math.round(h*maxDim/w);w=maxDim;}
          else{w=Math.round(w*maxDim/h);h=maxDim;}
        }
        const canvas=document.createElement('canvas');
        canvas.width=w;canvas.height=h;
        canvas.getContext('2d').drawImage(img,0,0,w,h);
        resolve(canvas.toDataURL('image/jpeg',quality));
      };
      img.src=reader.result;
    };
    reader.readAsDataURL(file);
  });
}
async function setProfileCover(pid,file){
  if(!file||!profiles[pid]||!file.type.startsWith('image/'))return;
  try{
    const dataUrl=await resizeImageFile(file,1600,.85);
    profiles[pid].bgImage=dataUrl;
    profiles[pid].bgPos={x:50,y:50};
    persist();
    if(pid===currentPid)renderProfileCover();
  }catch(_){alert(t('errImport'));}
}
function removeProfileCover(pid){
  if(!profiles[pid]||!profiles[pid].bgImage)return;
  delete profiles[pid].bgImage;
  delete profiles[pid].bgPos;
  persist();
  if(pid===currentPid)renderProfileCover();
}
function applyCoverPosition(){
  const p=profiles[currentPid];
  if(!p||!p.bgImage)return;
  const pos=p.bgPos||{x:50,y:50};
  $('profileCover').style.backgroundPosition=`${pos.x}% ${pos.y}%`;
}
function renderProfileCover(){
  const cov=$('profileCover'),addBtn=$('coverAddBtn');
  if(!cov||!addBtn)return;
  // Any re-render (incl. a profile switch) drops out of reposition mode —
  // the visual state only; data was already saved/discarded by whoever triggered it.
  exitCoverReposition(null);
  const p=profiles[currentPid];
  const img=p&&p.bgImage;
  if(img){
    cov.style.backgroundImage=`url("${img}")`;
    applyCoverPosition();
    remClass(cov,'off');addClass(addBtn,'off');
  }else{
    cov.style.backgroundImage='';cov.style.backgroundPosition='';
    addClass(cov,'off');remClass(addBtn,'off');
  }
}

/* ── Reposition mode: drag the cover image inside its fixed-height frame ──
   Uses the image's real natural size vs. the frame's rendered size to convert
   drag pixels into a background-position % that tracks the cursor exactly
   (not an approximation), the same math as Notion's cover repositioning. */
function getNaturalSize(dataUrl){
  return new Promise(resolve=>{
    const img=new Image();
    img.onload=()=>resolve({w:img.naturalWidth,h:img.naturalHeight});
    img.onerror=()=>resolve({w:1,h:1});
    img.src=dataUrl;
  });
}
let _coverNat=null,_coverRepoOriginal=null,_coverDrag=null;
function enterCoverReposition(){
  const cov=$('profileCover');
  addClass(cov,'repositioning');
  remClass($('coverRepositionHint'),'off');
  addClass($('coverActions'),'off');
  remClass($('coverRepositionActions'),'off');
}
// save: true = keep & persist the current position, false = revert it, null = just reset the UI (no data change)
function exitCoverReposition(save){
  const cov=$('profileCover');
  if(!cov||!cov.classList.contains('repositioning')){_coverDrag=null;return;}
  remClass(cov,'repositioning');remClass(cov,'dragging');
  addClass($('coverRepositionHint'),'off');
  remClass($('coverActions'),'off');addClass($('coverRepositionActions'),'off');
  _coverDrag=null;
  if(save===false&&profiles[currentPid]&&_coverRepoOriginal){
    profiles[currentPid].bgPos={..._coverRepoOriginal};
    applyCoverPosition();
  }else if(save===true){
    persist();
  }
  _coverRepoOriginal=null;
}
(()=>{
  const fileInput=$('coverFileInput'),cov=$('profileCover');
  $('coverAddBtn').addEventListener('click',()=>fileInput.click());
  $('coverChangeBtn').addEventListener('click',()=>fileInput.click());
  $('coverRemoveBtn').addEventListener('click',()=>{
    if(confirm(t('confirmRemoveCover')))removeProfileCover(currentPid);
  });
  fileInput.addEventListener('change',async e=>{
    const f=e.target.files[0];
    e.target.value='';
    if(f)await setProfileCover(currentPid,f);
  });

  $('coverRepositionBtn').addEventListener('click',async()=>{
    const p=profiles[currentPid];
    if(!p||!p.bgImage)return;
    _coverNat=await getNaturalSize(p.bgImage);
    _coverRepoOriginal={...(p.bgPos||{x:50,y:50})};
    enterCoverReposition();
  });
  $('coverSavePosBtn').addEventListener('click',()=>exitCoverReposition(true));
  document.addEventListener('keydown',e=>{
    if(e.key==='Escape'&&cov.classList.contains('repositioning'))exitCoverReposition(false);
  });

  cov.addEventListener('pointerdown',e=>{
    if(!cov.classList.contains('repositioning'))return;
    if(e.target.closest('.cover-action-btn'))return; // clicking Save/Change/Remove shouldn't start a drag
    const p=profiles[currentPid];
    if(!p||!p.bgImage)return;
    e.preventDefault();
    const rect=cov.getBoundingClientRect();
    const nat=_coverNat||{w:1,h:1};
    const scale=Math.max(rect.width/nat.w,rect.height/nat.h);
    const overflowX=Math.max(nat.w*scale-rect.width,0);
    const overflowY=Math.max(nat.h*scale-rect.height,0);
    const pos=p.bgPos||{x:50,y:50};
    _coverDrag={startX:e.clientX,startY:e.clientY,startPosX:pos.x,startPosY:pos.y,overflowX,overflowY};
    cov.setPointerCapture(e.pointerId);
    addClass(cov,'dragging');
  });
  cov.addEventListener('pointermove',e=>{
    if(!_coverDrag)return;
    const dx=e.clientX-_coverDrag.startX,dy=e.clientY-_coverDrag.startY;
    const nx=_coverDrag.overflowX>0?_coverDrag.startPosX-(dx/_coverDrag.overflowX)*100:50;
    const ny=_coverDrag.overflowY>0?_coverDrag.startPosY-(dy/_coverDrag.overflowY)*100:50;
    profiles[currentPid].bgPos={x:Math.max(0,Math.min(100,nx)),y:Math.max(0,Math.min(100,ny))};
    applyCoverPosition();
  });
  const endDrag=e=>{
    if(!_coverDrag)return;
    remClass(cov,'dragging');
    try{cov.releasePointerCapture(e.pointerId);}catch(_){}
    _coverDrag=null;
  };
  cov.addEventListener('pointerup',endDrag);
  cov.addEventListener('pointercancel',endDrag);
})();

/* ════════════════════════════════════════════════════════
   PROFILE OPS
════════════════════════════════════════════════════════ */
function switchProfile(pid){
  saveSearch();currentPid=pid;entries=profiles[pid]?.entries||[];persist();renderSidebar();updateTopbar();applyViewMode();
  const d=load();const ls=d?.searches?.[pid]||'';
  $('search').value=ls;render(ls);closeMobile();
  setTimeout(()=>{const s=$('search');s.focus();if(s.value)s.setSelectionRange(s.value.length,s.value.length);},60);
}

function deleteProfile(pid){
  if(Object.keys(profiles).length<=1){alert(t('errLast'));return;}
  if(!confirm(t('confirmProfile',profiles[pid].name)))return;
  delete profiles[pid];persist();switchProfile(Object.keys(profiles)[0]);renderSidebar();
}

/* ════════════════════════════════════════════════════════
   GUIDED TOUR — modern step-by-step onboarding modal, shown once
   automatically on first use and re-launchable anytime from
   Settings → Help. Replaces the old "👋 Welcome" demo profile.
════════════════════════════════════════════════════════ */
const TOUR_STEPS=[
  {icon:'👋',key:'tourWelcome'},
  {icon:'✏️',key:'tourCreate'},
  {icon:'📌',key:'tourOrganize'},
  {icon:'🖼️',key:'tourCanvas'},
  {icon:'🔍',key:'tourSearch'},
  {icon:'📁',key:'tourProfiles'},
  {icon:'📡',key:'tourLive'},
  {icon:'📤',key:'tourExport'},
  {icon:'🔗',key:'tourShare'},
  {icon:'🚀',key:'tourStart'},
];
let tourStep=0;
function openTour(){
  tourStep=0;
  renderTourStep();
  remClass($('tourModal'),'off');showBackdrop();
}
function closeTour(){addClass($('tourModal'),'off');hideBackdrop();}
function renderTourStep(){
  const s=TOUR_STEPS[tourStep];
  const last=tourStep===TOUR_STEPS.length-1;
  $('tourIcon').textContent=s.icon;
  $('tourTitle').textContent=t(s.key+'Title');
  $('tourDesc').textContent=t(s.key+'Desc');
  $('tourCounter').textContent=`${tourStep+1} / ${TOUR_STEPS.length}`;
  const dots=$('tourDots');dots.innerHTML='';
  TOUR_STEPS.forEach((_,i)=>{
    const d=document.createElement('span');
    d.className='tour-dot'+(i===tourStep?' on':'');
    dots.appendChild(d);
  });
  $('tourPrev').disabled=tourStep===0;
  $('tourSkip').style.visibility=last?'hidden':'visible';
  $('tourNext').textContent=last?t('tourFinish'):t('tourNext');
  // Re-trigger the slide-in animation on the content
  const content=$('tourContent');
  content.style.animation='none';
  void content.offsetWidth;
  content.style.animation='';
}

let _isFirstProfile=false;
function startFirstProfile(){
  _isFirstProfile=true;
  $('profileModal-title').textContent=t('welcomeTitle');$('profileName').placeholder=t('firstProfilePh');
  $('cancelProfile').style.display='none';$('cancelProfile2').style.display='none';
  remClass($('profileModal'),'off');showBackdrop();
  setTimeout(()=>$('profileName').focus(),100);
}

/* ════════════════════════════════════════════════════════
   SYNC EXTENSION CHROME
════════════════════════════════════════════════════════ */
let QUERY_EXTENSION_ID = 'ejfjhpgngmaidniobgokmphlcbgfnofg';

// Promise qui se résout quand le content script de l'extension signale son ID.
// Permet d'utiliser le bon ID (utile en dev local où l'ID est aléatoire).
const _extensionReadyPromise = new Promise((resolve) => {
  // Si l'event a déjà été dispatché avant notre listener, on le rate.
  // Donc on écoute ET on timeout après 500ms (assez pour document_idle).
  const listener = (e) => {
    if (e.detail && e.detail.extensionId) {
      QUERY_EXTENSION_ID = e.detail.extensionId;
      console.log('[Query sync] ID mis à jour via content script:', QUERY_EXTENSION_ID);
    }
    window.removeEventListener('query-extension-ready', listener);
    resolve();
  };
  window.addEventListener('query-extension-ready', listener);
  // Timeout : si le content script ne répond pas, on utilise l'ID codé en dur
  setTimeout(() => {
    window.removeEventListener('query-extension-ready', listener);
    resolve();
  }, 800);
});

function isExtensionAvailable() {
  return typeof chrome !== 'undefined'
      && chrome.runtime
      && typeof chrome.runtime.sendMessage === 'function';
}

/**
 * Pull depuis l'extension au démarrage.
 * Retourne true si des profils ont été importés.
 */
function pullFromExtension() {
  return new Promise((resolve) => {
    if (!isExtensionAvailable()) {
      console.log('[Query sync] chrome.runtime indisponible');
      return resolve(false);
    }
    console.log('[Query sync] GET_PROFILES →', QUERY_EXTENSION_ID);
    try {
      chrome.runtime.sendMessage(
        QUERY_EXTENSION_ID,
        { type: 'GET_PROFILES' },
        (response) => {
          if (chrome.runtime.lastError) {
            console.warn('[Query sync] Erreur:', chrome.runtime.lastError.message);
            return resolve(false);
          }
          if (!response || !response.ok) {
            console.warn('[Query sync] Réponse invalide:', response);
            return resolve(false);
          }
          const extProfiles = response.data && response.data.profiles;
          if (!extProfiles || !Object.keys(extProfiles).length) {
            console.log('[Query sync] Aucun profil dans l\'extension');
            return resolve(false);
          }
          // Fusionner avec les profils existants (l'extension gagne)
          const d = load() || {};
          d.profiles = Object.assign({}, d.profiles || {}, extProfiles);
          if (response.data.currentProfile) d.currentPid = response.data.currentProfile;
          save(d);
          console.log('[Query sync]', Object.keys(extProfiles).length, 'profil(s) synchronisé(s)');
          resolve(true);
        }
      );
    } catch (e) {
      console.warn('[Query sync] Exception:', e);
      resolve(false);
    }
  });
}

/**
 * Push vers l'extension après chaque modification locale.
 */
function pushToExtension() {
  if (!isExtensionAvailable()) return;
  try {
    chrome.runtime.sendMessage(
      QUERY_EXTENSION_ID,
      { type: 'SYNC_PROFILES', payload: { profiles, currentProfile: currentPid } },
      () => { void chrome.runtime.lastError; }
    );
  } catch (e) { /* ignore */ }
}

// Écoute les mises à jour en temps réel via le content script
window.addEventListener('message', (event) => {
  if (event.source !== window) return;
  if (!event.data || event.data.source !== 'query-extension') return;
  if (event.data.type === 'PROFILES_UPDATED' && event.data.profiles) {
    console.log('[Query sync] Mise à jour reçue de l\'extension');
    profiles = event.data.profiles;
    // Normaliser les entries
    Object.keys(profiles).forEach(pid => {
      if (!Array.isArray(profiles[pid].entries)) profiles[pid].entries = [];
    });
    if (profiles[currentPid]) {
      entries = profiles[currentPid].entries;
    } else {
      currentPid = Object.keys(profiles)[0] || '';
      entries = profiles[currentPid] ? profiles[currentPid].entries : [];
    }
    const d = load() || {};
    d.profiles = profiles;
    d.currentPid = currentPid;
    save(d);
    renderSidebar();
    updateTopbar();
    render($('search').value);
  }
});

/* ════════════════════════════════════════════════════════
   INIT
════════════════════════════════════════════════════════ */
async function init(){
  // CRITICAL: storage layer must be ready before any load()/save() call.
  // Loads from IndexedDB (or migrates from localStorage if first run on this version).
  try{await bootStorage();}catch(e){console.warn('[Query] bootStorage failed:',e);}
  // Attendre que le content script ait signalé l'ID (max 800ms)
  await _extensionReadyPromise;
  // Puis sync depuis l'extension
  try { await pullFromExtension(); } catch(e) { console.warn('[Query sync] Pull error:', e); }

  const d=load();
  // Logo init
  $('logo-light').classList.remove('on');$('logo-dark').classList.remove('on');
  if(d){
    lang=d.language||'en';themeMode=d.themeMode||'light';customColor=d.customColor||'#2563eb';tourSeen=!!(d.tourSeen||d.tutorialAdded);
    $('colorPicker').value=customColor;applyTheme(themeMode);applyTr();$('langSelect').value=lang;
    if(d.profiles){
      profiles=d.profiles;
      Object.keys(profiles).forEach(pid=>{
        if(!Array.isArray(profiles[pid].entries))profiles[pid].entries=[];
        else profiles[pid].entries=profiles[pid].entries.map((e,i)=>{
          if(typeof e==='string')return{id:genId(),content:e,isPinned:false,createdAt:Date.now()+i};
          if(!e||typeof e!=='object')return null;
          const o={id:e.id||genId(),content:e.content||'',isPinned:!!e.isPinned,createdAt:e.createdAt||Date.now()};
          if(typeof e.updatedAt==='number')o.updatedAt=e.updatedAt;
          if(typeof e.updatedBy==='string')o.updatedBy=e.updatedBy;
          if(typeof e.w==='number'&&e.w>0)o.w=e.w;
          if(typeof e.h==='number'&&e.h>0)o.h=e.h;
          if(typeof e.color==='string'&&e.color)o.color=e.color;
          if(typeof e.x==='number')o.x=e.x;
          if(typeof e.y==='number')o.y=e.y;
          return o;
        }).filter(Boolean);
      });
    }else{startFirstProfile();document.dispatchEvent(new Event('query-ready'));return;}
    currentPid=d.currentPid||Object.keys(profiles)[0];
    renderApp();
  }else{applyTheme('light');applyTr();startFirstProfile();}
  document.dispatchEvent(new Event('query-ready'));
}

/**
 * Renders the app for the currently-loaded `profiles`/`currentPid` in memory.
 * Split out from init() so creating the very first profile can call this
 * directly instead of re-running the whole async boot sequence (which races
 * the debounced IndexedDB write and can re-show the "create profile" modal —
 * most reliably reproducible in private/incognito sessions).
 */
function renderApp(){
  if(!profiles[currentPid])currentPid=Object.keys(profiles)[0];
  if(!tourSeen){tourSeen=true;persist();setTimeout(openTour,500);}
  entries=profiles[currentPid]?.entries||[];
  renderSidebar();updateTopbar();
  const ls=(load()||{}).searches?.[currentPid]||'';$('search').value=ls;render(ls);
  setTimeout(()=>{const s=$('search');s.focus();if(s.value)s.setSelectionRange(s.value.length,s.value.length);},60);
}

/* ════════════════════════════════════════════════════════
   RENDER CARDS
════════════════════════════════════════════════════════ */
function isCanvasActive(){ return $('results').classList.contains('canvas-mode'); }

function updateCanvasHeight(){
  const c=$('results');
  if(!isCanvasActive()||c.classList.contains('filter-active')){c.style.minHeight='';return;}
  let maxY=520;
  c.querySelectorAll('.card').forEach(cd=>{
    const t=parseFloat(cd.style.top)||0;
    if(t>-100)maxY=Math.max(maxY,t+(cd.offsetHeight||160)+160);
  });
  c.style.minHeight=maxY+'px';
}

// Pre-compute a lowercased, accent-folded plain-text version of an entry's content, lazily.
// Cached directly on the entry object (non-enumerable so it doesn't get persisted).
function getSearchText(entry){
  if(entry._searchText!==undefined)return entry._searchText;
  const ct=entry.content||'';
  const plain=isRich(ct)?ct.replace(/<[^>]+>/g,' '):ct;
  Object.defineProperty(entry,'_searchText',{value:foldAccents(plain.toLowerCase()),writable:true,enumerable:false,configurable:true});
  return entry._searchText;
}
// Invalidate every render/search cache for an entry whose content just changed
// (search text, processed HTML, image-only flag — see getProcessedContent/isImageOnlyCached).
function invalidateSearchText(entry){
  if(!entry)return;
  for(const k of['_searchText','_processedHtml','_imgOnly']){
    if(entry[k]!==undefined){try{delete entry[k];}catch(_){entry[k]=undefined;}}
  }
}

// Cap on rendered cards in global mode to keep the DOM responsive.
const GLOBAL_RENDER_CAP=200;

function render(filter=''){
  const res=$('results'),ctr=$('resultsCounter');
  // Preserve edit-mode class on results container
  if(editMode)res.classList.add('edit-mode');else res.classList.remove('edit-mode');
  // Apply per-profile view mode
  applyViewMode();
  // Mark when a filter is active so drag handles can hide (reordering hidden items is confusing)
  if(filter)res.classList.add('filtered');else res.classList.remove('filtered');

  // Parse the search query
  const parsed=parseSearchQuery(filter);
  const isGlobal=parsed.globalSearch;
  const terms=parsed.terms;
  const hasFilter=terms.length>0;

  // Suspend canvas absolute positioning when a filter is active
  if(hasFilter&&!isGlobal)res.classList.add('filter-active');
  else res.classList.remove('filter-active');

  // Build the entry pool: current profile only, or all profiles if "/" prefix
  let pool;
  if(isGlobal){
    pool=[];
    const pids=Object.keys(profiles);
    for(let pi=0;pi<pids.length;pi++){
      const pid=pids[pi];
      const list=(profiles[pid]&&Array.isArray(profiles[pid].entries))?profiles[pid].entries:[];
      for(let i=0;i<list.length;i++)pool.push({entry:list[i],profileId:pid,indexInProfile:i});
    }
  }else{
    pool=new Array(entries.length);
    for(let i=0;i<entries.length;i++)pool[i]={entry:entries[i],profileId:currentPid,indexInProfile:i};
  }

  if(pool.length===0){res.innerHTML=`<div class="empty-state"><div class="empty-state-icon">🗒️</div><div class="empty-state-title">${t('emptyTitle')}</div><div class="empty-state-sub">${t('emptySub')}</div></div>`;addClass(ctr,'off');updateCount();return;}

  // First pass: filter — fast, no DOM touched.
  const matched=[];
  for(let i=0;i<pool.length;i++){
    const entry=pool[i].entry;
    if(hasFilter&&!matchesAllTerms(getSearchText(entry),terms))continue;
    matched.push(pool[i]);
  }

  const totalMatched=matched.length;
  // Cap the number of cards we render in global mode for responsiveness.
  const willRender=(isGlobal&&totalMatched>GLOBAL_RENDER_CAP)?matched.slice(0,GLOBAL_RENDER_CAP):matched;
  const truncated=isGlobal&&totalMatched>GLOBAL_RENDER_CAP;

  // Second pass: build all cards into a fragment (single reflow).
  const frag=document.createDocumentFragment();
  let n=0;
  for(let i=0;i<willRender.length;i++){
    const {entry,profileId,indexInProfile}=willRender[i];
    n++;
    const ct=entry.content||'';
    const isExternal=isGlobal&&profileId!==currentPid;
    const card=document.createElement('div');
    const colorClass=entry.color?' color-'+entry.color:'';
    const imgOnly=isImageOnlyCached(entry);
    card.className='card'+(entry.isPinned?' pinned':'')+colorClass+(imgOnly?' img-only':'');
    // Skip animation in global mode for performance (a lot of cards = a lot of paints)
    if(!isGlobal)card.style.animationDelay=`${n*.025}s`;
    else card.style.animation='none';
    card.dataset.idx=indexInProfile;
    if(isExternal)card.dataset.profilePid=profileId;
    // Apply custom size if present
    const hasSize=(typeof entry.w==='number'&&entry.w>0)||(typeof entry.h==='number'&&entry.h>0);
    if(hasSize){
      card.dataset.sized='1';
      if(entry.w)card.style.width=entry.w+'px';
      if(entry.h)card.style.height=entry.h+'px';
    }
    // Apply canvas position if canvas mode is active and no filter is distorting layout
    if(isCanvasActive()&&!hasFilter&&typeof entry.x==='number'&&typeof entry.y==='number'){
      card.style.left=entry.x+'px';
      card.style.top=entry.y+'px';
    }
    // Profile badge HTML (only when global search is active)
    const profName=(profiles[profileId]&&profiles[profileId].name)||profileId;
    const badgeHtml=isGlobal?`<span class="profile-badge" title="${esc(profName)}">${esc(profName)}</span>`:'';
    card.innerHTML=`<div class="card-pin-label">📌 Pinned</div>
    <button class="card-delete-btn" data-r="delete-card" title="${t('delete')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    <button class="card-reset-size" data-r="reset-size" title="${t('resetSize')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 12a9 9 0 1 0 3-6.7"/><polyline points="3 3 3 9 9 9"/></svg></button>
    <div class="card-body rich-content${isRich(ct)?'':' plain-text'}">${processContent(entry,terms)}</div><div class="card-footer"><div class="card-footer-left">${badgeHtml}<span class="card-date">${fmtDate(entry.createdAt)}</span></div><div class="card-actions">
    <button class="card-btn${entry.isPinned?' pin-on':''}" data-r="pin" title="${entry.isPinned?t('unpin'):t('pin')}"><svg viewBox="0 0 24 24" fill="${entry.isPinned?'currentColor':'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="12" y1="17" x2="12" y2="22"/><path d="M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z"/></svg></button>
    <button class="card-btn" data-r="copy" title="${t('copy')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg></button>
    <button class="card-btn" data-r="view" title="${t('view')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z"/><circle cx="12" cy="12" r="3"/></svg></button>
    <button class="card-btn" data-r="edit" title="${t('edit')}"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>
    </div></div>
    <div class="card-resize-handle rh-r" data-r="resize-r"></div>
    <div class="card-resize-handle rh-b" data-r="resize-b"></div>
    <div class="card-resize-handle rh-br" data-r="resize-br"></div>`;
    frag.appendChild(card);
  }
  // Single DOM swap — much faster than appending one by one.
  res.innerHTML='';
  res.appendChild(frag);

  // Optional truncation notice
  if(truncated){
    const more=document.createElement('div');
    more.className='empty-state';
    more.style.padding='16px';
    more.innerHTML=`<div class="empty-state-sub">… +${totalMatched-GLOBAL_RENDER_CAP} ${t('resultsN',totalMatched-GLOBAL_RENDER_CAP).replace(/^\d+\s*/,'')}</div>`;
    res.appendChild(more);
  }

  if(hasFilter){remClass(ctr,'off');ctr.textContent=t('resultsN',totalMatched);}else{addClass(ctr,'off');}
  updateCount();
  if(totalMatched===0&&hasFilter)res.innerHTML=`<div class="empty-state"><div class="empty-state-icon">🔍</div><div class="empty-state-title">${t('noResultTitle')}</div><div class="empty-state-sub">${t('noResultSub')}</div></div>`;
  // Auto-activate canvas if entries have stored positions (handles page reload)
  if(!isCanvasActive()&&!isGlobal&&entries.some(e=>typeof e.x==='number'))res.classList.add('canvas-mode');
  if(isCanvasActive()&&!hasFilter)ensureCanvasPositions();else updateCanvasHeight();
  // Inject header+copy button into code blocks
  injectPreCopyButtons(res);
}

function injectPreCopyButtons(container){
  const COPY_SVG=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
  const OK_SVG=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`;
  container.querySelectorAll('.card-body.rich-content pre').forEach(pre=>{
    if(pre.parentElement.classList.contains('code-block'))return;
    const code=pre.querySelector('code');
    const text=(code||pre).textContent;
    const wrapper=document.createElement('div');
    wrapper.className='code-block';
    pre.parentNode.insertBefore(wrapper,pre);
    const header=document.createElement('div');
    header.className='code-block-header';
    const lbl=document.createElement('span');
    lbl.className='code-lang-label';
    lbl.textContent='code';
    const btn=document.createElement('button');
    btn.className='pre-copy-btn';
    btn.title='Copier le code';
    btn.innerHTML=COPY_SVG;
    btn.addEventListener('click',e=>{
      e.stopPropagation();
      navigator.clipboard.writeText(text).then(()=>{
        btn.classList.add('copied');btn.innerHTML=OK_SVG;
        setTimeout(()=>{btn.classList.remove('copied');btn.innerHTML=COPY_SVG;},1500);
      });
    });
    header.appendChild(lbl);header.appendChild(btn);
    wrapper.appendChild(header);wrapper.appendChild(pre);
  });
}

// Pin/unpin a card by (profileId, index) — supports global search
function togglePinAt(profileId,idx){
  if(!$('addModal').classList.contains('off'))return;
  const list=profiles[profileId]&&profiles[profileId].entries;
  if(!Array.isArray(list)||!list[idx])return;
  list[idx].isPinned=!list[idx].isPinned;
  list.sort((a,b)=>(b.isPinned?1:0)-(a.isPinned?1:0));
  profiles[profileId].entries=list;
  if(profileId===currentPid)entries=list;
  persist();renderSidebar();render($('search').value);
}

// Delete a card by (profileId, index) directly from the card, without opening the editor
function deleteCardAt(profileId,idx){
  if(!$('addModal').classList.contains('off'))return;
  const list=profiles[profileId]&&profiles[profileId].entries;
  if(!Array.isArray(list)||!list[idx])return;
  openConfirmModal(t('confirmCard')).then(ok=>{
    if(!ok)return;
    list.splice(idx,1);
    profiles[profileId].entries=list;
    if(profileId===currentPid)entries=list;
    persist();renderSidebar();render($('search').value);
  });
}

// Edit a card by (profileId, index) — switches profile if needed
function editCardAt(profileId,idx){
  if(profileId!==currentPid){
    // Switch first, then open the editor
    saveSearch();
    currentPid=profileId;
    entries=profiles[profileId]?.entries||[];
    persist();renderSidebar();updateTopbar();
    const d=load();const ls=d?.searches?.[profileId]||'';
    $('search').value=ls;render(ls);
    setTimeout(()=>editCard(idx),50);
    return;
  }
  editCard(idx);
}

function togglePin(idx){if(!$('addModal').classList.contains('off'))return;entries[idx].isPinned=!entries[idx].isPinned;entries.sort((a,b)=>(b.isPinned?1:0)-(a.isPinned?1:0));profiles[currentPid].entries=entries;persist();renderSidebar();render($('search').value);}

function buildClipboardHtml(content){
  const isDark=document.body.classList.contains('dark');
  const fg=isDark?'#f2f2f2':'#1c1c1a';
  const codeBg=isDark?'#2a2a2a':'#f1f5f9';
  const codeBd=isDark?'#383838':'#e2e8f0';
  const accent='#2563eb';
  // Apply inline styles via DOM so that broken CRM editors (e.g. Dynamics) don't
  // render the <style> block as visible text.
  const tmp=document.createElement('div');
  tmp.innerHTML=cleanHtml(content);
  tmp.querySelectorAll('h1').forEach(el=>el.style.cssText='font-size:1.5em;font-weight:700;margin:.6em 0 .3em;');
  tmp.querySelectorAll('h2').forEach(el=>el.style.cssText='font-size:1.25em;font-weight:700;margin:.6em 0 .3em;');
  tmp.querySelectorAll('h3').forEach(el=>el.style.cssText='font-size:1.1em;font-weight:700;margin:.6em 0 .3em;');
  tmp.querySelectorAll('ul').forEach(el=>el.style.cssText='padding-left:1.6em;list-style:disc;margin:.35em 0;');
  tmp.querySelectorAll('ol').forEach(el=>el.style.cssText='padding-left:1.6em;list-style:decimal;margin:.35em 0;');
  tmp.querySelectorAll('li').forEach(el=>el.style.cssText='margin:.15em 0;');
  tmp.querySelectorAll('blockquote').forEach(el=>el.style.cssText=`border-left:3px solid ${accent};background:rgba(37,99,235,.08);padding:8px 14px;margin:.5em 0;font-style:italic;`);
  tmp.querySelectorAll('code').forEach(el=>{if(el.parentElement.tagName!=='PRE')el.style.cssText=`font-family:'Consolas','Courier New',monospace;font-size:.9em;background:${codeBg};border:1px solid ${codeBd};padding:1px 5px;border-radius:4px;`;});
  tmp.querySelectorAll('pre').forEach(el=>el.style.cssText=`background:${codeBg};border:1px solid ${codeBd};border-radius:6px;padding:10px 12px;margin:.5em 0;font-family:'Consolas','Courier New',monospace;font-size:.88em;line-height:1.55;white-space:pre;`);
  tmp.querySelectorAll('pre code').forEach(el=>el.style.cssText='background:transparent;border:none;padding:0;');
  tmp.querySelectorAll('hr').forEach(el=>el.style.cssText=`border:none;border-top:2px solid ${codeBd};margin:.75em 0;`);
  const body=`<div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;font-size:14px;line-height:1.65;color:${fg};">${tmp.innerHTML}</div>`;
  return `<!DOCTYPE html><html><head><meta charset="utf-8"></head><body>${body}</body></html>`;
}

function writeCardToClipboard(entry,onDone){
  const tmp=document.createElement('div');
  tmp.innerHTML=cleanHtml(entry.content||'');
  const plain=tmp.innerText;
  const html=isRich(entry.content)?entry.content:'';

  if(html&&navigator.clipboard.write){
    navigator.clipboard.write([new ClipboardItem({
      'text/html':new Blob([buildClipboardHtml(html)],{type:'text/html'}),
      'text/plain':new Blob([plain],{type:'text/plain'}),
    })]).then(onDone).catch(()=>navigator.clipboard.writeText(plain).then(onDone));
  }else{
    navigator.clipboard.writeText(plain).then(onDone);
  }
}
function copyCard(entry,card){
  writeCardToClipboard(entry,()=>{
    const btn=card.querySelector('[data-r="copy"]');
    if(!btn)return;
    btn.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><polyline points="20 6 9 17 4 12"/></svg>`;
    btn.classList.add('copied');
    setTimeout(()=>{
      btn.innerHTML=`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
      btn.classList.remove('copied');
    },1500);
  });
}

/* ════════════════════════════════════════════════════════
   EXPORT PDF — ouvre un nouvel onglet mis en page comme un vrai document
   (en-tête avec le logo Query, pied de page, page blanche) ; le PDF lui-même
   est produit par "Imprimer → Enregistrer en PDF" du navigateur (pas de
   librairie externe : le texte reste sélectionnable/recherchable dans le
   PDF, contrairement à une capture d'écran).
   Le logo est encodé en base64 (icon128.png) pour s'afficher instantanément,
   sans dépendre du réseau — l'onglet peut imprimer dès son premier rendu.
════════════════════════════════════════════════════════ */
// Titre du bandeau PDF : comme cardPreviewLabel() mais insère un espace aux frontières de bloc
// (</p>, </div>, <br>…) — sans ça "Réunion équipe" + "Points abordés" (2 lignes) devient
// "Réunion équipePoints abordés" en un mot, invisible dans les usages existants de
// cardPreviewLabel (petit texte de lien) mais très visible ici en gros titre.
function pdfHeroTitle(entry){
  const ct=(entry&&entry.content)||'';
  const tmp=document.createElement('div');
  tmp.innerHTML=isRich(ct)?cleanHtml(ct):esc(ct).replace(/\n/g,'<br>');
  // beforebegin ET afterend : sur un contenteditable, seule la 1ère ligne tapée reste du texte
  // brut (pas de <div>), donc un espace "après le bloc" seul ne séparerait pas ligne 1 / ligne 2.
  tmp.querySelectorAll('p,div,li,h1,h2,h3,h4,blockquote,tr,br').forEach(el=>{
    el.insertAdjacentText('beforebegin',' ');el.insertAdjacentText('afterend',' ');
  });
  const txt=(tmp.textContent||'').replace(/\s+/g,' ').trim();
  if(!txt)return t('mentionUntitled');
  const words=txt.split(' ').slice(0,10).join(' ');
  return (words.length<txt.length?words+'…':words).slice(0,90);
}
const QUERY_LOGO_B64='iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABmJLR0QA/wD/AP+gvaeTAAAGmklEQVR4nO3dX2wc1RXH8e+Z3XXs2ImN4/zDNH8gpZFCBJh/kdKWAKoEEQQECKlSQ5EISZAi8dSXkKbQPyBQea5CiqqKP4oKSKFVeUClfuChFcEgxAN2RBqS4DiWcEzixNmsd/f2wRiljut4I5+52jnn8+a1fe615zczd3bunRWmEUKYA9wF3A/cDCwFFgG56X7PRTUMfAG8B7wqIn3T/bBM9WIIIQ9sAXYzvtFd/Xof2CEivVN986IAhBCWA/uBG5Q75tJTAp4Vkecmf+N/AhBCuBX4G+OHeZc9e4EnRaQy8cJ3Afh2z/8Q3/hZ94qIbJn4IoHvzvn78Y1vweMhhG0TXwhACGE78IdoXXJpKwKrReSIfHupdxgf7VvzmohslhDCRuDvsXvjUlcFrk6AB2L3xEWRAI8kQFfsnrhoNiZAZ+xeuGhWSgihjL+3b1VZQgghdi9cPEnsDri4PADGeQCM8wAY5wEwzgNgnAfAOA+AcR4A4zwAxnkAjPMAGJfXbmD0fGDf+yN094xyfKjMWNnvPU2nIS+sWFpg0/pm7l3fQjLl0p3Zo3o38JOD59n++0EGhyuX/mF3kZt+0MieXyyio1Xvbr1aAHqPlnho1wBnz1U1yptxTWeBd56/kpYmnbO12hhg556vfePPgkP9Y/z2zyfV6qsE4PMvS3x88LxGaZPe7B5hYKisUlslAD0HixplzapU4YNPz6nUVgnA0Gk/9M+2Eyd1BtIqAQhVv9SbbVWl/6m/EWScB8A4D4BxHgDjPADGeQCM8wAY5wEwzgNgnAfAOA+AcSoBKOSV5zEZpPU/VQnAiqUFjbKmLVmgM31TJQAbbmhSm8JkUSKwfm2TTm2Nos1NCTseatMobdKDt7ewpF1nYqjabrp1Uysb1zVrlTdjVWeB3Y8tUKuvOi28UoWX9g3z8l9PUa74JJFa3bOumee3ddDWonc6TeUpYQNDZd7911mODJYp+8KQaSWJ0Lkwxx1dc1m9rEG9PX9MnHE+VDfOA2CcB8A49dXBMQydqnB4YIxiqf6GNw0FYcWSAouuSOfxzZkKQE9fkRffGObA50XqeWmCCKxb08jOze2svXqObltZuQr4yz9H2PnyUKbeb8jnhJd2dHD/D1vU2shEAA70FvnpMycytfEn5HPCvmeWcPPqRpX6mRgEvvD6cCY3PkC5Eti1d0jtlFb3AThxskJPX7ZXI/ceLan9jXUfgP8cL1H/J7FL++xQSaVu3QdgtGhg6wOnz9bR8nBXPzwAxnkAjPMAGOcBMM4DYFzdByCfs7EIJVF6aHDdB+DKDhuferuwrc6mhafl+1c1sHxx9lcirVvjN4OmJAJPPZLtRSgbbmxipdJyu7oPAMCDP27h4Q1698xjap+f43dPdKjVz0QAAF54ciHbNrWSy8xfBKuXNfDWb5bSuVBv4lYmJoRcqO9oiTe7z9B3tMQ3Z+rvmcVNc4TvLc5zZ9dc7r6tWT3QmQuAq02GDpjucngAjPMAGJepdQFRVEYJpaFZKye5udCg9zyAyTwAl6M8QvXYK1QH90Oxf/br5+eTLL6PZPkOaNB7DwD8KqBmYfQw1c8eJ5w7pt9YoY3cdXuQ1i61JjwAtSiPUPloE6H4VXpt5ueR63obmbtSpbwPAmtQPfbHdDc+jJ9uDu5WK+8BqEF18J0o7YZv/k0406tS2wMwU+URnQHfDIVTH6nU9QDMVPl03PbHhlXKegDqhn9uoFPgATDOA2CcB8A4D4BxHoAZi70ARWdTeQBmqmEBSMRFKIUrVMp6AGYqmYO03hKteZl/vUpdD0ANkmVbo7Qr89Yi89ao1PYA1EDaf0TS+bN0G00aSa79NVpjEA9AjZJVvyS56uekMigstJFbuweZd51aEz4h5DKFUz1U+1+DkU8JY7N4oyjJI42dSPsGks5HodA6e7Wn4AEwzk8BxnkAjPMAGOcBMM4DYJwHwDgPgHEeAOM8AMZ5AIzzABjnATAuAcqxO+GiqSTA8di9cNGcSIDDsXvhohlIgHdj98JF86GEEFYAh/ABoUV3JyLyJfBG7J641B0Huif2+l1Atj+A1032KxEpJQAicgR4KnKHXHp6gD/BpLnNIYS9wJYYPXKpGQRuEZFjcPHAbzuwN/UuubQMAvdNbHyYFAARqYjIVuBpQOfzyl0sPYzv+QcufHHKSz8ReQ64HvhHCh1zuvqBJ4DbLtzzJ1xyfVMI4VpgM/ATYBWQ3qOsXa0qjB/m+xnf4/cD3SLyf4/m/wU/srbGsO6XCgAAAABJRU5ErkJggg==';
function buildPdfHtml(entry,profileName){
  const isDark=document.body.classList.contains('dark');
  // Seule la toile autour de la page (et le bouton) suit le thème de l'app : la feuille elle-même
  // est toujours blanche, pour qu'un export fait en mode sombre ne sorte pas en PDF noir.
  const pageBg=isDark?'#0a0a0b':'#e7e7ea';
  const btnBg=isDark?'#f5f5f5':'#18181b';
  const btnFg=isDark?'#18181b':'#ffffff';
  const surface='#ffffff';
  const border='#e4e4e7';
  const fg='#09090b';
  const fgBody='#1f1f23';
  const fg3='#8b8b93';
  const accent='#2563eb';
  const accentDeep='#1d4ed8';
  const accentFaint='#eff6ff';
  const codeBg='#f1f5f9';
  const codeBd='#e2e8f0';

  // Reprend le même HTML (déjà sanitizé + liens + tags) que la carte à l'écran,
  // mais avec des styles inline — un onglet autonome ne doit pas dépendre du CSS de l'app.
  const tmp=document.createElement('div');
  tmp.innerHTML=getProcessedContent(entry);
  tmp.querySelectorAll('h1').forEach(el=>el.style.cssText='font-size:1.5em;font-weight:700;margin:.9em 0 .35em;letter-spacing:-.01em;');
  tmp.querySelectorAll('h2').forEach(el=>el.style.cssText='font-size:1.25em;font-weight:700;margin:.8em 0 .3em;');
  tmp.querySelectorAll('h3').forEach(el=>el.style.cssText='font-size:1.1em;font-weight:700;margin:.7em 0 .3em;');
  tmp.querySelectorAll('h1:first-child,h2:first-child,h3:first-child').forEach(el=>el.style.marginTop='0');
  tmp.querySelectorAll('ul').forEach(el=>el.style.cssText='padding-left:1.5em;list-style:disc;margin:.4em 0;');
  tmp.querySelectorAll('ol').forEach(el=>el.style.cssText='padding-left:1.5em;list-style:decimal;margin:.4em 0;');
  tmp.querySelectorAll('li').forEach(el=>el.style.cssText='margin:.2em 0;');
  tmp.querySelectorAll('blockquote').forEach(el=>el.style.cssText=`border-left:3px solid ${accent};background:${accentFaint};padding:10px 16px;margin:.6em 0;font-style:italic;`);
  tmp.querySelectorAll('code').forEach(el=>{if(el.parentElement.tagName!=='PRE')el.style.cssText=`font-family:'Geist Mono',ui-monospace,Menlo,monospace;font-size:.9em;background:${codeBg};border:1px solid ${codeBd};padding:1px 5px;border-radius:4px;`;});
  tmp.querySelectorAll('pre').forEach(el=>el.style.cssText=`background:${codeBg};border:1px solid ${codeBd};border-radius:8px;padding:12px 14px;margin:.6em 0;font-family:'Geist Mono',ui-monospace,Menlo,monospace;font-size:.85em;line-height:1.55;white-space:pre-wrap;word-break:break-word;`);
  tmp.querySelectorAll('pre code').forEach(el=>el.style.cssText='background:transparent;border:none;padding:0;');
  tmp.querySelectorAll('hr').forEach(el=>el.style.cssText=`border:none;border-top:1px solid ${border};margin:1em 0;`);
  tmp.querySelectorAll('img').forEach(el=>el.style.cssText='max-width:100%;border-radius:10px;display:block;margin:.5em 0;');
  tmp.querySelectorAll('a[href]').forEach(el=>el.style.cssText=`color:${accent};text-decoration:underline;text-decoration-color:rgba(37,99,235,.35);text-underline-offset:2px;`);
  tmp.querySelectorAll('.tag-chip').forEach(el=>el.style.cssText=`display:inline-block;background:${accentFaint};color:${accentDeep};padding:2px 10px;border-radius:999px;font-size:.82em;font-weight:600;letter-spacing:.01em;`);

  const label=cardPreviewLabel(entry);
  const heroTitle=pdfHeroTitle(entry);
  const dateStr=fmtDate(entry.createdAt);
  const exportedStr=fmtDate(Date.now());
  const printLabel=t('pdfPrintBtn');
  const exportedByLabel=lang==='fr'?'Exporté avec':'Exported with';
  // Texte du pied de page répété (boîtes de marge @page) : passe dans une chaîne CSS, donc
  // on retire ce qui pourrait la fermer.
  const footerCss=`${exportedByLabel} Query · ${exportedStr}`.replace(/["\\<>\r\n]/g,' ');

  return `<!DOCTYPE html>
<html lang="${lang==='fr'?'fr':'en'}">
<head>
<meta charset="utf-8">
<title>${esc(label)} – Query</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700;800&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;}
/* Marges haut/bas sur toutes les pages (le texte ne colle plus au bord dès la page 2) ; marges
   latérales à 0 pour que le bandeau aille bord à bord — le retrait latéral est porté par les blocs.
   Les boîtes de marge (Chrome/Edge 131+) répètent le pied de page et numérotent chaque page ;
   ailleurs elles sont ignorées et le pied de page en fin de document (.doc-footer) prend le relais. */
@page{margin:14mm 0 16mm;
  @bottom-left{content:"${footerCss}";font:500 8pt 'Geist',-apple-system,'Segoe UI',sans-serif;color:${fg3};padding-left:16mm;}
  @bottom-right{content:counter(page) " / " counter(pages);font:500 8pt 'Geist',-apple-system,'Segoe UI',sans-serif;color:${fg3};padding-right:16mm;}
}
@page:first{margin-top:0;}
body{font-family:'Geist',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:${pageBg};color:${fg};padding:36px 20px 56px;}
.toolbar{max-width:794px;margin:0 auto 14px;display:flex;justify-content:flex-end;}
.btn-print{background:${btnBg};color:${btnFg};border:none;border-radius:8px;padding:9px 18px;font-size:13px;font-weight:600;cursor:pointer;font-family:inherit;}
.btn-print:hover{opacity:.9;}
.page{max-width:794px;margin:0 auto;background:${surface};box-shadow:0 1px 2px rgba(0,0,0,.06),0 12px 32px rgba(0,0,0,.14);border-radius:6px;overflow:hidden;}
.band{background:${accent};color:#fff;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:22px 56px;}
.brand{display:flex;align-items:center;gap:10px;font-weight:600;font-size:16px;letter-spacing:-.01em;}
.brand img{width:28px;height:28px;border-radius:7px;display:block;}
.band-date{font-size:13px;font-weight:500;color:rgba(255,255,255,.88);}
.head{padding:40px 56px 0;}
.title{font-size:28px;font-weight:700;line-height:1.22;letter-spacing:-.022em;text-wrap:balance;}
.profile{display:inline-block;margin-top:14px;background:${accentFaint};color:${accentDeep};font-size:11.5px;font-weight:600;padding:4px 11px;border-radius:999px;}
.content{margin:26px 56px 0;padding-top:24px;border-top:1px solid ${border};font-size:14.5px;line-height:1.7;color:${fgBody};word-wrap:break-word;}
.content p{margin:.5em 0;}
.doc-footer{display:flex;justify-content:space-between;align-items:baseline;gap:16px;margin:40px 56px 0;padding:14px 0 28px;border-top:1px solid ${border};font-size:11px;color:${fg3};}
.doc-footer .brand-mini{display:inline-flex;align-items:center;gap:5px;}
.doc-footer .brand-mini img{width:12px;height:12px;border-radius:3px;display:block;}
@media print{
  .toolbar{display:none;}
  body{padding:0;background:${surface};}
  .page{box-shadow:none;border-radius:0;max-width:none;overflow:visible;}
  .band{padding:20px 16mm;}
  .head{padding:12mm 16mm 0;}
  .content{margin:7mm 16mm 0;}
  .doc-footer{margin:10mm 16mm 0;padding-bottom:0;}
  .mb .doc-footer{display:none;}
  pre,blockquote,img,tr{break-inside:avoid;}
  h1,h2,h3{break-after:avoid;}
  p,li{orphans:3;widows:3;}
}
</style>
<script>if(window.CSSMarginRule)document.documentElement.className='mb';<\/script>
</head>
<body>
<div class="toolbar"><button class="btn-print" onclick="window.print()">${esc(printLabel)}</button></div>
<div class="page">
  <div class="band">
    <div class="brand"><img src="data:image/png;base64,${QUERY_LOGO_B64}" alt="Query"><span>Query</span></div>
    <div class="band-date">${esc(dateStr)}</div>
  </div>
  <div class="head">
    <h1 class="title">${esc(heroTitle)}</h1>
    ${profileName?`<span class="profile">${esc(profileName)}</span>`:''}
  </div>
  <div class="content">${tmp.innerHTML}</div>
  <div class="doc-footer">
    <span class="brand-mini"><img src="data:image/png;base64,${QUERY_LOGO_B64}" alt="">${esc(exportedByLabel)} Query</span>
    <span>${esc(exportedStr)}</span>
  </div>
</div>
<script>window.addEventListener('load',function(){setTimeout(function(){window.print();},350);});<\/script>
</body>
</html>`;
}
// Ouvre l'export dans un nouvel onglet via une Blob URL (pas de document.write, pas de dépendance réseau
// pour s'afficher). L'onglet déclenche lui-même l'impression ; "Enregistrer en PDF" est le choix natif du navigateur.
function exportCardToPdf(entry,profileName){
  const html=buildPdfHtml(entry,profileName);
  const blob=new Blob([html],{type:'text/html'});
  const url=URL.createObjectURL(blob);
  const w=window.open(url,'_blank');
  if(!w){showToast(t('pdfPopupBlocked'),{error:true});URL.revokeObjectURL(url);return;}
  setTimeout(()=>URL.revokeObjectURL(url),60000);
}

/* ════════════════════════════════════════════════════════
   EDIT MODE — RESIZE CARDS
════════════════════════════════════════════════════════ */
function toggleEditMode(){
  editMode=!editMode;
  const btn=$('editModeBtn'),lbl=$('lbl-editmode'),res=$('results'),plist=$('profileList'),rab=$('resetAllSizesBtn');
  if(editMode){
    btn.classList.add('active');
    res.classList.add('edit-mode');
    plist.classList.add('edit-mode');
    if(lbl)lbl.textContent=t('editModeExit');
    remClass(rab,'off');
    activateCanvasMode();
  }else{
    btn.classList.remove('active');
    res.classList.remove('edit-mode');
    plist.classList.remove('edit-mode');
    if(lbl)lbl.textContent=t('editMode');
    addClass(rab,'off');
    deactivateCanvasMode();
  }
}

/* ════════════════════════════════════════════════════════
   VIEW MODE — GRID / LIST PER PROFILE
════════════════════════════════════════════════════════ */
const GRID_ICON='<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>';
const LIST_ICON='<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="3" y="13" width="7" height="7" rx="1"/><line x1="14" y1="7" x2="21" y2="7"/><line x1="14" y1="17" x2="21" y2="17"/>';

function applyViewMode(){
  const prof=profiles[currentPid];
  const vm=prof?.viewMode||'grid';
  const res=$('results');
  const icon=$('viewModeIcon');
  const lbl=$('lbl-viewmode');
  if(vm==='list'){
    res.classList.add('list-mode');
    if(icon)icon.innerHTML=LIST_ICON;
    if(lbl)lbl.textContent=t('gridMode');
  }else{
    res.classList.remove('list-mode');
    if(icon)icon.innerHTML=GRID_ICON;
    if(lbl)lbl.textContent=t('listMode');
  }
}

function toggleViewMode(){
  const prof=profiles[currentPid];
  if(!prof)return;
  prof.viewMode=(prof.viewMode==='list')?'grid':'list';
  persist();
  applyViewMode();
}

function startProfileDrag(ev,pid,row){
  if(!editMode)return;
  ev.preventDefault();
  const list=$('profileList');
  let targetRow=null,insertBefore=true;
  row.classList.add('dragging-profile');
  const onMove=e=>{
    list.querySelectorAll('.p-row').forEach(r=>r.classList.remove('drag-over-before','drag-over-after'));
    const el=document.elementFromPoint(e.clientX,e.clientY)?.closest('.p-row');
    if(el&&el!==row&&list.contains(el)){
      const rect=el.getBoundingClientRect();
      insertBefore=e.clientY<rect.top+rect.height/2;
      el.classList.add(insertBefore?'drag-over-before':'drag-over-after');
      targetRow=el;
    }else{targetRow=null;}
  };
  const onUp=()=>{
    document.removeEventListener('pointermove',onMove);
    document.removeEventListener('pointerup',onUp);
    row.classList.remove('dragging-profile');
    list.querySelectorAll('.p-row').forEach(r=>r.classList.remove('drag-over-before','drag-over-after'));
    if(targetRow){const tpid=targetRow.dataset.pid;if(tpid&&tpid!==pid)reorderProfiles(pid,tpid,insertBefore);}
  };
  document.addEventListener('pointermove',onMove);
  document.addEventListener('pointerup',onUp);
}

function reorderProfiles(draggedPid,targetPid,insertBefore){
  const keys=Object.keys(profiles);
  const fromIdx=keys.indexOf(draggedPid);if(fromIdx===-1)return;
  keys.splice(fromIdx,1);
  const toIdx=keys.indexOf(targetPid);if(toIdx===-1)return;
  keys.splice(insertBefore?toIdx:toIdx+1,0,draggedPid);
  const reordered={};keys.forEach(k=>{reordered[k]=profiles[k];});
  profiles=reordered;persist();renderSidebar();
}

function resetCardSize(idx){
  const e=entries[idx];if(!e)return;
  delete e.w;delete e.h;
  profiles[currentPid].entries=entries;persist();
  const card=document.querySelector(`#results .card[data-idx="${idx}"]`);
  if(card){card.style.width='';card.style.height='';card.removeAttribute('data-sized');}
}

function resetAllCardSizes(){
  let changed=false;
  entries.forEach(e=>{if(e.w||e.h){delete e.w;delete e.h;changed=true;}});
  if(!changed)return;
  profiles[currentPid].entries=entries;persist();
  document.querySelectorAll('#results .card').forEach(card=>{
    card.style.width='';card.style.height='';card.removeAttribute('data-sized');
  });
  updateCanvasHeight();
}

function startResize(ev,card,idx,axis){
  if(!editMode)return;
  ev.preventDefault();ev.stopPropagation();
  const entry=entries[idx];if(!entry)return;
  const isCanvas=$('results').classList.contains('canvas-mode');
  const rect=card.getBoundingClientRect();
  const parent=card.parentElement;
  const startX=ev.clientX,startY=ev.clientY;
  const startW=rect.width,startH=rect.height;
  const MIN_W=180,MIN_H=120,MAX_W=1200,MAX_H=1600;

  let placeholder=null,prevParentPosition='';
  if(!isCanvas){
    // Flex mode: insert placeholder to hold the card's slot, make card absolute
    const parentRect=parent.getBoundingClientRect();
    placeholder=document.createElement('div');
    placeholder.style.width=startW+'px';placeholder.style.height=startH+'px';
    placeholder.style.flex='0 0 auto';placeholder.style.visibility='hidden';
    placeholder.className='card-placeholder';
    card.parentNode.insertBefore(placeholder,card);
    const topInParent=rect.top-parentRect.top+parent.scrollTop;
    const leftInParent=rect.left-parentRect.left+parent.scrollLeft;
    prevParentPosition=parent.style.position;
    if(getComputedStyle(parent).position==='static')parent.style.position='relative';
    card.style.position='absolute';
    card.style.top=topInParent+'px';
    card.style.left=leftInParent+'px';
    card.style.margin='0';
  }

  card.style.width=startW+'px';
  card.style.height=startH+'px';
  card.dataset.sized='1';
  card.classList.add('resizing');
  document.body.classList.add('resizing-card');
  if(axis==='w')document.body.classList.add('resizing-w');
  else if(axis==='h')document.body.classList.add('resizing-h');

  const handle=ev.currentTarget;
  if(handle.setPointerCapture&&ev.pointerId!=null){try{handle.setPointerCapture(ev.pointerId);}catch(_){}}

  let pendingW=startW,pendingH=startH,rafId=0,dirty=false;
  const flush=()=>{
    rafId=0;if(!dirty)return;dirty=false;
    if(axis==='w'||axis==='wh')card.style.width=pendingW+'px';
    if(axis==='h'||axis==='wh')card.style.height=pendingH+'px';
  };
  const onMove=e=>{
    if(axis==='w'||axis==='wh')pendingW=Math.max(MIN_W,Math.min(MAX_W,startW+(e.clientX-startX)));
    if(axis==='h'||axis==='wh')pendingH=Math.max(MIN_H,Math.min(MAX_H,startH+(e.clientY-startY)));
    dirty=true;
    if(!rafId)rafId=requestAnimationFrame(flush);
  };
  const onUp=e=>{
    if(rafId){cancelAnimationFrame(rafId);flush();}
    document.removeEventListener('pointermove',onMove);
    document.removeEventListener('pointerup',onUp);
    document.removeEventListener('pointercancel',onUp);
    if(handle.releasePointerCapture&&ev.pointerId!=null){try{handle.releasePointerCapture(ev.pointerId);}catch(_){}}
    if(!isCanvas){
      card.style.position='';card.style.top='';card.style.left='';card.style.margin='';
      if(placeholder&&placeholder.parentNode)placeholder.parentNode.removeChild(placeholder);
      if(parent.style.position!==prevParentPosition)parent.style.position=prevParentPosition;
    }
    card.classList.remove('resizing');
    document.body.classList.remove('resizing-card','resizing-w','resizing-h');
    if(axis==='w'||axis==='wh')entry.w=Math.round(pendingW);
    if(axis==='h'||axis==='wh')entry.h=Math.round(pendingH);
    profiles[currentPid].entries=entries;persist();
    if(isCanvas)updateCanvasHeight();
  };
  document.addEventListener('pointermove',onMove,{passive:true});
  document.addEventListener('pointerup',onUp);
  document.addEventListener('pointercancel',onUp);
}

/* ════════════════════════════════════════════════════════
   CANVAS MODE — Activate / Deactivate / Sync
════════════════════════════════════════════════════════ */
function activateCanvasMode(){
  const container=$('results');
  // Capture flex positions BEFORE applying canvas-mode class
  // (while still in normal flow, getBoundingClientRect is accurate)
  const cr=container.getBoundingClientRect();
  container.querySelectorAll('.card').forEach(card=>{
    const idx=parseInt(card.dataset.idx);if(isNaN(idx))return;
    const entry=entries[idx];if(!entry)return;
    if(typeof entry.x!=='number'||typeof entry.y!=='number'){
      const r=card.getBoundingClientRect();
      entry.x=Math.max(0,Math.round(r.left-cr.left));
      entry.y=Math.max(0,Math.round(r.top-cr.top));
    }
  });
  container.classList.add('canvas-mode');
  // Now apply left/top (CSS makes cards position:absolute via .canvas-mode rule)
  container.querySelectorAll('.card').forEach(card=>{
    const idx=parseInt(card.dataset.idx);if(isNaN(idx))return;
    const entry=entries[idx];if(!entry)return;
    card.style.left=entry.x+'px';
    card.style.top=entry.y+'px';
  });
  profiles[currentPid].entries=entries;persist();
  updateCanvasHeight();
}

function deactivateCanvasMode(){
  // Keep canvas-mode active — cards stay at their stored positions.
  // edit-mode class is already removed by toggleEditMode (disables drag/resize).
  updateCanvasHeight();
}

// Called after render() re-builds cards while already in canvas mode
function ensureCanvasPositions(){
  const container=$('results');
  container.classList.add('canvas-mode');
  const unpositioned=[];
  container.querySelectorAll('.card').forEach(card=>{
    const idx=parseInt(card.dataset.idx);if(isNaN(idx))return;
    const entry=entries[idx];if(!entry)return;
    if(typeof entry.x==='number'&&typeof entry.y==='number'){
      card.style.left=entry.x+'px';
      card.style.top=entry.y+'px';
    }else{
      card.style.left='-9999px';card.style.top='-9999px';
      unpositioned.push({card,entry});
    }
  });
  if(unpositioned.length>0){
    let maxBottom=0;
    container.querySelectorAll('.card').forEach(c=>{
      const t=parseFloat(c.style.top)||0;
      if(t>=0&&t<9000)maxBottom=Math.max(maxBottom,t+(c.offsetHeight||150));
    });
    let autoX=0,autoY=maxBottom>0?maxBottom+20:0;
    unpositioned.forEach(({card,entry})=>{
      const w=card.offsetWidth||(entry.w||280);
      const h=card.offsetHeight||(entry.h||150);
      const pos=findFreePosition(autoX,autoY,w,h,card);
      entry.x=pos.x;entry.y=pos.y;
      card.style.left=pos.x+'px';card.style.top=pos.y+'px';
      autoX=pos.x+w+12;
      if(autoX>900){autoX=0;autoY=pos.y+h+12;}
    });
    profiles[currentPid].entries=entries;persist();
  }
  updateCanvasHeight();
}

/* ════════════════════════════════════════════════════════
   CANVAS MODE — DRAG TO POSITION FREELY
════════════════════════════════════════════════════════ */
function startCanvasDrag(ev,card,idx){
  if(!editMode)return;
  if(ev.button!==undefined&&ev.button!==0)return;
  ev.preventDefault();ev.stopPropagation();
  const container=$('results');
  const entry=entries[idx];if(!entry)return;
  const cardRect=card.getBoundingClientRect();
  const offsetX=ev.clientX-cardRect.left;
  const offsetY=ev.clientY-cardRect.top;
  const startX=ev.clientX,startY=ev.clientY;
  const THRESHOLD=5,SNAP=8;
  let committed=false,pendingX=ev.clientX,pendingY=ev.clientY,rafId=0;

  const commit=()=>{
    committed=true;
    card.style.zIndex='1000';
    card.classList.add('canvas-dragging');
    document.body.classList.add('dragging-card');
    container.classList.add('dragging-active');
  };

  const tick=()=>{
    rafId=0;
    if(!committed){
      const dx=pendingX-startX,dy=pendingY-startY;
      if(Math.sqrt(dx*dx+dy*dy)>THRESHOLD)commit();else return;
    }
    const cr=container.getBoundingClientRect();
    const x=Math.max(0,Math.round((pendingX-cr.left-offsetX)/SNAP)*SNAP);
    const y=Math.max(0,Math.round((pendingY-cr.top-offsetY)/SNAP)*SNAP);
    card.style.left=x+'px';
    card.style.top=y+'px';
    const SZ=64,SP=18,vh=window.innerHeight;
    if(pendingY<SZ)window.scrollBy(0,-SP);
    else if(pendingY>vh-SZ)window.scrollBy(0,SP);
  };

  const onMove=e=>{pendingX=e.clientX;pendingY=e.clientY;if(!rafId)rafId=requestAnimationFrame(tick);};

  const onUp=()=>{
    if(rafId){cancelAnimationFrame(rafId);rafId=0;}
    document.removeEventListener('pointermove',onMove);
    document.removeEventListener('pointerup',onUp);
    document.removeEventListener('pointercancel',onUp);
    if(!committed)return;
    document.body.classList.remove('dragging-card');
    container.classList.remove('dragging-active');
    card.classList.remove('canvas-dragging');
    card.style.zIndex='';
    const cr=container.getBoundingClientRect();
    const fx0=Math.max(0,Math.round((pendingX-cr.left-offsetX)/SNAP)*SNAP);
    const fy0=Math.max(0,Math.round((pendingY-cr.top-offsetY)/SNAP)*SNAP);
    const free=findFreePosition(fx0,fy0,card.offsetWidth,card.offsetHeight,card);
    if(free.x!==fx0||free.y!==fy0){
      // Animate snap to non-overlapping position
      card.style.transition='left .22s cubic-bezier(.34,1.2,.64,1),top .22s cubic-bezier(.34,1.2,.64,1)';
      requestAnimationFrame(()=>{
        card.style.left=free.x+'px';card.style.top=free.y+'px';
        setTimeout(()=>{if(card)card.style.transition='';},260);
      });
    }else{
      card.style.left=free.x+'px';card.style.top=free.y+'px';
    }
    entry.x=free.x;entry.y=free.y;
    profiles[currentPid].entries=entries;persist();
    updateCanvasHeight();
  };

  document.addEventListener('pointermove',onMove,{passive:true});
  document.addEventListener('pointerup',onUp);
  document.addEventListener('pointercancel',onUp);
}

function findFreePosition(targetX,targetY,cardW,cardH,excludeCard){
  const container=$('results');
  const GAP=12,SNAP=8;
  const ov=(ax,ay,aw,ah,bx,by,bw,bh)=>
    !(ax+aw+GAP<=bx||bx+bw+GAP<=ax||ay+ah+GAP<=by||by+bh+GAP<=ay);
  const isFree=(x,y)=>{
    for(const o of container.querySelectorAll('.card')){
      if(o===excludeCard)continue;
      const ox=parseFloat(o.style.left)||0,oy=parseFloat(o.style.top)||0;
      if(oy<-100)continue; // off-screen placeholders
      if(ov(x,y,cardW,cardH,ox,oy,o.offsetWidth,o.offsetHeight))return false;
    }
    return true;
  };
  if(isFree(targetX,targetY))return{x:targetX,y:targetY};
  const step=SNAP*4;
  for(let r=step;r<=680;r+=step){
    const cs=[
      {x:targetX+r,y:targetY},{x:targetX,y:targetY+r},
      {x:Math.max(0,targetX-r),y:targetY},{x:targetX,y:Math.max(0,targetY-r)},
      {x:targetX+r,y:targetY+r},{x:Math.max(0,targetX-r),y:targetY+r},
      {x:targetX+r,y:Math.max(0,targetY-r)},
    ];
    for(const c of cs)if(isFree(c.x,c.y))return c;
  }
  return{x:targetX,y:targetY+cardH+GAP};
}

/* ════════════════════════════════════════════════════════
   CARD MODAL
════════════════════════════════════════════════════════ */
let editColor='';  // Currently selected color in modal (''=default)
function syncColorPicker(){
  document.querySelectorAll('#cardColorPicker .ccp-sw').forEach(b=>{
    toggleClass(b,'on',(b.dataset.color||'')===(editColor||''));
  });
}
function openCardModal(){remClass($('addModal'),'off');showBackdrop();setTimeout(()=>{$('newEntry').focus();document.dispatchEvent(new Event('selectionchange'));},80);}
function closeCardModal(){addClass($('addModal'),'off');hideBackdrop();resetCardModal();}
function resetCardModal(){editIdx=-1;editColor='';syncColorPicker();$('addModal-title').textContent='✏️ '+t('newCardTitle');$('saveEntry').textContent=t('save');$('newEntry').innerHTML='';addClass($('deleteEntry'),'off');}

function editCard(idx){
  editIdx=idx;const e=entries[idx];
  editColor=e.color||'';syncColorPicker();
  $('addModal-title').textContent='✏️ '+t('editCardTitle');const ed=$('newEntry');
  if(isRich(e.content))ed.innerHTML=cleanHtml(e.content);else ed.textContent=e.content;
  $('saveEntry').textContent=t('modify');remClass($('deleteEntry'),'off');
  openCardModal();
  setTimeout(()=>{ed.focus();const r=document.createRange();r.selectNodeContents(ed);r.collapse(false);const s=window.getSelection();s.removeAllRanges();s.addRange(r);},100);
}

/* ════════════════════════════════════════════════════════
   TRANSLATIONS
════════════════════════════════════════════════════════ */
function applyTr(){
  document.documentElement.lang=lang; // lecteurs d'écran, césure et traduction automatique suivent la langue choisie
  const s=(id,k)=>{const el=$(id);if(el)el.textContent=t(k);};
  s('lbl-newcard','newCard');s('lbl-export','export');s('lbl-export-all','exportAll');s('lbl-import','import');s('lbl-share','share');s('lbl-settings','settings');s('lbl-np','newProfile');s('lbl-profiles','profiles');s('lbl-theme','theme');s('lbl-send','modeSend');s('lbl-recv','modeRecv');s('lbl-settings-title','settingsTitle');s('lbl-general','general');s('lbl-statistics','statistics');s('lbl-language','language');s('lbl-cardColor','cardColor');
  s('lbl-helpSection','helpSection');s('lbl-guidedTour','guidedTour');s('lbl-startTour','startTour');s('lbl-guidedTourHint','guidedTourHint');
  $('tourSkip').textContent=t('tourSkip');
  if(!$('tourModal').classList.contains('off'))renderTourStep();
  s('lbl-exportSection','exportSection');s('lbl-exportFolder','exportFolder');s('lbl-exportFolderHint','exportFolderHint');s('lbl-exportFolderUnsupported','exportFolderUnsupported');
  s('lbl-stab-general','general');s('lbl-stab-stats','statistics');s('lbl-stab-export','exportSection');s('lbl-stab-help','helpSection');s('lbl-stab-profiles','profilesSection');s('lbl-profilesSection','profilesSection');
  const cedb=$('clearExportDirBtn');if(cedb)cedb.title=t('exportFolderReset');
  const cfb=$('lbl-chooseFolder');if(cfb)cfb.textContent=t(_exportDirHandle?'changeFolder':'chooseFolder');
  s('lbl-editmode',editMode?'editModeExit':'editMode');s('lbl-reset-all-sizes','resetAllSizes');
  s('lbl-coverAdd','coverAdd');s('lbl-coverChange','coverChange');s('lbl-coverReposition','coverReposition');s('lbl-coverRepositionHint','coverRepositionHint');s('lbl-coverSavePos','coverSavePos');
  s('lbl-linkCopy','copy');s('lbl-linkEdit','edit');s('lbl-linkPdf','exportPdf');
  $('search').placeholder=t('searchPh');
  $('profileModal-title').textContent=t('newProfileTitle');$('profileName').placeholder=t('profilePh');$('createProfile').textContent=t('create');$('cancelProfile2').textContent=t('cancel');
  if(editIdx<0){$('addModal-title').textContent='✏️ '+t('newCardTitle');$('newEntry').dataset.ph=t('edPh');$('saveEntry').textContent=t('save');}
  $('deleteEntry').textContent=t('delete');
  $('shareModal-title').textContent=t('shareTitle');$('sendInstr').textContent=t('sendInstr');$('recvInstr').textContent=t('recvInstr');
  const gcb=$('genCodeBtn');if(gcb&&!gcb.disabled)gcb.textContent=t('genCode');
  const wm=$('waitMsg');if(wm&&!wm.classList.contains('error'))wm.textContent=t('waitMsg');
  $('sendOk').textContent=t('sendOk');$('connectBtn').textContent=t('connectBtn');$('connectingMsg').textContent=t('connecting');
  $('qrHint').textContent=t('qrHint');
  $('pwaNoticeTxt').textContent=t('pwaNoticeTxt');$('pwaImportAnyway').textContent=t('pwaImportAnyway');
  $('langSelect').value=lang;
}

/* ════════════════════════════════════════════════════════
   EMOJI PICKER
════════════════════════════════════════════════════════ */
const EMOJI_CATS=[
  {icon:'😀',label:'Smileys',data:['😀','😃','😄','😁','😆','😅','🤣','😂','🙂','😊','😇','🥰','😍','🤩','😘','😗','🙃','😉','😌','😛','😝','😜','🤪','🤨','🧐','🤓','😎','🥸','😏','😒','😞','😔','😟','😕','🙁','☹️','😣','😖','😫','😩','🥺','😢','😭','😤','😠','😡','🤬','😈','👿','💀','☠️','💩','🤡','👻','👽','👾','🤖','😺','😸','😹','😻','😼','😽','🙀','😿','😾']},
  {icon:'👋',label:'Gestes',data:['👋','🤚','🖐','✋','🖖','🤙','👆','👇','👉','👈','👍','👎','✊','👊','🤛','🤜','🤞','✌️','🤟','🤘','👌','🤏','🙌','👏','🙏','💪','🦾','🦶','🦵','🫶','🤝','🫂','💅','👶','🧒','👦','👧','👨','👩','🧔','👴','👵','🤷','🙆','🙅','🙋','🤦','💁','🧑‍💻','👨‍💻','👩‍💻','🧑‍🎓','👨‍🎓','👩‍🎓','🧑‍🍳','👨‍🍳','👩‍🍳','🧑‍🎨','👨‍🎨','👩‍🎨','🧑‍🔬','👨‍🔬','👩‍🔬']},
  {icon:'🐶',label:'Animaux',data:['🐶','🐱','🐭','🐹','🐰','🦊','🐻','🐼','🐨','🐯','🦁','🐮','🐷','🐸','🐵','🙈','🙉','🙊','🐔','🐧','🐦','🦆','🦅','🦉','🦇','🐺','🐗','🐴','🦄','🐝','🐛','🦋','🐌','🐞','🐜','🦂','🐢','🐍','🦎','🐙','🦑','🦐','🦞','🦀','🦈','🐡','🐠','🐟','🐬','🐳','🐋','🦭','🐊','🐅','🐆','🦓','🦍','🦧','🐘','🦛','🦏','🐪','🐫','🦒','🦘','🐃','🐂','🐄','🐎','🐖','🐑','🦙','🐐','🦌','🐕','🐩','🐈','🐓','🦃','🦚','🦜','🦢','🦩','🕊️','🐇','🦝','🦔','🐁','🐀','🐿️']},
  {icon:'🌸',label:'Nature',data:['🌸','🌺','🌻','🌹','🌷','🌼','🌱','🌿','🍀','🍁','🍂','🍃','🎋','🎍','🍄','🌾','🌵','🎄','🌴','🌲','🌳','🌰','🌊','🌋','⛰️','🏔️','☁️','❄️','☃️','⛄','💧','💦','🌈','☔','⚡','🌙','🌛','🌜','🌝','🌞','⭐','🌟','💫','✨','☄️','🌍','🌎','🌏','🌅','🌄','🌇','🌆','🌃','🌉','🌌','🌠','🌤️','⛅','🌥️','🌦️','🌧️','⛈️','🌩️','🌨️','🌬️','💨']},
  {icon:'🍎',label:'Nourriture',data:['🍎','🍊','🍋','🍇','🍓','🫐','🍈','🍒','🍑','🥭','🍍','🥥','🥝','🍅','🍆','🥑','🥦','🫑','🥒','🌶️','🧄','🧅','🥔','🍠','🥐','🥖','🍞','🧀','🥚','🍳','🧈','🥞','🧇','🥓','🥩','🍗','🍖','🌭','🍔','🍟','🍕','🥪','🌮','🌯','🍝','🍜','🍲','🍛','🍣','🍱','🥟','🍤','🍙','🍘','🥮','🍢','🧁','🍰','🎂','🍮','🍭','🍬','🍫','🍿','🍩','🍪','🥜','🍯','🧃','🥤','🧋','☕','🍵','🍶','🍺','🍻','🥂','🍷','🥃','🍸','🍹','🧉','🍾']},
  {icon:'⚽',label:'Sports',data:['⚽','🏀','🏈','⚾','🎾','🏐','🏉','🥏','🎱','🏓','🏸','🥊','🥋','🎽','🛹','🛼','⛸️','🤸','🤼','🤺','🏊','🏋️','🚴','🏇','🧗','🏂','⛷️','🎿','🪂','🏄','🤽','🚣','🧘','🏆','🥇','🥈','🥉','🎮','🕹️','🎰','🎯','🎳','🎲','♟️','🎭','🎨','🖼️','🎪','🎤','🎧','🎼','🎹','🥁','🎸','🎷','🎺','🎻','🪗','🎬','🎞️','📽️']},
  {icon:'🚗',label:'Voyage',data:['🚗','🚕','🚙','🚌','🚐','🚑','🚒','🚓','🏎️','🚃','🚋','🚄','🚅','🚂','🚆','🚇','🛸','🚁','🚲','🛵','🛻','🚢','✈️','🚀','🛩️','🚡','🚟','🚠','🏗️','🏛️','🏙️','🏡','🏘️','🏰','🏯','🏟️','🗼','🗽','🗺️','🧭','⛺','🌅','🌄','🌇','🌆','🌃','🌉','🌌','🌠','⛲','🎡','🎢','🎠','🏖️','🏝️','🗻','🏕️','🏞️','🌐']},
  {icon:'💡',label:'Objets',data:['📱','💻','⌨️','🖥️','🖨️','🖱️','💾','💿','📀','🧮','📷','📹','🎥','📞','☎️','📺','📻','🎙️','⏰','⌚','⏳','⌛','📡','🔋','🔌','💡','🔦','🕯️','🧱','🔮','💎','🔑','🗝️','🔐','🔒','🔓','🚪','🛋️','🛏️','🪑','🧹','🧺','🧻','🧼','🧴','💈','🛍️','🎁','📦','📝','📓','📕','📗','📘','📙','📚','📖','📰','📊','📈','📉','📁','📂','🔨','🛠️','🔧','🔩','⚙️','🔗','🧲','🪜','⚔️','🛡️','💣','🧨','🎈','🎉','🎊','🎀','🎗️','🎟️','🎫','🪄']},
  {icon:'❤️',label:'Symboles',data:['❤️','🧡','💛','💚','💙','💜','🖤','🤍','🤎','💔','❣️','💕','💞','💓','💗','💖','💘','💝','💟','☮️','✝️','☪️','☸️','✡️','🔯','☯️','☦️','🛐','⛎','♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓','✅','❌','❎','✳️','❇️','💯','🔰','⭕','♻️','🔱','⚜️','📛','🆔','🆚','🆕','🆙','🆒','🆓','🔝','🔛','⬛','⬜','🟥','🟧','🟨','🟩','🟦','🟪','🟫','🔴','🟠','🟡','🟢','🔵','🟣','⚫','⚪','🏁','🚩','🎌','🏴','🏳️']}
];

let _epEl=null,_epOnSelect=null;
function openEmojiPicker(anchor,onSelect){
  closeEmojiPicker();
  _epOnSelect=onSelect;
  const p=document.createElement('div');p.className='emoji-picker';_epEl=p;

  // Search
  const sw=document.createElement('div');sw.className='ep-search';
  const si=document.createElement('input');si.type='text';si.placeholder='🔍 Rechercher…';si.autocomplete='off';
  sw.appendChild(si);p.appendChild(sw);

  // Category buttons
  const cb=document.createElement('div');cb.className='ep-cats';
  EMOJI_CATS.forEach((cat,i)=>{
    const btn=document.createElement('button');btn.className='ep-cat-btn'+(i===0?' on':'');
    btn.textContent=cat.icon;btn.title=cat.label;btn.type='button';
    btn.addEventListener('click',()=>{
      cb.querySelectorAll('.ep-cat-btn').forEach(b=>b.classList.remove('on'));btn.classList.add('on');
      si.value='';renderGrid(cat.data);
    });
    cb.appendChild(btn);
  });
  p.appendChild(cb);

  // Grid
  const grid=document.createElement('div');grid.className='ep-grid';p.appendChild(grid);

  function renderGrid(emojis){
    grid.innerHTML='';
    if(!emojis.length){const e=document.createElement('div');e.className='ep-empty';e.textContent='Aucun résultat';grid.appendChild(e);return;}
    emojis.forEach(em=>{
      const btn=document.createElement('button');btn.className='ep-em';btn.textContent=em;btn.type='button';
      btn.addEventListener('click',e=>{e.stopPropagation();_epOnSelect&&_epOnSelect(em);closeEmojiPicker();});
      grid.appendChild(btn);
    });
  }
  renderGrid(EMOJI_CATS[0].data);

  si.addEventListener('input',()=>{
    const q=si.value.trim();
    if(!q){const on=cb.querySelector('.ep-cat-btn.on');const idx=on?[...cb.children].indexOf(on):0;renderGrid(EMOJI_CATS[idx].data);return;}
    renderGrid(EMOJI_CATS.flatMap(c=>c.data));
  });

  document.body.appendChild(p);

  // Position
  const ar=anchor.getBoundingClientRect();
  const pw=292,ph=320;
  let top=ar.bottom+6,left=ar.left;
  if(left+pw>window.innerWidth-8)left=window.innerWidth-pw-8;
  if(top+ph>window.innerHeight-8)top=ar.top-ph-6;
  p.style.top=Math.max(8,top)+'px';p.style.left=Math.max(8,left)+'px';

  setTimeout(()=>{
    document.addEventListener('pointerdown',_epOutside);
    si.focus();
  },0);
}
function _epOutside(e){if(_epEl&&!_epEl.contains(e.target))closeEmojiPicker();}
function closeEmojiPicker(){
  if(_epEl){_epEl.remove();_epEl=null;}
  document.removeEventListener('pointerdown',_epOutside);
}

/* ════════════════════════════════════════════════════════
   PROFILES PANEL (settings)
════════════════════════════════════════════════════════ */
function renderProfilesPanel(){
  const list=$('sprofiles-list');if(!list)return;
  list.innerHTML='';
  Object.entries(profiles).forEach(([pid,p])=>{
    const icon=p.icon||'📁';
    const row=document.createElement('div');row.className='sprof-row';row.dataset.pid=pid;

    const emojiBtn=document.createElement('button');
    emojiBtn.className='sprof-emoji-btn';emojiBtn.title=t('changeEmoji');emojiBtn.textContent=icon;

    const nameInput=document.createElement('input');
    nameInput.type='text';nameInput.className='sprof-name-input';
    nameInput.value=p.name;nameInput.maxLength=25;

    row.appendChild(emojiBtn);row.appendChild(nameInput);

    if(pid===currentPid){
      const badge=document.createElement('span');badge.className='sprof-current-badge';
      badge.textContent=t('currentProfile');row.appendChild(badge);
    }

    // Emoji editing — picker
    emojiBtn.addEventListener('click',e=>{
      e.stopPropagation();
      openEmojiPicker(emojiBtn,em=>{
        profiles[pid].icon=em;persist();renderSidebar();renderProfilesPanel();
      });
    });

    // Name editing
    nameInput.addEventListener('blur',()=>{
      const newName=nameInput.value.trim();
      if(!newName){nameInput.value=p.name;return;}
      if(newName===p.name)return;
      profiles[pid].name=newName;persist();renderSidebar();
      if(pid===currentPid)updateTopbar();
    });
    nameInput.addEventListener('keydown',e=>{
      if(e.key==='Enter'){e.preventDefault();nameInput.blur();}
      if(e.key==='Escape'){nameInput.value=p.name;nameInput.blur();}
    });

    list.appendChild(row);
  });
  const hint=document.createElement('div');hint.className='s-row-hint';hint.textContent=t('profilesHint');
  list.appendChild(hint);
}

/* ════════════════════════════════════════════════════════
   STATS
════════════════════════════════════════════════════════ */
function updateStats(){
  const sc=$('statsContent');if(!sc)return;let tot=0;const ps=[];
  Object.values(profiles).forEach(p=>{tot+=p.entries.length;ps.push({icon:p.icon||'📁',name:p.name,count:p.entries.length});});
  ps.sort((a,b)=>b.count-a.count);
  let h=`<div class="stat-hero"><span class="stat-hero-lbl">${t('totalCards')}</span><span class="stat-hero-val">${tot}</span></div><div class="stat-list">`;
  ps.forEach(s=>{h+=`<div class="stat-row"><span class="stat-row-n">${esc(String(s.icon))} ${esc(s.name)}</span><span class="stat-row-c">${s.count}</span></div>`;});
  sc.innerHTML=h+'</div>';
}

/* ════════════════════════════════════════════════════════
   EVENTS
════════════════════════════════════════════════════════ */
// Theme
$('btn-light').addEventListener('click',()=>setTheme('light'));
$('btn-dark').addEventListener('click',()=>setTheme('dark'));
$('colorPicker').addEventListener('input',e=>{customColor=e.target.value;themeMode='custom';applyTheme('custom');persist();});
$('btn-custom').addEventListener('click',()=>$('colorPicker').click());

// Mobile sidebar
const openMobile=()=>{$('sidebar').classList.add('open');$('sbVeil').classList.add('on');};
const closeMobile=()=>{$('sidebar').classList.remove('open');$('sbVeil').classList.remove('on');};
$('menuToggle').addEventListener('click',openMobile);
$('sbVeil').addEventListener('click',closeMobile);

// Profile
$('newProfileBtn').addEventListener('click',()=>{remClass($('profileModal'),'off');showBackdrop();setTimeout(()=>$('profileName').focus(),80);});
const closeProfileModal=()=>{addClass($('profileModal'),'off');hideBackdrop();$('profileName').value='';};
$('cancelProfile').addEventListener('click',closeProfileModal);
$('cancelProfile2').addEventListener('click',closeProfileModal);
$('profileName').addEventListener('keydown',e=>{if(e.key==='Enter')$('createProfile').click();});
$('createProfile').addEventListener('click',()=>{
  const name=$('profileName').value.trim();if(!name){alert(t('errProfileEmpty'));return;}
  if(_isFirstProfile){
    // Création du tout premier profil
    _isFirstProfile=false;
    const pid=`${name.toLowerCase().replace(/[^a-z0-9]/g,'_')}_${Date.now()}`;
    profiles={[pid]:{name,entries:[]}};currentPid=pid;persist();
    addClass($('profileModal'),'off');hideBackdrop();
    $('profileModal-title').textContent=t('newProfileTitle');$('profileName').placeholder=t('profilePh');$('profileName').value='';
    $('cancelProfile').style.display='';$('cancelProfile2').style.display='';
    renderApp();
    document.dispatchEvent(new Event('query-ready'));
    return;
  }
  if(Object.values(profiles).some(p=>p.name.toLowerCase()===name.toLowerCase())){alert(t('errDuplicate',name));$('profileName').focus();return;}
  const pid=`${name.toLowerCase().replace(/[^a-z0-9]/g,'_')}_${Date.now()}`;
  profiles[pid]={name,entries:[]};persist();renderSidebar();switchProfile(pid);closeProfileModal();
});

// Search — local mode renders immediately, global mode (/) is debounced for fluidity.
let searchTimer=null;
let renderTimer=null;
$('search').addEventListener('input',e=>{
  const v=e.target.value;
  clearTimeout(renderTimer);
  if(v.charAt(0)==='/'){
    // Global search: many cards possible → debounce to keep typing fluid.
    renderTimer=setTimeout(()=>render(v),120);
  }else{
    // Local search: small dataset, render immediately.
    render(v);
  }
  clearTimeout(searchTimer);
  searchTimer=setTimeout(saveSearch,300);
});

// Add card
$('addBtn').addEventListener('click',()=>{resetCardModal();openCardModal();});
$('editModeBtn').addEventListener('click',toggleEditMode);
$('viewModeBtn').addEventListener('click',toggleViewMode);
$('resetAllSizesBtn').addEventListener('click',resetAllCardSizes);
$('cancelEntry').addEventListener('click',closeCardModal);
$('cancelEntry2').addEventListener('click',closeCardModal);
$('saveEntry').addEventListener('click',()=>{
  const ed=$('newEntry'),val=cleanHtml(ed.innerHTML).trim(),plain=ed.textContent.replace(/\u00A0/g,' ').trim();
  if(!plain && !ed.querySelector('img')){alert(t('errEmpty'));return;}
  if(editIdx>=0){
    entries[editIdx].content=val;
    invalidateSearchText(entries[editIdx]);
    if(editColor)entries[editIdx].color=editColor;
    else delete entries[editIdx].color;
  }
  else{
    const o={id:genId(),content:val,isPinned:false,createdAt:Date.now()};
    if(editColor)o.color=editColor;
    entries.push(o);
    entries.sort((a,b)=>(b.isPinned?1:0)-(a.isPinned?1:0));
  }
  const isNew=editIdx<0;
  profiles[currentPid].entries=entries;persist();render($('search').value);renderSidebar();closeCardModal();
  if(isNew){
    // Scroll to reveal the newly created card (always last in the list)
    setTimeout(()=>{
      const cards=document.querySelectorAll('#results .card');
      if(cards.length)cards[cards.length-1].scrollIntoView({behavior:'smooth',block:'nearest'});
    },60);
  }else{
    setTimeout(()=>$('search').focus(),100);
  }
});
$('deleteEntry').addEventListener('click',()=>{
  if(editIdx<0)return;
  openConfirmModal(t('confirmCard')).then(ok=>{
    if(!ok)return;
    entries.splice(editIdx,1);
    profiles[currentPid].entries=entries;
    persist();renderSidebar();closeCardModal();render($('search').value);
  });
});

// Card color picker
document.querySelectorAll('#cardColorPicker .ccp-sw').forEach(b=>{
  b.addEventListener('click',()=>{editColor=b.dataset.color||'';syncColorPicker();});
});

// Export
$('exportBtn').addEventListener('click',async()=>{
  const name=profiles[currentPid].name;
  const exportData={profile:name,pid:currentPid,exportedAt:new Date().toISOString(),entries:entries.map(e=>{
    const o={id:e.id,content:e.content,isPinned:e.isPinned||false,createdAt:e.createdAt};
    if(typeof e.w==='number'&&e.w>0)o.w=e.w;
    if(typeof e.h==='number'&&e.h>0)o.h=e.h;
    if(typeof e.color==='string'&&e.color)o.color=e.color;
    if(typeof e.x==='number')o.x=e.x;
    if(typeof e.y==='number')o.y=e.y;
    return o;
  })};
  await writeExportFile(`${name}.json`,exportData);
});

// Export all — one JSON file per profile (same format as single Export)
$('exportAllBtn').addEventListener('click',async()=>{
  const list=Object.entries(profiles);
  if(!list.length)return;
  const stamp=new Date().toISOString();
  const dirHandle=await getExportDirHandle();
  const useDir=!!(dirHandle&&await ensureDirPermission(dirHandle));
  let savedToDir=0;
  for(let i=0;i<list.length;i++){
    const [pid,p]=list[i];
    const exportData={profile:p.name,pid:pid,exportedAt:stamp,entries:(p.entries||[]).map(e=>{
      const o={id:e.id,content:e.content,isPinned:e.isPinned||false,createdAt:e.createdAt};
      if(typeof e.w==='number'&&e.w>0)o.w=e.w;
      if(typeof e.h==='number'&&e.h>0)o.h=e.h;
      if(typeof e.color==='string'&&e.color)o.color=e.color;
      if(typeof e.x==='number')o.x=e.x;
      if(typeof e.y==='number')o.y=e.y;
      return o;
    })};
    if(await writeExportFile(`${p.name}.json`,exportData,{silent:true}))savedToDir++;
    // Slight stagger between downloads so the browser doesn't drop any of them
    if(i<list.length-1)await new Promise(r=>setTimeout(r,150));
  }
  if(useDir&&savedToDir===list.length)showToast(t('exportAllSavedTo',list.length,dirHandle.name));
  else showToast(t('exportAllDownloaded',list.length));
});

// Import — supports multiple files; for each file:
//   - if a profile with the same name exists → replace its entries
//   - otherwise → create a new profile
$('importBtn').addEventListener('click',()=>$('importFile').click());
$('importFile').addEventListener('change',async e=>{
  const files=Array.from(e.target.files||[]);if(!files.length)return;
  const now=Date.now();
  // Normalize a single entry (string or object) into the canonical entry shape
  const normalizeEntry=(x,i)=>{
    if(x==null)return null;
    if(typeof x==='string')return{id:genId(),content:cleanContent(x),isPinned:false,createdAt:now+i};
    if(typeof x!=='object')return null;
    const o={id:x.id||genId(),content:cleanContent(x.content),isPinned:x.isPinned||false,createdAt:x.createdAt||now+i};
    if(typeof x.w==='number'&&x.w>0)o.w=x.w;
    if(typeof x.h==='number'&&x.h>0)o.h=x.h;
    if(typeof x.color==='string'&&x.color)o.color=x.color;
    if(typeof x.x==='number')o.x=x.x;
    if(typeof x.y==='number')o.y=x.y;
    return o;
  };
  // Find an existing profile id by case-insensitive name match
  const findPidByName=(name)=>{
    const ln=name.toLowerCase();
    return Object.keys(profiles).find(pid=>profiles[pid].name.toLowerCase()===ln)||null;
  };
  // Make a fresh profile id from a name
  const makePid=(name)=>{
    let pid=`${name.toLowerCase().replace(/[^a-z0-9]/g,'_')}_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;
    while(profiles[pid])pid=`${pid}_x`;
    return pid;
  };
  // Parse one file → list of {name, entries} candidate profiles
  const parseFile=async(file)=>{
    const txt=await file.text();
    const parsed=JSON.parse(txt);
    const baseName=(file.name||'').replace(/\.json$/i,'')||t('defaultProfile');
    // Single-profile export ({profile, entries})
    if(parsed&&Array.isArray(parsed.entries)){
      return [{
        name:(parsed.profile||baseName).toString().slice(0,60),
        oldPid:typeof parsed.pid==='string'?parsed.pid:null,
        entries:parsed.entries.map(normalizeEntry).filter(Boolean)
      }];
    }
    // Bare array of entries → use filename as profile name
    if(Array.isArray(parsed)){
      return [{name:baseName.slice(0,60),entries:parsed.map(normalizeEntry).filter(Boolean)}];
    }
    throw new Error('Invalid JSON');
  };

  // Parse every file first so we can show a single confirm with the totals
  const candidates=[];const failed=[];
  for(const f of files){
    try{const arr=await parseFile(f);candidates.push(...arr);}
    catch{failed.push(f.name);}
  }
  if(!candidates.length){
    alert(t('errImport')+(failed.length?`\n(${failed.join(', ')})`:''));
    e.target.value='';return;
  }
  if(!confirm(t('importMulti',candidates.length,files.length))){e.target.value='';return;}

  // Apply each candidate: replace if name exists, else create
  const replaced=[],created=[];let lastPid=currentPid;
  // Map each candidate's old (exported) pid → its final pid in this app, so
  // "!"-mention links (which embed data-pid="<old pid>") can be remapped below.
  const pidMap={};
  for(const c of candidates){
    const existingPid=findPidByName(c.name);
    if(existingPid){
      profiles[existingPid].entries=c.entries;
      lastPid=existingPid;
      replaced.push(c.name);
      if(c.oldPid)pidMap[c.oldPid]=existingPid;
    }else{
      const pid=makePid(c.name);
      profiles[pid]={name:c.name,entries:c.entries};
      lastPid=pid;
      created.push(c.name);
      if(c.oldPid)pidMap[c.oldPid]=pid;
    }
  }
  // Rewrite "!"-mention links that pointed at a re-mapped profile pid.
  const pidEntries=Object.entries(pidMap).filter(([oldPid,newPid])=>oldPid!==newPid);
  if(pidEntries.length){
    for(const c of candidates){
      for(const en of c.entries){
        if(!en.content||en.content.indexOf('data-pid=')<0)continue;
        let ct=en.content;
        for(const [oldPid,newPid] of pidEntries){
          ct=ct.split(`data-pid="${oldPid}"`).join(`data-pid="${newPid}"`);
        }
        en.content=ct;
      }
    }
  }
  persist();
  // Switch to the last imported profile so the user sees the result
  switchProfile(lastPid);
  renderSidebar();
  e.target.value='';

  // Friendly summary
  const okCount=candidates.length,failCount=failed.length;
  const msg=failCount?t('importPartial',okCount,failCount):t('importDone',okCount);
  alert(msg);
});

// Settings
$('settingsBtn').addEventListener('click',()=>{
  updateStats();refreshExportDirUI();renderProfilesPanel();
  // Always open on first tab
  document.querySelectorAll('.stab').forEach((b,i)=>b.classList.toggle('on',i===0));
  document.querySelectorAll('.s-panel').forEach((p,i)=>p.classList.toggle('on',i===0));
  remClass($('settingsModal'),'off');showBackdrop();
});
// Settings tab switching
$('settingsTabBar').addEventListener('click',e=>{
  const btn=e.target.closest('.stab');if(!btn)return;
  document.querySelectorAll('.stab').forEach(b=>b.classList.toggle('on',b===btn));
  document.querySelectorAll('.s-panel').forEach(p=>p.classList.toggle('on',p.id==='spanel-'+btn.dataset.tab));
  if(btn.dataset.tab==='stats')updateStats();
});
$('closeSettings').addEventListener('click',()=>{addClass($('settingsModal'),'off');hideBackdrop();});

// Export folder picker (File System Access API — Chromium browsers only)
$('chooseExportDirBtn').addEventListener('click',async()=>{
  if(typeof window.showDirectoryPicker!=='function')return;
  let handle;
  try{handle=await window.showDirectoryPicker({mode:'readwrite'});}catch(_){return;} // user cancelled
  if(!await ensureDirPermission(handle))return;
  await setExportDirHandle(handle);
  await refreshExportDirUI();
});
$('clearExportDirBtn').addEventListener('click',async()=>{
  await clearExportDirHandle();
  await refreshExportDirUI();
});
$('startTourBtn').addEventListener('click',()=>{
  addClass($('settingsModal'),'off');hideBackdrop();
  openTour();
});
$('closeTour').addEventListener('click',closeTour);
$('tourNext').addEventListener('click',()=>{
  if(tourStep===TOUR_STEPS.length-1){closeTour();return;}
  tourStep++;renderTourStep();
});
$('tourPrev').addEventListener('click',()=>{if(tourStep>0){tourStep--;renderTourStep();}});
$('tourSkip').addEventListener('click',closeTour);
$('langSelect').addEventListener('change',e=>{lang=e.target.value;persist();applyTr();render($('search').value);updateStats();});

// Escape
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    if(!$('confirmModal').classList.contains('off')){closeConfirmModal(false);return;}
    ['addModal','profileModal','settingsModal','shareModal','tourModal'].forEach(id=>{const m=$(id);if(m&&!m.classList.contains('off')){addClass(m,'off');hideBackdrop();if(id==='addModal')resetCardModal();}});
    if($('linkPanel').classList.contains('open'))closeLinkPanel();
    return;
  }
  if($('tourModal').classList.contains('off'))return;
  if(e.key==='ArrowRight')$('tourNext').click();
  else if(e.key==='ArrowLeft'&&tourStep>0){tourStep--;renderTourStep();}
});

/* ════════════════════════════════════════════════════════
   FIXED EDITOR TOOLBAR — commands + active state sync
════════════════════════════════════════════════════════ */
(()=>{
  const tb=$('editorToolbar'),ed=$('newEntry');
  if(!tb||!ed)return;
  let sv=null;
  const saveSel=()=>{const s=window.getSelection();if(s&&s.rangeCount>0&&ed.contains(s.anchorNode))sv=s.getRangeAt(0).cloneRange();};
  const restSel=()=>{if(sv){const s=window.getSelection();s.removeAllRanges();s.addRange(sv);}};

  // Save selection whenever user clicks/keys in editor
  ed.addEventListener('mouseup',saveSel);
  ed.addEventListener('keyup',saveSel);
  ed.addEventListener('focus',saveSel);

  // Helper: run command while keeping focus on editor
  const runCmd=(cmd,val=null)=>{ed.focus();restSel();document.execCommand('styleWithCSS',false,true);document.execCommand(cmd,false,val);document.execCommand('styleWithCSS',false,false);saveSel();updateActiveState();};

  // Find closest block element inside editor (for block type detection)
  const getCurrentBlock=()=>{const s=window.getSelection();if(!s||s.rangeCount===0)return null;let n=s.anchorNode;if(!n||!ed.contains(n))return null;while(n&&n!==ed){if(n.nodeType===1){const t=n.nodeName.toLowerCase();if(['p','h1','h2','h3','h4','h5','h6','blockquote','pre','li','div'].includes(t))return n;}n=n.parentNode;}return null;};

  // Change block type (P, H1, H2, H3, BLOCKQUOTE)
  const setBlock=(tag)=>{
    ed.focus();restSel();
    // execCommand formatBlock accepts <tag>
    document.execCommand('formatBlock',false,'<'+tag+'>');
    saveSel();updateActiveState();
  };

  // Toggle block: if already that tag, revert to P
  const toggleBlock=(tag)=>{
    const cur=getCurrentBlock();
    if(cur&&cur.nodeName.toLowerCase()===tag){setBlock('p');}
    else{setBlock(tag);}
  };

  // Extract plain text from a node, inserting \n at block element boundaries
  const nodeToText=(node)=>{
    if(node.nodeType===3)return node.textContent;
    if(node.nodeName==='BR')return '\n';
    const BLOCK=['P','DIV','H1','H2','H3','H4','H5','H6','LI','TR','BLOCKQUOTE'];
    let t='';
    node.childNodes.forEach(c=>{t+=nodeToText(c);});
    if(BLOCK.includes(node.nodeName)&&t&&!t.endsWith('\n'))t+='\n';
    return t;
  };

  // Smart code: inline if single-line selection, block if multi-line
  const toggleCode=()=>{
    ed.focus();restSel();
    const sel=window.getSelection();
    if(!sel||sel.rangeCount===0)return;
    const range=sel.getRangeAt(0);

    // Check if cursor/selection is already inside a <code> or <pre>
    let anc=range.commonAncestorContainer;
    if(anc.nodeType===3)anc=anc.parentNode;
    const inCode=anc.closest&&anc.closest('code,pre');

    if(range.collapsed){
      if(inCode){
        // Cursor inside code block → move cursor after the block to exit
        const root=inCode.closest('pre')||inCode;
        const nr=document.createRange();nr.setStartAfter(root);nr.collapse(true);
        sel.removeAllRanges();sel.addRange(nr);
      }else{
        // No selection, not in code → insert an empty block code + paragraph to exit
        const pre=document.createElement('pre');
        const code=document.createElement('code');
        code.textContent='​'; // zero-width space so cursor can sit inside
        pre.appendChild(code);
        const p=document.createElement('p');p.innerHTML='<br>';
        const frag=document.createDocumentFragment();
        frag.appendChild(pre);frag.appendChild(p);
        range.insertNode(frag);
        // Place cursor at start of the code element
        const nr=document.createRange();nr.setStart(code,0);nr.collapse(true);
        sel.removeAllRanges();sel.addRange(nr);
      }
      saveSel();updateActiveState();
      return;
    }

    if(inCode){
      // Unwrap: replace the code/pre with a paragraph containing the text
      const root=inCode.closest('pre')||inCode;
      const p=document.createElement('p');p.textContent=root.textContent;
      root.parentNode.replaceChild(p,root);
      const nr=document.createRange();nr.selectNodeContents(p);sel.removeAllRanges();sel.addRange(nr);
      saveSel();updateActiveState();
      return;
    }

    // Extract text preserving line breaks from block elements (range.toString() strips them)
    const cloned=range.cloneContents();
    const txt=nodeToText(cloned).replace(/\n+$/,'');
    const isMultiLine=txt.includes('\n')||!!cloned.querySelector('br,p,div,h1,h2,h3,h4,li');
    if(isMultiLine){
      // Block code
      const pre=document.createElement('pre');
      const code=document.createElement('code');
      code.textContent=txt;
      pre.appendChild(code);
      range.deleteContents();
      range.insertNode(pre);
      const nr=document.createRange();nr.setStartAfter(pre);nr.collapse(true);sel.removeAllRanges();sel.addRange(nr);
    }else{
      // Inline code
      const code=document.createElement('code');
      code.textContent=txt;
      range.deleteContents();
      range.insertNode(code);
      const nr=document.createRange();nr.setStartAfter(code);nr.collapse(true);sel.removeAllRanges();sel.addRange(nr);
    }
    saveSel();updateActiveState();
  };

  // Update visual "on" state of toolbar buttons
  const updateActiveState=()=>{
    tb.querySelectorAll('.et-btn[data-cmd]').forEach(b=>{
      const c=b.dataset.cmd;
      if(['bold','italic','underline','strikeThrough','insertUnorderedList','insertOrderedList','justifyLeft','justifyCenter','justifyRight'].includes(c)){
        try{toggleClass(b,'on',document.queryCommandState(c));}catch{}
      }
    });
    // Block type
    const cur=getCurrentBlock();
    const tag=cur?cur.nodeName.toLowerCase():'';
    tb.querySelectorAll('.et-btn[data-block]').forEach(b=>toggleClass(b,'on',b.dataset.block===tag));
    // Code
    const sel=window.getSelection();
    let inCode=false;
    if(sel&&sel.rangeCount>0){
      let a=sel.anchorNode;if(a&&a.nodeType===3)a=a.parentNode;
      if(a&&a.closest)inCode=!!a.closest('code,pre');
    }
    toggleClass($('etCode'),'on',inCode);
  };

  // Bind inline command buttons
  tb.querySelectorAll('.et-btn[data-cmd]').forEach(b=>b.addEventListener('mousedown',e=>{e.preventDefault();runCmd(b.dataset.cmd);}));

  // Bind block buttons
  tb.querySelectorAll('.et-btn[data-block]').forEach(b=>b.addEventListener('mousedown',e=>{e.preventDefault();toggleBlock(b.dataset.block);}));

  // Code button
  $('etCode')?.addEventListener('mousedown',e=>{e.preventDefault();toggleCode();});

  // Separator line (HR) button
  $('etHr')?.addEventListener('mousedown',e=>{e.preventDefault();ed.focus();restSel();document.execCommand('insertHTML',false,'<hr><p><br></p>');saveSel();updateActiveState();});

  // ── Image support ────────────────────────────────────────────────────────
  const compressImg=file=>new Promise(resolve=>{
    const reader=new FileReader();
    reader.onload=ev=>{
      const img=new Image();
      img.onload=()=>{
        const MAX=1200,c=document.createElement('canvas');
        let w=img.width,h=img.height;
        if(w>MAX){h=Math.round(h*MAX/w);w=MAX;}
        c.width=w;c.height=h;
        c.getContext('2d').drawImage(img,0,0,w,h);
        resolve(c.toDataURL(file.type==='image/png'?'image/png':'image/jpeg',0.85));
      };
      img.src=ev.target.result;
    };
    reader.readAsDataURL(file);
  });

  const insertImg=async file=>{
    const url=await compressImg(file);
    ed.focus();restSel();
    document.execCommand('insertHTML',false,`<img src="${url}" style="max-width:100%;height:auto"><p><br></p>`);
    saveSel();
  };

  // Hidden file input for toolbar button
  const imgInput=document.createElement('input');
  imgInput.type='file';imgInput.accept='image/*';imgInput.style.display='none';
  document.body.appendChild(imgInput);
  imgInput.addEventListener('change',e=>{const f=e.target.files[0];if(f)insertImg(f);imgInput.value='';});
  $('etImg')?.addEventListener('mousedown',e=>{e.preventDefault();imgInput.click();});

  // ── Image resize overlay ──────────────────────────────────────────────────
  const ov=document.createElement('div');ov.id='imgResizeOverlay';
  ['nw','ne','se','sw'].forEach(p=>{const h=document.createElement('div');h.className='img-handle img-handle-'+p;h.dataset.pos=p;ov.appendChild(h);});
  document.body.appendChild(ov);

  let _si=null,_dr=false,_dp='',_dx=0,_dw=0,_dh=0;

  const syncOv=()=>{if(!_si)return;const r=_si.getBoundingClientRect();ov.style.cssText='left:'+r.left+'px;top:'+r.top+'px;width:'+r.width+'px;height:'+r.height+'px;';};

  // Apply alignment to selected image
  const alignImg=cmd=>{
    if(!_si)return;
    _si.style.display='block';
    if(cmd==='justifyLeft'){_si.style.marginLeft='0';_si.style.marginRight='auto';}
    else if(cmd==='justifyCenter'){_si.style.marginLeft='auto';_si.style.marginRight='auto';}
    else if(cmd==='justifyRight'){_si.style.marginLeft='auto';_si.style.marginRight='0';}
    syncOv();syncImgAlign();saveSel();
  };

  // Reflect image alignment state on toolbar buttons
  const syncImgAlign=()=>{
    const cmds=['justifyLeft','justifyCenter','justifyRight'];
    if(!_si){updateActiveState();return;}
    const ml=_si.style.marginLeft,mr=_si.style.marginRight;
    cmds.forEach(cmd=>{
      const btn=tb.querySelector('[data-cmd="'+cmd+'"]');if(!btn)return;
      let on=false;
      if(cmd==='justifyLeft')on=ml===''||ml==='0px'||ml==='0';
      else if(cmd==='justifyCenter')on=ml==='auto'&&mr==='auto';
      else if(cmd==='justifyRight')on=ml==='auto'&&(mr==='0px'||mr==='0'||mr==='');
      toggleClass(btn,'on',on);
    });
  };

  const selImg=img=>{
    if(_si)_si.classList.remove('img-sel');
    _si=img;
    if(img){img.classList.add('img-sel');ov.classList.add('active');syncOv();syncImgAlign();}
    else{ov.classList.remove('active');updateActiveState();}
  };

  // Click on image in editor → show overlay; click elsewhere → hide
  ed.addEventListener('click',e=>{
    if(e.target.tagName==='IMG'){selImg(e.target);}
    else if(!ov.contains(e.target)){selImg(null);}
  });

  // Delete selected image with Backspace/Delete
  ed.addEventListener('keydown',e=>{
    if(_si&&(e.key==='Delete'||e.key==='Backspace')){
      e.preventDefault();
      const p=document.createElement('p');p.innerHTML='<br>';
      _si.after(p);_si.remove();selImg(null);
      const nr=document.createRange();nr.setStart(p,0);nr.collapse(true);
      const s=window.getSelection();s.removeAllRanges();s.addRange(nr);
      saveSel();
    }
  });

  // Hide overlay when modal closes
  new MutationObserver(()=>{if($('addModal').classList.contains('off'))selImg(null);}).observe($('addModal'),{attributes:true,attributeFilter:['class']});

  // Intercept alignment buttons in capture phase: apply to image when one is selected
  ['justifyLeft','justifyCenter','justifyRight'].forEach(cmd=>{
    const btn=tb.querySelector('[data-cmd="'+cmd+'"]');if(!btn)return;
    btn.addEventListener('mousedown',e=>{if(!_si)return;e.preventDefault();e.stopImmediatePropagation();alignImg(cmd);},true);
  });

  // Drag handles to resize
  ov.addEventListener('mousedown',e=>{
    const h=e.target.closest('.img-handle');
    if(!h||!_si)return;
    e.preventDefault();
    _dr=true;_dp=h.dataset.pos;_dx=e.clientX;_dw=_si.offsetWidth;_dh=_si.offsetHeight;
  });

  document.addEventListener('mousemove',e=>{
    if(!_dr||!_si)return;
    const d=e.clientX-_dx;
    const nw=Math.max(50,_dp.includes('w')?_dw-d:_dw+d);
    const nh=Math.round(nw*(_dh/_dw));
    _si.style.width=nw+'px';_si.style.height=nh+'px';
    syncOv();
  });

  document.addEventListener('mouseup',()=>{if(_dr){_dr=false;saveSel();}});

  // Keep overlay aligned on scroll/resize
  document.querySelector('#addModal .m-body')?.addEventListener('scroll',syncOv);
  window.addEventListener('resize',syncOv);

  // Text color swatches
  tb.querySelectorAll('.et-sw:not(.et-sw-reset)').forEach(s=>s.addEventListener('mousedown',e=>{e.preventDefault();runCmd('foreColor',s.dataset.color||'inherit');}));
  tb.querySelector('.et-sw-reset')?.addEventListener('mousedown',e=>{e.preventDefault();ed.focus();restSel();document.execCommand('styleWithCSS',false,true);document.execCommand('foreColor',false,'inherit');document.execCommand('styleWithCSS',false,false);saveSel();updateActiveState();});

  // Highlight swatches
  tb.querySelectorAll('.et-hl:not(.et-hl-reset)').forEach(s=>s.addEventListener('mousedown',e=>{e.preventDefault();runCmd('hiliteColor',s.dataset.color||'transparent');}));
  tb.querySelector('.et-hl-reset')?.addEventListener('mousedown',e=>{e.preventDefault();runCmd('hiliteColor','transparent');});

  // Keep active state live
  ed.addEventListener('keyup',updateActiveState);
  ed.addEventListener('mouseup',()=>setTimeout(updateActiveState,0));
  document.addEventListener('selectionchange',()=>{if(!$('addModal').classList.contains('off'))updateActiveState();});

  // Keyboard shortcuts sync
  ed.addEventListener('keydown',e=>{if((e.ctrlKey||e.metaKey)&&['b','i','u'].includes(e.key.toLowerCase()))setTimeout(updateActiveState,10);});

  // Tab key inside <pre> code blocks → indent with 2 spaces (Shift+Tab = dedent)
  ed.addEventListener('keydown',e=>{
    if(e.key!=='Tab')return;
    const sel=window.getSelection();
    if(!sel||sel.rangeCount===0)return;
    let node=sel.anchorNode;
    if(node&&node.nodeType===3)node=node.parentNode;
    if(!node||!node.closest)return;
    const pre=node.closest('pre');
    if(!pre)return;
    e.preventDefault();
    if(e.shiftKey){
      // Dedent: remove up to 2 leading spaces from current line
      const range=sel.getRangeAt(0);
      const tn=sel.anchorNode;
      if(tn&&tn.nodeType===3){
        const off=range.startOffset;
        const txt=tn.textContent;
        const lineStart=txt.lastIndexOf('\n',off-1)+1;
        const spaces=txt.slice(lineStart,lineStart+2).match(/^ {1,2}/);
        if(spaces){
          const nr=document.createRange();
          nr.setStart(tn,lineStart);nr.setEnd(tn,lineStart+spaces[0].length);
          nr.deleteContents();
        }
      }
    }else{
      document.execCommand('insertText',false,'  ');
    }
    saveSel();updateActiveState();
  });

  // Paste: image-aware, falls back to plain text
  ed.addEventListener('paste',e=>{
    const img=[...e.clipboardData.items].find(i=>i.type.startsWith('image/'));
    if(img){e.preventDefault();insertImg(img.getAsFile());return;}
    e.preventDefault();document.execCommand('insertText',false,e.clipboardData.getData('text/plain'));
  });
})();

/* ════════════════════════════════════════════════════════
   "!mention" CARD LINKS — type "!" + a word to link to another card
   (any profile). The typed word becomes a blue, clickable chip.
════════════════════════════════════════════════════════ */
(()=>{
  const ed=$('newEntry'),menu=$('mentionMenu')||(()=>{
    const m=document.createElement('div');
    m.id='mentionMenu';m.className='mention-menu';m.setAttribute('role','listbox');
    document.body.appendChild(m);return m;
  })();
  if(!ed)return;

  const MAX=30, QLEN=80;
  let menuOpen=false, range=null, query='', items=[], activeIdx=-1;

  // Gather candidate cards across profiles — current profile first, self excluded.
  // The typed text is just the link's label, not a mandatory filter: every other
  // card stays pickable even if none of the typed words appear in it — cards whose
  // text matches all the typed words (in any order) are simply ranked first.
  function collect(q){
    const words=q.toLowerCase().trim().split(/\s+/).filter(Boolean),out=[];
    const pids=[currentPid,...Object.keys(profiles).filter(p=>p!==currentPid)];
    for(const pid of pids){
      const p=profiles[pid];if(!p||!Array.isArray(p.entries))continue;
      const cands=[];
      for(let i=0;i<p.entries.length;i++){
        const entry=p.entries[i];
        if(pid===currentPid&&i===editIdx)continue; // a card can't link to itself
        const hit=!words.length||words.every(w=>getSearchText(entry).includes(w));
        cands.push({pid,profName:p.name,entry,hit});
      }
      if(words.length)cands.sort((a,b)=>b.hit-a.hit);
      for(const c of cands){out.push(c);if(out.length>=MAX)return out;}
    }
    return out;
  }

  function place(){
    if(!range)return;
    const r=range.getBoundingClientRect();
    const mw=menu.offsetWidth||280,mh=menu.offsetHeight||0;
    let left=Math.min(r.left,window.innerWidth-mw-12);
    let top=r.bottom+6;
    if(top+mh>window.innerHeight-12)top=Math.max(8,r.top-mh-6);
    menu.style.left=Math.max(8,left)+'px';
    menu.style.top=top+'px';
  }

  function paint(){
    if(!items.length){
      menu.innerHTML=`<div class="mention-hint">${esc(t('mentionNoCards'))}</div>`;
      activeIdx=-1;
    }else{
      activeIdx=0;
      let last=null,html='';
      items.forEach((it,i)=>{
        if(it.pid!==last){html+=`<div class="mention-group-label">${esc(it.profName)}</div>`;last=it.pid;}
        html+=`<div class="mention-item${i===0?' active':''}" data-i="${i}" role="option"><span class="mention-item-dot"></span><span class="mention-item-title">${esc(cardPreviewLabel(it.entry))}</span></div>`;
      });
      menu.innerHTML=html;
    }
    place();
  }

  function close(){menuOpen=false;range=null;query='';items=[];activeIdx=-1;menu.classList.remove('open');}

  function setActive(i){
    activeIdx=i;
    menu.querySelectorAll('.mention-item').forEach(el=>{
      const on=+el.dataset.i===i;el.classList.toggle('active',on);
      if(on)el.scrollIntoView({block:'nearest'});
    });
  }

  // Replace the "!query" range with a styled, non-editable link chip.
  function pick(i){
    const it=items[i];
    if(!it||!range)return;
    const sel=window.getSelection();
    sel.removeAllRanges();sel.addRange(range);
    range.deleteContents();
    const a=document.createElement('a');
    a.className='card-link';a.href='#';a.contentEditable='false';
    a.dataset.pid=it.pid;a.dataset.id=it.entry.id;
    a.title=cardPreviewLabel(it.entry);
    a.textContent=query.trim()||cardPreviewLabel(it.entry).split(' ').slice(0,3).join(' ');
    range.insertNode(a);
    const sp=document.createTextNode(' ');
    a.parentNode.insertBefore(sp,a.nextSibling);
    const nr=document.createRange();nr.setStart(sp,1);nr.collapse(true);
    sel.removeAllRanges();sel.addRange(nr);
    close();
    ed.focus();
  }

  // Detect "!some words" being typed right before the caret and (re)open the menu.
  // The query can span several words — it only ends at a newline, another "!", a pick, or escape.
  function detect(){
    const sel=window.getSelection();
    if(!sel||!sel.rangeCount){close();return;}
    const r=sel.getRangeAt(0);
    if(!r.collapsed||r.startContainer.nodeType!==3||!ed.contains(r.startContainer)){close();return;}
    const text=r.startContainer.textContent.slice(0,r.startOffset);
    const m=text.match(new RegExp(String.raw`(?:^|[\s ])!([^\n!<>]{0,${QLEN}})$`));
    if(!m){close();return;}
    query=m[1];
    const tr=document.createRange();
    tr.setStart(r.startContainer,r.startOffset-query.length-1);
    tr.setEnd(r.startContainer,r.startOffset);
    range=tr;
    items=collect(query);paint();
    if(!menuOpen){menu.classList.add('open');menuOpen=true;}
  }

  ed.addEventListener('input',detect);
  ed.addEventListener('keydown',e=>{
    if(!menuOpen)return;
    if(e.key==='ArrowDown'){e.preventDefault();if(items.length)setActive((activeIdx+1)%items.length);}
    else if(e.key==='ArrowUp'){e.preventDefault();if(items.length)setActive((activeIdx-1+items.length)%items.length);}
    else if(e.key==='Enter'||e.key==='Tab'){if(activeIdx>=0){e.preventDefault();pick(activeIdx);}}
    else if(e.key==='Escape'){e.preventDefault();close();}
    else if(e.key===' '||e.key==='ArrowLeft'||e.key==='ArrowRight'){setTimeout(detect,0);}
  },true);
  // mousedown (not click) so the editor never loses focus/selection when picking
  menu.addEventListener('mousedown',e=>{
    const it=e.target.closest('.mention-item');
    if(!it)return;
    e.preventDefault();pick(+it.dataset.i);
  });
  window.addEventListener('resize',()=>{if(menuOpen)place();});
  document.querySelector('#addModal .m-body')?.addEventListener('scroll',()=>{if(menuOpen)place();});
  new MutationObserver(()=>{if($('addModal').classList.contains('off'))close();}).observe($('addModal'),{attributes:true,attributeFilter:['class']});
})();

/* ════════════════════════════════════════════════════════
   P2P SHARE — protocole identique à l'extension Chrome
   Serveur : 0.peerjs.com:443 secure
   Sender  : peer ID = "query-ext-" + shortId (6 chars base36 upper)
   Receiver: peer ID = "query-recv-" + shortId + shortId (12 chars)
   Payload : JSON.stringify({ type:'query-profile', payload:{name,entries} })
════════════════════════════════════════════════════════ */
(()=>{
  let peer=null;

  const genShort=()=>Math.random().toString(36).substring(2,8).toUpperCase();
  const PEER_CFG={host:'0.peerjs.com',port:443,path:'/',secure:true,config:{iceServers:[
    {urls:'stun:stun.l.google.com:19302'},
    {urls:'stun:stun1.l.google.com:19302'},
    {urls:'stun:stun.cloudflare.com:3478'},
    // TURN relay fallback — required when both peers sit behind a symmetric NAT
    // and a direct STUN-negotiated path can't be found (mobile networks, some routers).
    {urls:'turn:openrelay.metered.ca:80',username:'openrelayproject',credential:'openrelayproject'},
    {urls:'turn:openrelay.metered.ca:443',username:'openrelayproject',credential:'openrelayproject'},
    {urls:'turn:openrelay.metered.ca:443?transport=tcp',username:'openrelayproject',credential:'openrelayproject'}
  ]}};
  const destroy=()=>{if(peer){try{peer.destroy();}catch(_){}peer=null;}};

  /* ── Send panel UI ── */
  const setSendStatus=(msg,cls='waiting')=>{
    const el=$('waitMsg');
    el.className='share-status '+cls;
    el.textContent=msg;
    remClass(el,'off');
  };

  /* ── Receive panel UI ── */
  const setRecvStatus=(msg,cls)=>{
    ['connectingMsg','recvOk','recvErr'].forEach(id=>addClass($(id),'off'));
    if(!msg)return;
    const el=(cls==='success'?$('recvOk'):cls==='error'?$('recvErr'):$('connectingMsg'));
    el.className='share-status '+(cls||'waiting');
    if(cls==='error') $('recvErrTxt').textContent=msg, remClass($('recvErr'),'off');
    else el.textContent=msg, remClass(el,'off');
  };

  function openShare(){resetShare();remClass($('shareModal'),'off');showBackdrop();}
  function closeShare(){addClass($('shareModal'),'off');hideBackdrop();destroy();}

  /* ── QR code ── */
  const qrEl=$('qrCode');
  function clearQr(){addClass($('qrWrap'),'off');if(qrEl)qrEl.innerHTML='';}
  function showQr(shortId){
    if(!qrEl||typeof QRCode==='undefined')return;
    const url=location.origin+location.pathname+'?p2p='+shortId;
    qrEl.innerHTML='';
    new QRCode(qrEl,{text:url,width:144,height:144,correctLevel:QRCode.CorrectLevel.M});
    remClass($('qrWrap'),'off');
  }

  function resetShare(){
    destroy();
    $('tab-send').classList.add('on');$('tab-recv').classList.remove('on');
    remClass($('sendPanel'),'off');addClass($('recvPanel'),'off');
    addClass($('codeDisplay'),'off');addClass($('sendOk'),'off');clearQr();
    const gcb=$('genCodeBtn');remClass(gcb,'off');gcb.disabled=false;gcb.textContent=t('genCode');
    $('myCode').textContent='------';
    setSendStatus(t('waitMsg'));addClass($('waitMsg'),'off'); // hidden until code generated
    $('peerInput').value='';
    ['connectingMsg','recvOk','recvErr','pwaNotice'].forEach(id=>addClass($(id),'off'));
    $('connectBtn').disabled=false;$('connectBtn').textContent=t('connectBtn');
  }

  function setShareMode(m){
    destroy();
    if(m==='send'){
      $('tab-send').classList.add('on');$('tab-recv').classList.remove('on');
      remClass($('sendPanel'),'off');addClass($('recvPanel'),'off');
      addClass($('codeDisplay'),'off');addClass($('sendOk'),'off');clearQr();
      const gcb=$('genCodeBtn');remClass(gcb,'off');gcb.disabled=false;
    }else{
      $('tab-recv').classList.add('on');$('tab-send').classList.remove('on');
      remClass($('recvPanel'),'off');addClass($('sendPanel'),'off');
      $('peerInput').value='';
      ['connectingMsg','recvOk','recvErr','pwaNotice'].forEach(id=>addClass($(id),'off'));
      $('connectBtn').disabled=false;
    }
  }

  /* ── SEND ── */
  function startSend(){
    const shortId=genShort();
    const peerId='query-ext-'+shortId;

    $('genCodeBtn').disabled=true;addClass($('genCodeBtn'),'off');
    remClass($('codeDisplay'),'off');
    $('myCode').textContent=shortId;
    addClass($('sendOk'),'off');
    showQr(shortId);
    setSendStatus(t('waitMsg')); // "⏳ En attente de connexion…"

    peer=new Peer(peerId,PEER_CFG);

    // Overall timeout: if no receiver ever connects, don't leave the peer
    // (and its signaling-server socket) dangling forever.
    const sendTimeout=setTimeout(()=>{
      if(sent)return;
      setSendStatus(t('p2pSendErr'),'error');
      destroy();
    },120000);

    peer.on('error',err=>{
      console.error('PeerJS send error:',err);
      setSendStatus(t('p2pSendErr'),'error');
      clearTimeout(sendTimeout);
      destroy(); // avoid leaving a half-open connection on the signaling server
    });

    peer.on('disconnected',()=>{
      // Lost the websocket to the signaling server (not a hard error) —
      // try to reconnect so a pending share doesn't silently die.
      if(peer&&!sent){try{peer.reconnect();}catch(_){}}
    });

    let sent=false;
    peer.on('connection',conn=>{
      if(sent) return; // ignorer les connexions multiples
      conn.on('open',()=>{
        if(sent) return; sent=true;
        clearTimeout(sendTimeout);
        const entriesOut=(profiles[currentPid].entries||[]).map(e=>{
          const o={content:e.content||'',isPinned:!!e.isPinned,createdAt:e.createdAt};
          if(typeof e.w==='number'&&e.w>0)o.w=e.w;
          if(typeof e.h==='number'&&e.h>0)o.h=e.h;
          if(typeof e.color==='string'&&e.color)o.color=e.color;
          return o;
        });
        conn.send({type:'query-profile',payload:{name:profiles[currentPid].name,entries:entriesOut}});
        addClass($('waitMsg'),'off');
        remClass($('sendOk'),'off');
        conn.on('close',destroy);
        setTimeout(destroy,15000);
      });
      conn.on('error',err=>console.error('conn error:',err));
    });
  }

  /* ── RECEIVE ── */
  function startRecv(){
    const code=$('peerInput').value.trim().toUpperCase();
    if(code.length<4){$('recvErrTxt').textContent=t('p2pShort');remClass($('recvErr'),'off');return;}

    const targetPeerId='query-ext-'+code;
    const myId='query-recv-'+genShort()+genShort();

    $('connectBtn').disabled=true;
    setRecvStatus(t('connecting'),'waiting');

    peer=new Peer(myId,PEER_CFG);

    const recvTimeout=setTimeout(()=>{
      if(!peer)return;
      setRecvStatus(t('p2pTimeout'),'error');
      $('connectBtn').disabled=false;
      destroy();
    },30000);

    peer.on('open',()=>{
      const conn=peer.connect(targetPeerId,{reliable:true});

      conn.on('open',()=>{
        // connexion établie, on attend les données
      });

      conn.on('data',rawData=>{
        clearTimeout(recvTimeout);
        try{
          // PeerJS peut livrer un objet direct ou une string selon l'émetteur
          const msg=typeof rawData==='string'?JSON.parse(rawData):(rawData&&rawData.type?rawData:JSON.parse(JSON.stringify(rawData)));
          if(msg.type!=='query-profile')throw new Error('bad type');
          const rec=msg.payload,now=Date.now();
          const safe=(Array.isArray(rec.entries)?rec.entries:[]).map((e,i)=>{
            if(typeof e==='string')return{id:genId(),content:cleanContent(e),isPinned:false,createdAt:now+i};
            if(!e||typeof e!=='object')return null;
            const o={id:e.id||genId(),content:cleanContent(e.content),isPinned:!!e.isPinned,createdAt:e.createdAt||now+i};
            if(typeof e.w==='number'&&e.w>0)o.w=e.w;
            if(typeof e.h==='number'&&e.h>0)o.h=e.h;
            if(typeof e.color==='string'&&e.color)o.color=e.color;
            if(typeof e.x==='number')o.x=e.x;
            if(typeof e.y==='number')o.y=e.y;
            return o;
          }).filter(Boolean);
          const ex=Object.values(profiles).map(p=>p.name.toLowerCase());
          const baseName=rec.name||t('defaultProfile');let nn=baseName;let c=1;
          while(ex.includes(nn.toLowerCase()))nn=`${baseName} (${c++})`;
          const nid=`${nn.toLowerCase().replace(/[^a-z0-9]/g,'_')}_${now}`;
          profiles[nid]={name:nn,entries:safe};
          const saved=persist();
          if(!saved){
            delete profiles[nid];
            setRecvStatus(t('errQuota'),'error');
            $('connectBtn').disabled=false;
            destroy(); return;
          }
          setRecvStatus(t('p2pRecvOk',nn),'success');
          renderSidebar();switchProfile(nid);destroy();
        }catch(e){
          clearTimeout(recvTimeout);
          setRecvStatus(t('p2pDataErr'),'error');
          $('connectBtn').disabled=false;
        }
      });

      conn.on('error',()=>{
        clearTimeout(recvTimeout);
        setRecvStatus(t('p2pFail'),'error');
        $('connectBtn').disabled=false;
      });
    });

    peer.on('error',err=>{
      clearTimeout(recvTimeout);
      console.error('PeerJS recv error:',err);
      setRecvStatus(t('p2pNotFound'),'error');
      $('connectBtn').disabled=false;
      destroy(); // avoid leaving a half-open connection on the signaling server
    });

    peer.on('disconnected',()=>{
      // Lost the websocket to the signaling server (not a hard error) —
      // try to reconnect so the pending connection attempt doesn't silently die.
      if(peer){try{peer.reconnect();}catch(_){}}
    });
  }

  $('shareBtn').addEventListener('click',openShare);
  $('closeShare').addEventListener('click',closeShare);
  $('tab-send').addEventListener('click',()=>setShareMode('send'));
  $('tab-recv').addEventListener('click',()=>setShareMode('receive'));
  $('genCodeBtn').addEventListener('click',startSend);
  $('copyCodeBtn').addEventListener('click',()=>{
    const code=$('myCode').textContent;
    navigator.clipboard.writeText(code).then(()=>{
      const b=$('copyCodeBtn'),o=b.textContent;b.textContent='✅';setTimeout(()=>b.textContent=o,1500);
    });
  });
  $('pwaCopyCodeBtn').addEventListener('click',()=>{
    const code=$('pwaNoticeCode').textContent;
    navigator.clipboard.writeText(code).then(()=>{
      const b=$('pwaCopyCodeBtn'),o=b.textContent;b.textContent='✅';setTimeout(()=>b.textContent=o,1500);
    });
  });
  $('connectBtn').addEventListener('click',startRecv);
  $('peerInput').addEventListener('input',e=>{
    const s=e.target.selectionStart,end=e.target.selectionEnd;
    e.target.value=e.target.value.toUpperCase();
    e.target.setSelectionRange(s,end);
  });
  $('peerInput').addEventListener('keydown',e=>{if(e.key==='Enter')startRecv();});

  /* ── QR auto-receive: opening ?p2p=CODE (from a scanned QR code) jumps
     straight into the "Receive" tab and pre-fills the code.
     On iOS/Android, a scanned QR code always opens in the browser, never
     directly in a home-screen-installed PWA — and on iOS the installed app
     has its own separate storage. So if we're not running standalone, we
     don't auto-import (that would silently land in the browser's storage);
     instead we show the code and ask the user to enter it in the app. ── */
  (()=>{
    const params=new URLSearchParams(location.search);
    const code=(params.get('p2p')||'').trim().toUpperCase();
    if(!code)return;
    // Clean the URL so reloading/sharing the link doesn't re-trigger this.
    params.delete('p2p');
    const qs=params.toString();
    history.replaceState(null,'',location.pathname+(qs?'?'+qs:'')+location.hash);
    const isStandalone=window.navigator.standalone===true||window.matchMedia('(display-mode: standalone)').matches;
    document.addEventListener('query-ready',()=>{
      openShare();
      setShareMode('receive');
      $('peerInput').value=code;
      if(isStandalone){
        startRecv();
      }else{
        $('pwaNoticeCode').textContent=code;
        remClass($('pwaNotice'),'off');
        $('pwaImportAnyway').addEventListener('click',()=>{
          addClass($('pwaNotice'),'off');
          startRecv();
        },{once:true});
      }
    },{once:true});
  })();
})();

/* ════════════════════════════════════════════════════════
   CARD LINK PREVIEW PANEL — clicking a "!mention" chip opens its
   target here, in a slide-over panel, so the origin card stays
   exactly where it was. A breadcrumb trail keeps every hop reachable.
════════════════════════════════════════════════════════ */
let linkNavStack=[]; // [{pid,id}, …] — last entry is the card currently shown
function openLinkPanel(targetPid,targetId,originRef){
  if(!targetPid||!targetId)return;
  const target={pid:targetPid,id:targetId};
  linkNavStack=(originRef&&(originRef.pid!==target.pid||originRef.id!==target.id))?[originRef,target]:[target];
  showLinkPanelCard();
  $('linkPanel').classList.add('open');$('linkPanelVeil').classList.add('open');
}
function closeLinkPanel(){
  $('linkPanel').classList.remove('open');$('linkPanelVeil').classList.remove('open');
  setTimeout(()=>{linkNavStack=[];},300);
}
function renderLinkCrumbs(){
  const wrap=$('linkCrumbs');wrap.innerHTML='';
  linkNavStack.forEach((s,i)=>{
    if(i>0){const sep=document.createElement('span');sep.className='link-crumb-sep';sep.textContent='›';wrap.appendChild(sep);}
    const f=findEntryById(s.pid,s.id);
    const label=f?cardPreviewLabel(f.entry):t('mentionDeleted');
    const last=i===linkNavStack.length-1;
    const b=document.createElement('button');
    b.className='link-crumb'+(last?' current':'');
    b.type='button';b.title=label;b.textContent=label;
    if(!last)b.addEventListener('click',()=>{linkNavStack=linkNavStack.slice(0,i+1);showLinkPanelCard();});
    wrap.appendChild(b);
  });
}
function showLinkPanelCard(){
  const top=linkNavStack[linkNavStack.length-1];
  const f=top&&findEntryById(top.pid,top.id);
  renderLinkCrumbs();
  $('linkPanelProfile').textContent=(profiles[top.pid]&&profiles[top.pid].name)||'';
  if(!f){
    $('linkPanelDate').textContent='';
    $('linkPanelContent').innerHTML=`<div class="empty-state"><div class="empty-state-icon">🗑️</div><div class="empty-state-title">${t('mentionDeletedTitle')}</div></div>`;
    addClass($('linkPanelEdit'),'off');addClass($('linkPanelCopy'),'off');addClass($('linkPanelPdf'),'off');
  }else{
    $('linkPanelDate').textContent=fmtDate(f.entry.createdAt);
    $('linkPanelContent').innerHTML=processContent(f.entry,[]);
    remClass($('linkPanelEdit'),'off');remClass($('linkPanelCopy'),'off');remClass($('linkPanelPdf'),'off');
  }
  $('linkPanel').querySelector('.link-panel-body').scrollTop=0;
}
// Clicking a "#tag" chip searches for it across every profile.
function searchTag(tag){
  if(!tag)return;
  closeLinkPanel();
  const q='/#'+tag;
  $('search').value=q;
  saveSearch();
  render(q);
  $('search').focus();
}
(()=>{
  $('closeLinkPanel').addEventListener('click',closeLinkPanel);
  $('linkPanelVeil').addEventListener('click',closeLinkPanel);
  // Following another "!mention" while previewing pushes onto the same trail.
  $('linkPanelContent').addEventListener('click',e=>{
    const tagEl=e.target.closest('.tag-chip');
    if(tagEl){e.preventDefault();searchTag(tagEl.dataset.tag);return;}
    const a=e.target.closest('a.card-link');
    if(!a)return;
    e.preventDefault();
    linkNavStack.push({pid:a.dataset.pid,id:a.dataset.id});
    showLinkPanelCard();
  });
  $('linkPanelCopy').addEventListener('click',()=>{
    const top=linkNavStack[linkNavStack.length-1];
    const f=top&&findEntryById(top.pid,top.id);
    if(!f)return;
    writeCardToClipboard(f.entry,()=>showToast(t('copied')));
  });
  $('linkPanelPdf').addEventListener('click',()=>{
    const top=linkNavStack[linkNavStack.length-1];
    const f=top&&findEntryById(top.pid,top.id);
    if(!f)return;
    exportCardToPdf(f.entry,(profiles[top.pid]&&profiles[top.pid].name)||'');
  });
  $('linkPanelEdit').addEventListener('click',()=>{
    const top=linkNavStack[linkNavStack.length-1];
    const f=top&&findEntryById(top.pid,top.id);
    if(!f)return;
    closeLinkPanel();
    editCardAt(top.pid,f.idx);
  });
})();

/* ════════════════════════════════════════════════════════
   DELEGATED EVENT LISTENERS — set up once, handle all cards
   (allows DOM-only reorder without re-render after drag drop)
════════════════════════════════════════════════════════ */
(()=>{
  const res=$('results');

  // Click on a "!mention" chip → open the target card in the side panel,
  // leaving the card it was clicked from exactly where it is.
  res.addEventListener('click',ev=>{
    const a=ev.target.closest('a.card-link');
    if(!a)return;
    ev.preventDefault();ev.stopPropagation();
    const card=a.closest('.card');
    let originRef=null;
    if(card){
      const oPid=card.dataset.profilePid||currentPid;
      const oIdx=parseInt(card.dataset.idx);
      const oEntry=(oPid===currentPid?entries:(profiles[oPid]?.entries||[]))[oIdx];
      if(oEntry)originRef={pid:oPid,id:oEntry.id};
    }
    openLinkPanel(a.dataset.pid,a.dataset.id,originRef);
  });

  // Click on a "#tag" chip → search that tag across every profile.
  res.addEventListener('click',ev=>{
    const tagEl=ev.target.closest('.tag-chip');
    if(!tagEl)return;
    ev.preventDefault();ev.stopPropagation();
    searchTag(tagEl.dataset.tag);
  });

  // Click: pin / copy / edit / reset-size
  res.addEventListener('click',ev=>{
    const btn=ev.target.closest('[data-r]');
    if(!btn)return;
    const r=btn.dataset.r;
    if(r==='drag'||r==='resize-r'||r==='resize-b'||r==='resize-br')return;
    ev.stopPropagation();
    const card=btn.closest('.card');
    if(!card)return;
    const idx=parseInt(card.dataset.idx);
    if(isNaN(idx))return;
    const pid=card.dataset.profilePid||currentPid;
    const pEntries=pid===currentPid?entries:(profiles[pid]?.entries||[]);
    if(r==='pin')togglePinAt(pid,idx);
    else if(r==='copy')copyCard(pEntries[idx],card);
    else if(r==='view'){const e=pEntries[idx];if(e)openLinkPanel(pid,e.id,null);}
    else if(r==='edit')editCardAt(pid,idx);
    else if(r==='reset-size')resetCardSize(idx);
    else if(r==='delete-card')deleteCardAt(pid,idx);
  });

  // Pointerdown: drag from anywhere on card, resize handles take priority
  res.addEventListener('pointerdown',ev=>{
    if(!editMode)return;
    const r_el=ev.target.closest('[data-r]');
    const r=r_el?.dataset.r;
    // Resize handles take priority
    if(r==='resize-r'||r==='resize-b'||r==='resize-br'){
      const card=r_el.closest('.card');
      if(!card||card.dataset.profilePid)return;
      const idx=parseInt(card.dataset.idx);
      if(isNaN(idx))return;
      if(r==='resize-r')startResize(ev,card,idx,'w');
      else if(r==='resize-b')startResize(ev,card,idx,'h');
      else startResize(ev,card,idx,'wh');
      return;
    }
    // Don't drag on action buttons
    if(r==='pin'||r==='copy'||r==='view'||r==='edit'||r==='reset-size'||r==='delete-card')return;
    // Drag from anywhere else on the card
    const card=ev.target.closest('.card');
    if(!card||card.dataset.profilePid)return;
    const idx=parseInt(card.dataset.idx);
    if(isNaN(idx))return;
    startCanvasDrag(ev,card,idx);
  });
})();

/* ════════════════════════════════════════════════════════
   LIVE ROOMS — profils partagés en direct (collaboratif P2P)
   ────────────────────────────────────────────────────────
   Principe : un profil "live" est une salle. Chaque membre garde sa
   copie locale complète (offline-first) ; les modifications circulent
   en direct entre pairs connectés via WebRTC (PeerJS pour le signaling
   uniquement — les données ne touchent jamais de serveur).

   - Code d'invitation = "SALLE-SECRET". La partie SALLE sert à dériver
     les peer IDs (visible du serveur de signaling) ; le SECRET ne
     transite JAMAIS par le réseau : il dérive une clé AES-GCM (PBKDF2)
     qui chiffre tous les messages. Un pair sans le secret est rejeté.
   - Topologie : maillage + balise tournante. Chaque membre a un peer ID
     aléatoire (jamais de conflit). L'ID fixe "query-live-<SALLE>" est un
     simple point de rendez-vous (balise) que N'IMPORTE QUEL membre en
     ligne revendique quand il est libre — la salle reste donc joignable
     tant qu'au moins un membre est là, créateur ou pas. Les messages
     d'état incluent la liste des pairs connus → maillage auto-réparant.
   - Conflits : last-writer-wins PAR FICHE (les fiches s'éditent
     atomiquement dans la modale → pas besoin de CRDT caractère par
     caractère). Chaque fiche porte updatedAt/updatedBy ; départage
     déterministe → tous les pairs convergent.
   - Suppressions : tombstones persistées (liveRooms[pid].tombs) pour
     qu'une fiche supprimée ne "ressuscite" pas au retour d'un membre
     hors-ligne.
   - Rattrapage : à chaque nouvelle connexion, échange d'état complet
     (fiches + tombstones), fusion LWW idempotente.
   - Détection des changements locaux : persist() est enveloppé — il
     diffe les fiches du profil live contre un instantané (shadow) et
     diffuse les opérations. Aucun point de mutation existant à toucher.
════════════════════════════════════════════════════════ */
(()=>{
  const hasCrypto=!!(window.crypto&&crypto.subtle);
  const sessions={}; // pid → session active

  const LIVE_PEER_CFG={host:'0.peerjs.com',port:443,path:'/',secure:true,config:{iceServers:[
    {urls:'stun:stun.l.google.com:19302'},
    {urls:'stun:stun1.l.google.com:19302'},
    {urls:'stun:stun.cloudflare.com:3478'},
    {urls:'turn:openrelay.metered.ca:80',username:'openrelayproject',credential:'openrelayproject'},
    {urls:'turn:openrelay.metered.ca:443',username:'openrelayproject',credential:'openrelayproject'},
    {urls:'turn:openrelay.metered.ca:443?transport=tcp',username:'openrelayproject',credential:'openrelayproject'}
  ]}};

  const genShort=()=>Math.random().toString(36).substring(2,8).toUpperCase().padEnd(6,'0');
  const opId=()=>'o'+Date.now().toString(36)+Math.random().toString(36).slice(2,8);
  // Conversion par blocs — les fiches avec images base64 dépassent la
  // limite d'arguments de String.fromCharCode(...) sinon.
  const b64=buf=>{
    const u=new Uint8Array(buf);let s='';
    for(let i=0;i<u.length;i+=0x8000)s+=String.fromCharCode.apply(null,u.subarray(i,i+0x8000));
    return btoa(s);
  };
  const unb64=s=>Uint8Array.from(atob(s),c=>c.charCodeAt(0));

  /* ── Registre persisté : d.liveRooms = { pid: {room,secret,isHost,memberId,tombs,peers} } ── */
  function getRooms(){const d=load()||{};return d.liveRooms||{};}
  function saveRooms(rooms){const d=load()||{};d.liveRooms=rooms;save(d);}

  /* ── Pseudo du membre : partagé entre toutes les salles, généré au premier
        besoin (noms d'animaux lisibles dans les deux langues). ── */
  const PSEUDO_POOL=['Panda','Koala','Fennec','Lynx','Puma','Jaguar','Kiwi','Gecko','Dingo','Okapi','Tapir','Quokka'];
  function getPseudo(){
    const d=load()||{};
    if(!d.livePseudo){
      d.livePseudo=PSEUDO_POOL[Math.floor(Math.random()*PSEUDO_POOL.length)]+'-'+Math.floor(10+Math.random()*90);
      save(d);
    }
    return d.livePseudo;
  }
  function setPseudo(p){const d=load()||{};const v=(p||'').trim().slice(0,20);if(v){d.livePseudo=v;save(d);}return d.livePseudo;}

  // Lien d'invitation : le code voyage dans le fragment (#) — il n'atteint
  // jamais un serveur, même si la page est servie en HTTP(S).
  const inviteLink=s=>location.href.split('#')[0]+'#live='+s.room+'-'+s.secret;

  /* ── Chiffrement applicatif : le signaling/TURN ne voit que des blobs ── */
  async function deriveKey(room,secret){
    const enc=new TextEncoder();
    const base=await crypto.subtle.importKey('raw',enc.encode(secret),'PBKDF2',false,['deriveKey']);
    return crypto.subtle.deriveKey(
      {name:'PBKDF2',salt:enc.encode('query-live:'+room),iterations:120000,hash:'SHA-256'},
      base,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
  }
  async function encMsg(key,obj){
    const iv=crypto.getRandomValues(new Uint8Array(12));
    const ct=await crypto.subtle.encrypt({name:'AES-GCM',iv},key,new TextEncoder().encode(JSON.stringify(obj)));
    return {q:'live1',iv:b64(iv.buffer),ct:b64(ct)};
  }
  async function decMsg(key,data){
    if(!data||data.q!=='live1')throw new Error('bad frame');
    const pt=await crypto.subtle.decrypt({name:'AES-GCM',iv:unb64(data.iv)},key,unb64(data.ct));
    return JSON.parse(new TextDecoder().decode(pt));
  }

  /* ── Fiches : empreinte pour le diff (updatedAt exclu → pas de boucle d'écho) ── */
  const fp=e=>JSON.stringify([e.content,!!e.isPinned,e.color||'',e.w||0,e.h||0,e.x??null,e.y??null]);
  function sanitizeCard(e){
    if(!e||typeof e!=='object'||typeof e.id!=='string')return null;
    const o={id:e.id,content:cleanContent(e.content),isPinned:!!e.isPinned,
             createdAt:typeof e.createdAt==='number'?e.createdAt:Date.now()};
    o.updatedAt=typeof e.updatedAt==='number'?e.updatedAt:o.createdAt;
    if(typeof e.updatedBy==='string')o.updatedBy=e.updatedBy;
    if(typeof e.w==='number'&&e.w>0)o.w=e.w;
    if(typeof e.h==='number'&&e.h>0)o.h=e.h;
    if(typeof e.color==='string'&&e.color)o.color=e.color;
    if(typeof e.x==='number')o.x=e.x;
    if(typeof e.y==='number')o.y=e.y;
    return o;
  }

  function mkSession(pid,rec){
    const s={pid,room:rec.room,secret:rec.secret,isHost:!!rec.isHost,memberId:rec.memberId,
             key:null,peer:null,beacon:null,claiming:false,
             conns:new Map(),seen:new Set(),shadow:new Map(),members:new Map(),
             applying:false,retryTimer:null,dead:false,announced:false,
             lastName:profiles[pid]?.name||'',
             knownPeers:new Set(Array.isArray(rec.peers)?rec.peers:[])};
    (profiles[pid]?.entries||[]).forEach(e=>{if(e&&e.id)s.shadow.set(e.id,fp(e));});
    sessions[pid]=s;
    return s;
  }
  // ID principal ÉPHÉMÈRE (régénéré à chaque session — jamais bloqué par un
  // ancien enregistrement côté signaling) + ID de la balise (fixe, partagé).
  // Le memberId stable, lui, ne sert qu'aux départages LWW (updatedBy).
  const myId=s=>'query-live-'+s.room+'-'+s.connId;
  const beaconId=s=>'query-live-'+s.room;

  /* ── Connexion ── */
  async function start(s){
    if(!hasCrypto){showToast(t('liveNoCrypto'),{error:true});return;}
    try{s.key=await deriveKey(s.room,s.secret);}catch(_){showToast(t('liveNoCrypto'),{error:true});return;}
    if(s.retryTimer){clearInterval(s.retryTimer);s.retryTimer=null;} // start() peut être rappelé (retry d'ID)
    s.connId=genShort()+genShort(); // frais à chaque tentative → zéro collision
    const p=new Peer(myId(s),LIVE_PEER_CFG);
    s.peer=p;
    p.on('open',()=>{
      s.dead=false;
      claimBeacon(s);                       // devenir le point de rendez-vous si libre
      if(!s.conns.size)dial(s,beaconId(s)); // sinon, joindre celui qui le tient
      s.knownPeers.forEach(id=>{if(id!==myId(s))dial(s,id);});
      updateLiveUI();
    });
    p.on('connection',conn=>attach(s,conn));
    p.on('error',err=>{
      const type=err&&err.type;
      if(type==='peer-unavailable')return;         // pair hors-ligne — le retry s'en charge
      if(type==='unavailable-id'){
        // Notre ID aléatoire est encore tenu par le signaling (reprise
        // immédiate, ou salle ouverte dans un autre onglet). On réessaie.
        s.dead=true;updateLiveUI();
        try{p.destroy();}catch(_){}
        setTimeout(()=>{if(sessions[s.pid]===s&&(!s.peer||s.peer.destroyed)){s.dead=false;start(s);}},8000);
        return;
      }
      console.warn('[live] peer error:',type||err);
    });
    p.on('disconnected',()=>{if(s.peer===p&&!p.destroyed){try{p.reconnect();}catch(_){}}});
    // Boucle d'entretien : revendiquer la balise si libre, retrouver la salle
    // via la balise quand on est isolé, recontacter les membres connus.
    s.retryTimer=setInterval(()=>{
      if(!s.peer||s.peer.destroyed)return;
      if(!s.beacon&&!s.claiming)claimBeacon(s);
      if(!s.beacon&&!s.conns.size&&!s.conns.has(beaconId(s)))dial(s,beaconId(s));
      s.knownPeers.forEach(id=>{if(id!==myId(s)&&!s.conns.has(id))dial(s,id);});
    },20000);
  }

  /* ── Balise tournante : n'importe quel membre en ligne tient l'ID fixe
        "query-live-<SALLE>" pour servir de point d'entrée aux autres.
        Si son détenteur part, un autre membre la revendique au cycle
        suivant — la salle reste joignable tant que quelqu'un est là. ── */
  function claimBeacon(s){
    if(s.beacon||s.claiming)return;
    s.claiming=true;
    let bp;
    try{bp=new Peer(beaconId(s),LIVE_PEER_CFG);}catch(_){s.claiming=false;return;}
    bp.on('open',()=>{s.claiming=false;s.beacon=bp;});
    bp.on('connection',conn=>{
      if(conn.peer===myId(s)){try{conn.close();}catch(_){}return;} // pas de boucle sur soi-même
      attach(s,conn);
    });
    bp.on('error',err=>{
      s.claiming=false;
      // unavailable-id = quelqu'un d'autre tient déjà la balise — normal.
      if(s.beacon!==bp){try{bp.destroy();}catch(_){}}
    });
    bp.on('disconnected',()=>{if(s.beacon===bp){try{bp.reconnect();}catch(_){}}});
    bp.on('close',()=>{if(s.beacon===bp)s.beacon=null;});
  }

  function dial(s,remoteId){
    if(!s.peer||s.peer.destroyed||s.conns.has(remoteId)||remoteId===myId(s))return;
    let conn;try{conn=s.peer.connect(remoteId,{reliable:true});}catch(_){return;}
    if(conn)attach(s,conn);
  }

  function attach(s,conn){
    conn.on('open',()=>{
      s.conns.set(conn.peer,conn);
      // Mémoriser les IDs principaux des membres (pas la balise, qui change de main)
      if(conn.peer!==beaconId(s)&&!s.knownPeers.has(conn.peer)){
        s.knownPeers.add(conn.peer);
        const rooms=getRooms();
        if(rooms[s.pid]){rooms[s.pid].peers=[...s.knownPeers].slice(-12);saveRooms(rooms);}
      }
      updateLiveUI();
      sendTo(s,conn,stateMsg(s)); // rattrapage : état complet à chaque (re)connexion
    });
    conn.on('data',async raw=>{
      let msg;
      // Échec de déchiffrement = pair sans le bon secret → rejet
      try{msg=await decMsg(s.key,raw);}catch(_){try{conn.close();}catch(_){}return;}
      handle(s,conn,msg);
    });
    const drop=()=>{if(s.conns.get(conn.peer)===conn){s.conns.delete(conn.peer);s.members.delete(conn.peer);updateLiveUI();}};
    conn.on('close',drop);
    conn.on('error',drop);
  }
  async function sendTo(s,conn,msg){try{conn.send(await encMsg(s.key,msg));}catch(_){}}
  async function broadcast(s,msg){
    if(!s.conns.size)return;
    let frame;try{frame=await encMsg(s.key,msg);}catch(_){return;}
    s.conns.forEach(c=>{try{c.send(frame);}catch(_){}});
  }

  function stateMsg(s){
    const p=profiles[s.pid]||{};
    const rec=getRooms()[s.pid]||{};
    return {t:'state',me:myId(s),who:getPseudo(),name:p.name||'',nameTs:rec.nameTs||0,
            cards:(p.entries||[]).map(e=>({...e})),
            tombs:rec.tombs||{},peers:[...s.conns.keys()]};
  }

  /* ── Nom du profil : LWW aussi, via nameTs (persisté dans la salle) ── */
  function applyName(s,name,ts){
    if(typeof name!=='string'||!name||typeof ts!=='number')return;
    const rooms=getRooms(),rec=rooms[s.pid],prof=profiles[s.pid];
    if(!rec||!prof)return;
    // Le tout premier état reçu baptise le profil placeholder même sans nameTs
    const isBaptism=!!prof._livePlaceholder;
    if(!isBaptism&&ts<=(rec.nameTs||0))return;
    rec.nameTs=Math.max(ts,rec.nameTs||0);saveRooms(rooms);
    const nn=name.slice(0,60);
    delete prof._livePlaceholder;
    if(isBaptism&&!s.announced){s.announced=true;showToast(t('liveJoined',nn));}
    if(prof.name!==nn){
      prof.name=nn;s.lastName=nn;
      s.applying=true;try{persist();}finally{s.applying=false;}
      renderSidebar();
      if(s.pid===currentPid)updateTopbar();
      updateLiveUI();
    }else{s.lastName=nn;}
  }

  function handle(s,conn,msg){
    if(!msg||typeof msg!=='object')return;
    if(msg.t==='state'){
      if(typeof msg.who==='string'&&msg.who&&typeof msg.me==='string'){s.members.set(msg.me,msg.who.slice(0,20));updateLiveUI();}
      applyName(s,msg.name,typeof msg.nameTs==='number'?msg.nameTs:0);
      merge(s,Array.isArray(msg.cards)?msg.cards:[],msg.tombs&&typeof msg.tombs==='object'?msg.tombs:{});
      // L'expéditeur révèle son ID principal → on le compose directement
      if(typeof msg.me==='string'&&msg.me.startsWith('query-live-'+s.room+'-'))dial(s,msg.me);
      // Guérison du maillage : se connecter aux membres qu'on ne connaît pas encore
      (Array.isArray(msg.peers)?msg.peers:[]).forEach(id=>{
        if(typeof id==='string'&&id.startsWith('query-live-'+s.room+'-')&&id!==myId(s))dial(s,id);
      });
      // La connexion à la balise n'est qu'un rendez-vous : une fois l'état
      // échangé et l'ID principal connu, on la libère.
      if(conn.peer===beaconId(s))setTimeout(()=>{try{conn.close();}catch(_){}},1500);
    }else if(msg.t==='op'){
      if(typeof msg.id!=='string'||s.seen.has(msg.id))return;
      s.seen.add(msg.id);
      if(s.seen.size>5000)s.seen.clear();
      if(msg.kind==='upsert'&&msg.card)merge(s,[msg.card],{});
      else if(msg.kind==='del'&&typeof msg.cid==='string')merge(s,[],{[msg.cid]:typeof msg.ts==='number'?msg.ts:Date.now()});
      else if(msg.kind==='name')applyName(s,msg.name,msg.ts);
      else if(msg.kind==='hello'&&typeof msg.me==='string'&&typeof msg.who==='string'&&msg.who){s.members.set(msg.me,msg.who.slice(0,20));updateLiveUI();}
      // Relai : propage aux autres pairs (couvre les maillages partiels)
      s.conns.forEach(c=>{if(c!==conn)sendTo(s,c,msg);});
    }
  }

  /* ── Rangement du canevas : quand la synchro fait atterrir deux fiches
        au même endroit, la plus récemment placée se décale vers un espace
        libre — celle qui était déjà bien placée ne bouge JAMAIS. Le calcul
        est déterministe (ordre updatedAt puis id), donc chaque pair aboutit
        au même agencement ; le décalage est ensuite rediffusé comme une
        édition normale pour que tout le monde converge. ── */
  function resolveOverlaps(s){
    const prof=profiles[s.pid];if(!prof)return [];
    const list=(prof.entries||[]).filter(e=>e&&typeof e.x==='number'&&typeof e.y==='number');
    if(list.length<2)return [];
    const W=e=>(typeof e.w==='number'&&e.w>0)?e.w:300;
    const H=e=>(typeof e.h==='number'&&e.h>0)?e.h:170;
    // "Au même endroit" = les rectangles se recouvrent à plus de 40 % de la
    // plus petite fiche — un léger chevauchement volontaire reste permis.
    const collide=(a,b)=>{
      const ox=Math.min(a.x+W(a),b.x+W(b))-Math.max(a.x,b.x);
      const oy=Math.min(a.y+H(a),b.y+H(b))-Math.max(a.y,b.y);
      if(ox<=0||oy<=0)return false;
      return (ox*oy)/Math.min(W(a)*H(a),W(b)*H(b))>0.4;
    };
    const sorted=list.slice().sort((a,b)=>
      ((a.updatedAt||a.createdAt||0)-(b.updatedAt||b.createdAt||0))||(a.id<b.id?-1:1));
    const placed=[],moved=[];
    sorted.forEach(e=>{
      let guard=0,m=false;
      while(placed.some(p=>collide(p,e))&&guard++<200){e.x+=36;e.y+=36;m=true;}
      if(m)moved.push(e);
      placed.push(e);
    });
    return moved;
  }

  /* ── Fusion LWW idempotente — utilisée pour l'état complet ET les ops ── */
  function merge(s,remoteCards,remoteTombs){
    const prof=profiles[s.pid];if(!prof)return;
    if(!Array.isArray(prof.entries))prof.entries=[];
    const list=prof.entries;
    const rooms=getRooms();
    const tombs=(rooms[s.pid]&&rooms[s.pid].tombs)||{};
    let changed=false;

    Object.keys(remoteTombs).forEach(id=>{
      const ts=remoteTombs[id];
      if(typeof ts!=='number')return;
      if((tombs[id]||0)<ts){tombs[id]=ts;changed=true;}
    });
    // Une fiche modifiée APRÈS sa suppression survit (LWW) ; sinon elle part.
    for(let i=list.length-1;i>=0;i--){
      const e=list[i],ts=tombs[e.id];
      if(ts&&(e.updatedAt||e.createdAt||0)<=ts){list.splice(i,1);s.shadow.delete(e.id);changed=true;}
    }
    remoteCards.forEach(rc=>{
      const c=sanitizeCard(rc);if(!c)return;
      const ts=tombs[c.id];
      if(ts&&c.updatedAt<=ts)return;
      const i=list.findIndex(e=>e&&e.id===c.id);
      if(i<0){list.push(c);changed=true;}
      else{
        const le=list[i],lts=le.updatedAt||le.createdAt||0;
        // LWW ; à timestamp égal, départage déterministe par auteur
        if(c.updatedAt>lts||(c.updatedAt===lts&&(c.updatedBy||'')>(le.updatedBy||'')&&fp(c)!==fp(le))){
          list[i]=c;changed=true;
        }
      }
    });
    if(!changed)return;

    list.sort((a,b)=>(b.isPinned?1:0)-(a.isPinned?1:0));
    // Séparer les fiches que la fusion a superposées (celle déjà en place reste)
    const moved=resolveOverlaps(s);
    if(rooms[s.pid]){rooms[s.pid].tombs=tombs;saveRooms(rooms);}
    // Rafraîchir le shadow AVANT persist pour ne pas ré-émettre les changements reçus
    s.shadow=new Map(list.filter(e=>e&&e.id).map(e=>[e.id,fp(e)]));
    if(s.pid===currentPid)entries=list;
    s.applying=true;
    try{persist();}finally{s.applying=false;}
    // Les décalages du rangement sont des éditions à part entière : horodatées
    // et diffusées, pour que tous les pairs adoptent le même agencement (LWW).
    if(moved.length){
      const mnow=Date.now();
      moved.forEach(e=>{
        e.updatedAt=mnow;e.updatedBy=s.memberId;
        const op={t:'op',id:opId(),kind:'upsert',card:{...e}};
        s.seen.add(op.id);broadcast(s,op);
      });
    }
    renderSidebar();
    if(s.pid===currentPid){updateTopbar();render($('search').value);}
    updateLiveUI();
  }

  /* ── Détection des changements locaux : persist() enveloppé.
        Tous les points de mutation existants (sauvegarde, suppression,
        épinglage, redimensionnement, déplacement…) passent par persist()
        → un seul point d'accroche, zéro modification du code existant. ── */
  const _basePersist=persist;
  persist=function(){
    Object.values(sessions).forEach(s=>{
      if(s.applying||!profiles[s.pid])return;
      const list=profiles[s.pid].entries||[];
      const present=new Set();
      const now=Date.now();
      list.forEach(e=>{
        if(!e||!e.id)return;
        present.add(e.id);
        const f=fp(e);
        if(s.shadow.get(e.id)===f)return;
        e.updatedAt=now;e.updatedBy=s.memberId;
        s.shadow.set(e.id,f);
        const op={t:'op',id:opId(),kind:'upsert',card:{...e}};
        s.seen.add(op.id);broadcast(s,op);
      });
      [...s.shadow.keys()].forEach(id=>{
        if(present.has(id))return;
        s.shadow.delete(id);
        const rooms=getRooms();
        if(rooms[s.pid]){rooms[s.pid].tombs=rooms[s.pid].tombs||{};rooms[s.pid].tombs[id]=now;saveRooms(rooms);}
        const op={t:'op',id:opId(),kind:'del',cid:id,ts:now};
        s.seen.add(op.id);broadcast(s,op);
      });
      // Renommage local du profil → diffusé à la salle
      const nm=profiles[s.pid].name||'';
      if(nm&&nm!==s.lastName){
        s.lastName=nm;
        const rooms=getRooms();
        if(rooms[s.pid]){rooms[s.pid].nameTs=now;saveRooms(rooms);}
        const op={t:'op',id:opId(),kind:'name',name:nm,ts:now};
        s.seen.add(op.id);broadcast(s,op);
      }
    });
    const ok=_basePersist();
    updateLiveUI();
    return ok;
  };

  /* ── Quitter la salle quand le profil est supprimé ── */
  const _baseDeleteProfile=deleteProfile;
  deleteProfile=function(pid){
    _baseDeleteProfile(pid);
    if(!profiles[pid]){
      // Profil supprimé → la salle disparaît vraiment (pas de pause ici)
      closeSession(pid);
      const rooms=getRooms();
      if(rooms[pid]){delete rooms[pid];saveRooms(rooms);}
      updateLiveUI();
    }
  };

  /* ── Actions ── */
  async function createRoom(){
    const pid=currentPid;
    if(!profiles[pid]||sessions[pid])return;
    if(!hasCrypto){showToast(t('liveNoCrypto'),{error:true});return;}
    const rooms=getRooms();
    let rec=rooms[pid];
    // Code PERMANENT : si la salle a déjà existé pour ce profil (partage en
    // pause), on la reprend avec le même code et le même rôle — les autres
    // membres peuvent donc toujours nous retrouver. Sinon, on crée.
    if(rec)delete rec.paused;
    else rec=rooms[pid]={room:genShort(),secret:genShort(),isHost:true,memberId:genShort(),tombs:{},peers:[],nameTs:Date.now()};
    saveRooms(rooms);
    // Marqueur durable : ce profil EST la salle <room>. Il survit à un
    // "arrêter le partage" — re-rejoindre le même code réattache ce profil
    // au lieu d'en créer un doublon.
    profiles[pid].liveRoom=rec.room;
    const s=mkSession(pid,rec);
    persist();
    updateLiveUI();
    await start(s);
  }

  async function joinRoom(code){
    const m=/^([A-Z0-9]{4,8})-([A-Z0-9]{4,8})$/.exec((code||'').trim().toUpperCase());
    if(!m){liveErr(t('liveErrCode'));return;}
    if(!hasCrypto){liveErr(t('liveNoCrypto'));return;}
    const room=m[1],secret=m[2];
    const rooms=getRooms();
    // UN SEUL profil par salle : retrouver le profil déjà lié à ce code —
    // salle encore enregistrée, ou profil marqué liveRoom après un départ.
    let pid=Object.keys(rooms).find(p=>rooms[p].room===room&&profiles[p])
          ||Object.keys(profiles).find(p=>profiles[p]&&profiles[p].liveRoom===room);
    if(pid&&sessions[pid]){switchProfile(pid);updateLiveUI();return;}
    if(!pid){
      pid='live_'+room.toLowerCase()+'_'+Date.now();
      profiles[pid]={name:'📡 '+room,entries:[],liveRoom:room,_livePlaceholder:true};
    }else{
      profiles[pid].liveRoom=room;
    }
    // Réattachement : reprendre l'enregistrement existant (tombstones,
    // memberId…) s'il est encore là, sinon repartir proprement.
    const rec=rooms[pid]||{room,secret,isHost:false,memberId:genShort(),tombs:{},peers:[]};
    rec.secret=secret;
    delete rec.paused;
    rooms[pid]=rec;saveRooms(rooms);
    const s=mkSession(pid,rec);
    persist();
    renderSidebar();switchProfile(pid);
    $('liveCodeInput').value='';
    updateLiveUI();
    await start(s);
  }

  function closeSession(pid){
    const s=sessions[pid];
    if(!s)return;
    if(s.retryTimer)clearInterval(s.retryTimer);
    try{s.peer&&s.peer.destroy();}catch(_){}
    try{s.beacon&&s.beacon.destroy();}catch(_){}
    delete sessions[pid];
  }

  // Arrêt définitif du partage : la session se ferme et l'enregistrement de
  // salle disparaît — la copie locale du profil reste. Le marqueur liveRoom
  // est conservé pour qu'un futur "rejoindre" avec l'ancien code réattache
  // ce profil au lieu d'en créer un doublon. Relancer le partage depuis ce
  // profil génère un NOUVEAU code (les anciens invités ne nous suivent plus).
  function stopSharing(pid){
    if(!sessions[pid])return;
    closeSession(pid);
    const rooms=getRooms();
    if(rooms[pid]){delete rooms[pid];saveRooms(rooms);}
    showToast(t('liveStopped'));
    updateLiveUI();
  }

  /* ── UI ── */
  function liveErr(msg){
    const el=$('liveErr');if(!el)return;
    el.textContent='❌ '+msg;remClass(el,'off');
    setTimeout(()=>addClass(el,'off'),5000);
  }

  function updateLiveUI(){
    const s=sessions[currentPid];
    const badge=$('liveBadge');
    if(badge){
      if(s&&!s.dead){remClass(badge,'off');$('liveBadgeTxt').textContent=t('liveBadge',s.conns.size);}
      else addClass(badge,'off');
    }
    markLiveRows();
    renderLivePanel();
  }

  // Icône radio violette sur les lignes de la sidebar dont le profil est en direct
  function markLiveRows(){
    document.querySelectorAll('#profileList .p-row').forEach(row=>{
      toggleClass(row,'live-on',!!sessions[row.dataset.pid]);
    });
  }
  const _baseRenderSidebar=renderSidebar;
  renderSidebar=function(){_baseRenderSidebar();markLiveRows();};

  // Icône 📡 d'une ligne de profil (sidebar) — SEUL point de création d'un
  // partage. Si le profil n'est pas encore partagé : création directe (ou
  // reprise avec le même code si la salle existait déjà), puis la modale
  // s'ouvre sur le panneau Live avec le lien d'invitation à copier.
  window._openLiveShare=async pid=>{
    if(!profiles[pid])return;
    if(pid!==currentPid)switchProfile(pid);
    if(!sessions[pid])await createRoom();
    $('shareBtn').click();   // ouvre la modale (reset sur l'onglet Envoyer)
    setLiveTab(true);        // puis bascule sur l'onglet Live
  };

  function renderLivePanel(){
    if(!$('livePanel'))return;
    $('lbl-live').textContent=t('liveTab');
    $('liveInstr').textContent=t('liveInstr');
    $('livePseudoLbl').textContent=t('livePseudoLbl');
    const pi=$('livePseudoInput');
    if(document.activeElement!==pi)pi.value=getPseudo();
    $('liveJoinInstr').textContent=t('liveJoinInstr');
    $('liveJoinBtn').textContent=t('liveJoin');
    $('liveHostHint').textContent=t('liveHostHint');
    $('liveInviteLbl').textContent=t('liveInviteLbl');
    $('liveLinkBtn').textContent=t('liveCopyLink');
    $('liveStopBtn').textContent=t('liveStop');
    const s=sessions[currentPid];
    if(s){
      addClass($('liveOffView'),'off');remClass($('liveOnView'),'off');
      $('liveCurrentTxt').textContent=t('liveCurrent')+' — '+(profiles[currentPid]?.name||'');
      $('liveMyCode').textContent=s.room+'-'+s.secret;
      // Participants : soi-même + les membres connectés dont on connaît le pseudo
      const wrap=$('liveMembers');wrap.innerHTML='';
      const me=document.createElement('span');me.className='live-member me';
      me.textContent=getPseudo()+' ('+t('liveYou')+')';wrap.appendChild(me);
      s.members.forEach((who,id)=>{
        if(!s.conns.has(id))return;
        const el=document.createElement('span');el.className='live-member';el.textContent=who;wrap.appendChild(el);
      });
      const st=$('liveStatusTxt');
      if(s.dead){st.className='share-status error';st.textContent=t('liveOffline');}
      else{st.className='share-status '+(s.conns.size?'success':'waiting');st.textContent=t('liveStatus',s.conns.size);}
    }else{
      remClass($('liveOffView'),'off');addClass($('liveOnView'),'off');
    }
  }

  function setLiveTab(on){
    toggleClass($('tab-live'),'on',on);
    toggleClass($('livePanel'),'off',!on);
    if(on){
      $('tab-send').classList.remove('on');$('tab-recv').classList.remove('on');
      addClass($('sendPanel'),'off');addClass($('recvPanel'),'off');
      renderLivePanel();
    }
  }
  $('tab-live').addEventListener('click',()=>setLiveTab(true));
  $('tab-send').addEventListener('click',()=>setLiveTab(false));
  $('tab-recv').addEventListener('click',()=>setLiveTab(false));
  $('shareBtn').addEventListener('click',()=>setLiveTab(false)); // resetShare() rouvre l'onglet "Envoyer"

  $('liveJoinBtn').addEventListener('click',()=>{joinRoom($('liveCodeInput').value);});
  $('liveCodeInput').addEventListener('input',e=>{
    const st=e.target.selectionStart,en=e.target.selectionEnd;
    e.target.value=e.target.value.toUpperCase();
    e.target.setSelectionRange(st,en);
  });
  $('liveCodeInput').addEventListener('keydown',e=>{if(e.key==='Enter')joinRoom($('liveCodeInput').value);});
  $('liveCopyBtn').addEventListener('click',()=>{
    navigator.clipboard.writeText($('liveMyCode').textContent).then(()=>{
      const b=$('liveCopyBtn'),o=b.textContent;b.textContent='✅';setTimeout(()=>b.textContent=o,1500);
    });
  });
  $('liveLinkBtn').addEventListener('click',()=>{
    const s=sessions[currentPid];if(!s)return;
    navigator.clipboard.writeText(inviteLink(s)).then(()=>showToast(t('liveLinkCopied')));
  });
  $('liveStopBtn').addEventListener('click',()=>{
    if(!sessions[currentPid])return;
    if(!confirm(t('liveStopConfirm')))return;
    stopSharing(currentPid);
  });
  // Changement de pseudo : sauvegarde + toast de confirmation + annonce
  // à toutes les salles actives.
  function applyPseudo(raw){
    const v=setPseudo(raw);
    showToast(t('livePseudoSet',v));
    Object.values(sessions).forEach(s=>{
      if(!s.connId)return; // session pas encore connectée — le pseudo partira avec le prochain état
      const op={t:'op',id:opId(),kind:'hello',me:myId(s),who:v};
      s.seen.add(op.id);broadcast(s,op);
    });
    renderLivePanel();
    return v;
  }
  $('livePseudoInput').addEventListener('change',e=>{e.target.value=applyPseudo(e.target.value);});

  /* ── Modale pseudo (intégrée au site) — affichée à l'arrivée via un lien
        d'invitation, AVANT de rejoindre la salle. Valider (ou Entrée)
        enregistre le pseudo ; ✕ garde l'actuel. Dans les deux cas on
        poursuit la jonction. ── */
  let _pseudoNext=null;
  function askPseudo(next){
    _pseudoNext=next||null;
    $('pseudoModal-title').textContent=t('livePseudoTitle');
    $('pseudoModalTxt').textContent=t('livePseudoAsk');
    $('pseudoModalOk').textContent=t('livePseudoOk');
    $('pseudoModalInput').value=getPseudo();
    remClass($('pseudoModal'),'off');showBackdrop();
    setTimeout(()=>{const i=$('pseudoModalInput');i.focus();i.select();},80);
  }
  function closePseudoModal(apply){
    if(apply)applyPseudo($('pseudoModalInput').value);
    addClass($('pseudoModal'),'off');hideBackdrop();
    const next=_pseudoNext;_pseudoNext=null;
    if(next)next();
  }
  $('pseudoModalOk').addEventListener('click',()=>closePseudoModal(true));
  $('pseudoModalClose').addEventListener('click',()=>closePseudoModal(false));
  $('pseudoModalInput').addEventListener('keydown',e=>{if(e.key==='Enter')closePseudoModal(true);});

  // Lien d'invitation #live=SALLE-SECRET → modale pseudo, puis jonction
  // automatique. Le fragment est effacé aussitôt pour ne pas traîner
  // dans l'historique.
  function checkHashJoin(){
    const m=/^#live=([A-Z0-9]{4,8}-[A-Z0-9]{4,8})$/i.exec(location.hash||'');
    if(!m)return;
    history.replaceState(null,'',location.pathname+location.search);
    askPseudo(()=>{
      $('shareBtn').click();setLiveTab(true);
      joinRoom(m[1]);
    });
  }
  window.addEventListener('hashchange',checkHashJoin);
  // Cliquer sur le badge ouvre directement l'onglet Partage de la modale
  $('liveBadge').addEventListener('click',()=>{$('shareBtn').click();setLiveTab(true);});

  /* ── Reprise automatique des salles au démarrage ── */
  document.addEventListener('query-ready',()=>{
    const rooms=getRooms();
    let dirty=false;
    Object.keys(rooms).forEach(pid=>{
      if(!profiles[pid]){delete rooms[pid];dirty=true;return;}
      // Migration : marquer les profils liés créés avant l'ajout de liveRoom
      if(!profiles[pid].liveRoom)profiles[pid].liveRoom=rooms[pid].room;
      if(rooms[pid].paused)return; // partage arrêté par l'utilisateur — ne pas reprendre tout seul
      start(mkSession(pid,rooms[pid]));
    });
    if(dirty)saveRooms(rooms);
    checkHashJoin(); // arrivée via un lien d'invitation
    updateLiveUI();
  },{once:true});
})();

// Kick off
init().catch(console.error);

// Service worker : mode hors ligne. Les pages sont servies "réseau d'abord" (voir sw.js),
// donc l'enregistrer ne fige pas les visiteurs sur une ancienne version.
if('serviceWorker' in navigator&&location.protocol.startsWith('http')){
  window.addEventListener('load',()=>{navigator.serviceWorker.register('/sw.js').catch(()=>{});});
}
