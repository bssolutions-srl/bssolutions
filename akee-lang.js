const translations = {
  en: {
    'title-akee-main': 'Akee\'s Website',
    'desc-akee-main': 'This website was specially created for a young and talented music producer, providing him with a modern and personalized platform to showcase his music, projects, and collaborations.',

    'title-spotify': 'Spotify Integration',
    'desc-spotify': 'Spotify integration allows visitors to listen to Akee’s tracks directly and connect effortlessly with his music profile.',

    'title-beats': 'Beatstars Integration',
    'desc-beats': 'BeatStars integration gives visitors direct access to Akee’s beats – ready to listen, purchase, or license – all without leaving the site.',
  },

  ro: {
    'title-akee-main': 'Akee\'s Website',
    'desc-akee-main': 'Acest site web a fost creat special pentru un tânăr producător muzical talentat, oferindu-i o platformă modernă și personalizată pentru a-și prezenta muzica, proiectele și colaborările.',

    'title-spotify': 'Integrare Spotify',
    'desc-spotify': 'Integrarea Spotify permite ascultarea directă a pieselor lui Akee și conectarea ușoară cu profilul său muzical.',

    'title-beats': 'Integrare Beatstars',
    'desc-beats': 'Integrarea BeatStars oferă vizitatorilor acces direct la beat-urile lui Akee, gata de ascultat, cumpărat sau licențiat. Totul, fără a părăsi site-ul.',
  },

  de: {
    'title-akee-main': 'Akee\'s Website',
    'desc-akee-main': 'Diese Website wurde speziell für einen jungen, talentierten Musikproduzenten entwickelt. Sie bietet ihm eine moderne und personalisierte Plattform, um seine Musik, Projekte und Kooperationen zu präsentieren.',

    'title-spotify': 'Spotify-Integration',
    'desc-spotify': 'Die Spotify-Integration ermöglicht es, Akees Tracks direkt anzuhören und sich nahtlos mit seinem Musikprofil zu verbinden.',

    'title-beats': 'Beatstars-Integration',
    'desc-beats': 'Die BeatStars-Integration ermöglicht den Besuchern den direkten Zugang zu Akees Beats – zum Anhören, Kaufen oder Lizensieren – alles bequem über die Webseite.',
  },
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