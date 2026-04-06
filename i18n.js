/* ═══════════════════════════════════════════════
   Query PWA — i18n.js
═══════════════════════════════════════════════ */

const TRANSLATIONS = {
  en: {
    // Sidebar
    noProfile:          'No profiles yet — import one via P2P.',
    deleteTitle:        'Delete',
    deleteConfirm:      name => `Delete profile "${name}" and all its cards?`,
    profileDeleted:     name => `🗑 Profile "${name}" deleted`,
    cardCount:          n => `${n} card${n !== 1 ? 's' : ''}`,

    // Cards
    noProfileSel:       'No profile selected',
    noProfileSub:       'Choose a profile in the <strong>Profiles</strong> tab.',
    resultCount:        (n, q) => `${n} result${n !== 1 ? 's' : ''} for "${q}"`,
    noResult:           'No results',
    emptyProfile:       'Empty profile',
    noResultSub:        q => `No card matches "${q}".`,
    emptyProfileSub:    'This profile has no cards yet.',
    pinned:             'Pinned',
    copy:               'Copy',

    // P2P / modal
    profileImported:    name => `✅ Profile "${name}" imported!`,
    profileAdded:       name => `✅ Profile "${name}" added`,
    p2pConnecting:      'Connecting to P2P server…',
    p2pConnectingExt:   'Connecting to extension…',
    p2pTimeout:         'Timeout — check the code and make sure the extension is waiting.',
    p2pDataError:       'Error processing data.',
    p2pConnFailed:      'Connection failed. Is the code correct?',
    p2pNotFound:        'Extension not found. Make sure it is waiting.',
    p2pNetError:        'Network error: ',
    p2pCodeTooShort:    'Code too short (4 characters minimum).',
    defaultProfileName: 'Imported profile',

    // import.html UI
    searchPlaceholder:  'Search…',
    tabProfiles:        'Profiles',
    tabImport:          'Import',
    welcomeDesc:        'Receive your profiles via P2P directly from the app.',
    codeLabel:          'Import code',
    receiveBtnLabel:    'Receive profile',
    importModalTitle:   'Import a profile',
    importInstructions: 'Extension Query → P2P Share → Generate code → enter the code here.',
    backToApp:          '← Back to app',
  },

  fr: {
    // Sidebar
    noProfile:          'Aucun profil — importez-en un via P2P.',
    deleteTitle:        'Supprimer',
    deleteConfirm:      name => `Supprimer le profil « ${name} » et toutes ses fiches ?`,
    profileDeleted:     name => `🗑 Profil « ${name} » supprimé`,
    cardCount:          n => `${n} fiche${n !== 1 ? 's' : ''}`,

    // Cards
    noProfileSel:       'Aucun profil sélectionné',
    noProfileSub:       "Choisissez un profil dans l'onglet <strong>Profils</strong>.",
    resultCount:        (n, q) => `${n} résultat${n !== 1 ? 's' : ''} pour « ${q} »`,
    noResult:           'Aucun résultat',
    emptyProfile:       'Profil vide',
    noResultSub:        q => `Aucune fiche ne correspond à « ${q} ».`,
    emptyProfileSub:    'Ce profil ne contient encore aucune fiche.',
    pinned:             'Épinglé',
    copy:               'Copier',

    // P2P / modal
    profileImported:    name => `✅ Profil « ${name} » importé !`,
    profileAdded:       name => `✅ Profil « ${name} » ajouté`,
    p2pConnecting:      'Connexion au serveur P2P…',
    p2pConnectingExt:   "Connexion à l'extension…",
    p2pTimeout:         "Délai dépassé — vérifiez le code et que l'extension est en attente.",
    p2pDataError:       'Erreur lors du traitement des données.',
    p2pConnFailed:      'Connexion échouée — le code est-il correct ?',
    p2pNotFound:        "Extension introuvable — assurez-vous qu'elle est en attente.",
    p2pNetError:        'Erreur réseau : ',
    p2pCodeTooShort:    'Code trop court (4 caractères minimum).',
    defaultProfileName: 'Profil importé',

    // import.html UI
    searchPlaceholder:  'Rechercher…',
    tabProfiles:        'Profils',
    tabImport:          'Importer',
    welcomeDesc:        "Recevez vos profils en P2P directement depuis l'application.",
    codeLabel:          "Code d'import",
    receiveBtnLabel:    'Recevoir le profil',
    importModalTitle:   'Importer un profil',
    importInstructions: 'Extension Query → Partage P2P → Générer le code → entrez le code ici.',
    backToApp:          '← Retour à l\'app',
  },
};

/* ── Detect language ───────────────────────── */
let _lang = (navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en';

function t(key, ...args) {
  const val = TRANSLATIONS[_lang]?.[key] ?? TRANSLATIONS['en']?.[key];
  if (typeof val === 'function') return val(...args);
  return val ?? key;
}

function setLang(lang) {
  _lang = lang;
  applyTranslations();
}

/* ── Apply to DOM ──────────────────────────── */
function applyTranslations() {
  // Search placeholder
  const search = document.getElementById('search');
  if (search) search.placeholder = t('searchPlaceholder');

  // Tab labels & sidebar section
  const tabProfilesEl = document.getElementById('tab-profiles-label');
  if (tabProfilesEl) tabProfilesEl.textContent = t('tabProfiles');
  const sbProfilesEl = document.getElementById('sb-profiles-label');
  if (sbProfilesEl) sbProfilesEl.textContent = t('tabProfiles');
  const tabImportEl = document.getElementById('tab-import-label');
  if (tabImportEl) tabImportEl.textContent = t('tabImport');

  // Welcome screen
  const welcomeDescEl = document.getElementById('welcome-desc');
  if (welcomeDescEl) welcomeDescEl.textContent = t('welcomeDesc');
  const codeLabelEl = document.getElementById('code-label');
  if (codeLabelEl) codeLabelEl.textContent = t('codeLabel');

  // Receive buttons
  document.querySelectorAll('.recv-btn-label').forEach(el => {
    el.textContent = t('receiveBtnLabel');
  });

  // Import modal
  const importTitleEl = document.getElementById('import-modal-title');
  if (importTitleEl) importTitleEl.textContent = t('importModalTitle');
  const importInstrEl = document.getElementById('import-instructions');
  if (importInstrEl) importInstrEl.textContent = t('importInstructions');

  // Back to app link
  const backEl = document.getElementById('w-back');
  if (backEl) {
    const span = backEl.querySelector('span');
    if (span) span.textContent = t('backToApp');
  }
}

document.addEventListener('DOMContentLoaded', applyTranslations);
