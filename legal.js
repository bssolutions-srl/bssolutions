const legalTranslations = {
  en: {
    'site-title': 'BUSINESS SOFT SOLUTIONS S.R.L.',
    'header-h2': 'Company Details',
    'li-company': 'Company Name: Business Soft Solutions S.R.L.',
    'li-legal-form': 'Legal Form: Limited Liability Company (S.R.L.)',
    'li-registration': 'Registration Number: J2025036632003',
    'li-cui': 'Unique Registration Code (CUI): 51836133',
    'li-address': 'Registered Office: Str. Mircea cel Mare nr 134, Sebes, Alba',
    'li-representative': 'Legal Representative: Rareș Perta, Administrator',
    'li-capital': 'Share Capital: 200 RON',
    'footer-text': '© 2025 Business Soft Solutions. All rights reserved.'
  },
  ro: {
    'site-title': 'BUSINESS SOFT SOLUTIONS S.R.L.',
    'header-h2': 'Date firmă',
    'li-company': 'Denumire firmă: Business Soft Solutions S.R.L.',
    'li-legal-form': 'Forma juridică: Societate cu Răspundere Limitată (S.R.L.)',
    'li-registration': 'Număr înregistrare: J2025036632003',
    'li-cui': 'Cod Unic de Înregistrare (CUI): 51836133',
    'li-address': 'Sediul social: Str. Mircea cel Mare nr 134, Sebes, Alba',
    'li-representative': 'Reprezentant legal: Rareș Perta, Administrator',
    'li-capital': 'Capital social: 200 RON',
    'footer-text': '© 2025 Business Soft Solutions. Toate drepturile rezervate.'
  },
  de: {
    'site-title': 'BUSINESS SOFT SOLUTIONS S.R.L.',
    'header-h2': 'Firmendaten',
    'li-company': 'Firmenname: Business Soft Solutions S.R.L.',
    'li-legal-form': 'Rechtsform: Gesellschaft mit beschränkter Haftung (S.R.L.)',
    'li-registration': 'Registrierungsnummer: J2025036632003',
    'li-cui': 'Einmaliger Registrierungscode (CUI): 51836133',
    'li-address': 'Sitz: Str. Mircea cel Mare nr 134, Sebes, Alba',
    'li-representative': 'Rechtlicher Vertreter: Rareș Perta, Geschäftsführer',
    'li-capital': 'Stammkapital: 200 RON',
    'footer-text': '© 2025 Business Soft Solutions. Alle Rechte vorbehalten.'
  }
};
function setLegalLanguage(lang) {
  const langData = legalTranslations[lang];
  if (!langData) return;

  for (const id in langData) {
    const el = document.getElementById(id);
    if (el) el.innerText = langData[id];
  }
}

document.querySelectorAll('.language-switcher img').forEach(img => {
  img.addEventListener('click', () => {
    const lang = img.dataset.lang;
    setLegalLanguage(lang);
    localStorage.setItem("ln", lang);
  });
});

if(localStorage.getItem("ln")) {
  setLegalLanguage(localStorage.getItem("ln"));
} else {
  setLegalLanguage("ro");  // implicit română, schimbi după preferință
}