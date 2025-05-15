// excome-lang.js
const translations = {
  en: {
    'title-track': 'Manage Your Expenses',
    'desc-track': 'Easily add your income and expenses. The app will automatically organize them by month and time period, giving you a clear, modern, and intuitive interface for smart budget control.',

    'title-receipt': 'Add a Receipt in Seconds',
    'desc-receipt': 'Take a photo of the receipt or choose one from your gallery. The app will automatically recognize key details like what you bought, quantity, and price. Everything is added instantly to your expense list — no manual input needed.',

    'title-reports': 'Smart Statistics & Visual Reports',
    'desc-reports': 'Apply filters, analyze trends, and understand where your money goes. Excome automatically categorizes each transaction, giving you clear graphs and intuitive reports to support informed financial decisions.',
  },

  ro: {
    'title-track': 'Gestionează cheltuielile',
    'desc-track': 'Adaugă cu ușurință veniturile și cheltuielile tale, iar aplicația le va organiza automat în funcție de lună și perioade de timp. Vizualizează totul într-o interfață clară, modernă și intuitivă, concepută pentru a te ajuta să-ți gestionezi bugetul fără efort.',

    'title-receipt': 'Adaugă Bonul în Câteva Secunde',
    'desc-receipt': 'Fă o poză bonului sau alege una din galerie, iar aplicația va recunoaște automat informațiile importante: ce ai cumpărat, cantitate și preț. Toate datele sunt adăugate instant în lista ta de cheltuieli, fără să fie nevoie să completezi manual.',

    'title-reports': 'Statistici Inteligente și Rapoarte Vizuale',
    'desc-reports': 'Aplică filtre, analizează tendințele și descoperă unde se duc banii tăi. Excome clasifică automat fiecare tranzacție în categorii relevante, oferindu-ți grafice clare și rapoarte intuitive, concepute pentru decizii financiare informate.',
  },

  de: {
    'title-track': 'Verwalte deine Ausgaben',
    'desc-track': 'Füge ganz einfach deine Einnahmen und Ausgaben hinzu. Die App organisiert sie automatisch nach Monat und Zeitraum, in einer klaren, modernen und benutzerfreundlichen Oberfläche zur besseren Budgetkontrolle.',

    'title-receipt': 'Beleg in Sekunden hinzufügen',
    'desc-receipt': 'Mach ein Foto vom Beleg oder wähle eines aus der Galerie. Die App erkennt automatisch die wichtigsten Informationen – was du gekauft hast, Menge und Preis – und fügt alles sofort zur Ausgabenliste hinzu.',

    'title-reports': 'Intelligente Statistiken & Visuelle Berichte',
    'desc-reports': 'Verwende Filter, analysiere Trends und erfahre, wohin dein Geld fließt. Excome kategorisiert automatisch jede Transaktion und bietet dir klare Diagramme und intuitive Berichte für fundierte finanzielle Entscheidungen.',
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