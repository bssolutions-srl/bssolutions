const translations = {
  en: {
    'logos_title': 'Gallery of Digital Symbols',
    'logos_description': 'A space dedicated to design that speaks. Diverse styles, united by clarity and impact.',
  },

  ro: {
    'logos_title': 'Galeria simbolurilor digitale',
    'logos_description': 'Un spațiu dedicat designului care vorbește. Stiluri diverse, dar unite prin claritate și impact.',
  },

  de: {
    'logos_title': 'Galerie digitaler Symbole',
    'logos_description': 'Ein Raum für Design, das spricht. Vielfältige Stile, vereint durch Klarheit und Wirkung.',
  }
};

function setLanguage(lang) {
  const langData = translations[lang];
  if (!langData) return;

  for (const id in langData) {
    const el = document.getElementById(id);
    if (el) el.innerText = langData[id];
  }
}

document.querySelectorAll('.language-switcher img').forEach(img => {
  img.addEventListener('click', () => {
    const lang = img.dataset.lang;
    setLanguage(lang);
    localStorage.setItem("ln",lang)
  });
});


if(localStorage.getItem("ln")) {
  setLanguage(localStorage.getItem("ln"))
} else {
  setLanguage("en")
}