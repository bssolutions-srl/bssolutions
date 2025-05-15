// excome-lang.js
const translations = {
  en: {
    'title-broscuta': 'The Math Froggy',
    'desc-broscuta': 'Choose a difficulty level – easy, medium, or hard – and start in the center of the matrix with your clever little frog. Your task? Jump from number to operator and back to form the correct result. Every move matters!',
    'link_broscuta':'Play now!',

    'title-jucat': 'Spiel-Highlights',
    'desc-jucat-1': '<strong>Dynamic Matrix:</strong> Automatically generated, different every time.',
    'desc-jucat-2': '<strong>Guaranteed Path:</strong> There’s always a correct solution – can you find it?</li>',
    'desc-jucat-3': '<strong>Smart Scoring:</strong> The harder the level, the more points you earn.',
    'desc-jucat-4': '<strong>Retries?</strong> Sure, but with score penalties.',
  
    'title-clasament':"Local Leaderboard",
    'desc-clasament':"When you think you've achieved a good score, save it to the leaderboard so you can compare it with the scores of other players on the same device."
  },

  ro: {
    'title-broscuta': 'Broscuta Matematiciana',
    'desc-broscuta': 'Proiecte web realizate în cadrul broscutaului de informatică, având ca scop dezvoltarea unui site informativ folosind HTML și CSS.',
    'link_broscuta': 'Joaca si tu!',

    'title-jucat': 'Gameplay Highlights',
    'desc-jucat-1': '<strong>Matrice dinamică:</strong> Generată automat, diferită de fiecare dată.',
    'desc-jucat-2': '<strong>Traseu garantat:</strong> Există mereu o soluție corectă – o poți găsi?</li>',
    'desc-jucat-3': '<strong>Scor inteligent:</strong> Cu cât nivelul e mai greu, cu atât câștigi mai multe puncte.',
    'desc-jucat-4': '<strong>Reîncercări?</strong> Sigur, dar cu penalizări la scor.',
  
    'title-clasament': "Clasament Local",
    'desc-clasament': "Când consideri că ai obținut un scor bun, salvează-l în clasament pentru a-l putea compara cu scorurile altor jucători de pe același dispozitiv."
    },

  de: {
    'title-broscuta': 'Die Mathe-Fröschlein',
    'desc-broscuta': 'Wähle einen Schwierigkeitsgrad – leicht, mittel oder schwer – und starte mit deinem schlauen Fröschlein in der Mitte der Matrix. Deine Aufgabe? Springe von Zahl zu Rechenzeichen und zurück, um das richtige Ergebnis zu bilden. Jeder Sprung zählt!',
    'link_broscuta': 'Spiel mit!',

    'title-jucat': 'Gameplay Highlights',
    'desc-jucat-1': '<strong>Dynamische Matrix:</strong> Wird automatisch generiert und ist jedes Mal anders.',
    'desc-jucat-2': '<strong>Garantierter Pfad:</strong> Es gibt immer eine richtige Lösung – kannst du sie finden?',
    'desc-jucat-3': '<strong>Intelligente Punktevergabe:</strong> Je schwerer das Level, desto mehr Punkte bekommst du.',
    'desc-jucat-4': '<strong>Erneut versuchen?</strong> Klar, aber mit Punkteabzug.',
    
    'title-clasament':"Lokale Bestenliste",
    "desc-clasament":"Wenn du denkst, dass du eine gute Punktzahl erreicht hast, speichere sie in der Bestenliste, um sie mit den Ergebnissen anderer Spieler auf demselben Gerät zu vergleichen."
    }
};

function setLanguage(lang) {
  const langData = translations[lang];
  if (!langData) return;

  for (const id in langData) {
    const el = document.getElementById(id);
    if (el) el.innerHTML = langData[id];
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