// excome-lang.js
const translations = {
  en: {
    'title-atestat': 'Computer Science Certificate',
    'desc-atestat': 'Web projects developed as part of the computer science certificate, aimed at building an informational website using HTML and CSS.',

    'title-structura': 'Front-End Development',
    'desc-structura': 'The website structure is logically organized, with clearly defined menus and text content, and visual elements chosen to match the project’s theme. These projects reflect an understanding of the fundamental principles of front-end development.',
    },

  ro: {
    'title-atestat': 'Atestat informatică',
    'desc-atestat': 'Proiecte web realizate în cadrul atestatului de informatică, având ca scop dezvoltarea unui site informativ folosind HTML și CSS.',

    'title-structura': 'Dezvoltare front-end',
    'desc-structura': 'Structura site-urilor este organizată logic, cu meniuri și conținut text bine delimitat, iar elementele vizuale au fost alese pentru a susține tematica abordată. Proiectele reflectă înțelegerea principiilor de bază în dezvoltarea front-end.',
  },

  de: {
    'title-atestat': 'Informatik-Abschlussprojekt',
    'desc-atestat': 'Webprojekte, die im Rahmen des Informatik-Abschlussprojekts erstellt wurden, mit dem Ziel, eine Informationswebsite mit HTML und CSS zu entwickeln.',

    'title-structura': 'Front-End-Entwicklung',
    'desc-structura': 'Die Struktur der Websites ist logisch aufgebaut, mit klar gegliederten Menüs und Textinhalten. Die visuellen Elemente wurden passend zum jeweiligen Thema ausgewählt. Die Projekte zeigen ein grundlegendes Verständnis der Front-End-Entwicklung.',
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