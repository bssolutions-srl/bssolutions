// excome-lang.js
const translations = {
  en: {
    'desc-dodge': 'A desktop game in which the objective is to reach the finish line while skillfully avoiding various obstacles. The game features 15 levels with gradually increasing difficulty.',

    'desc-ball': 'A game focused on balance and platforming, where the objective is to reach the finish line without falling off the platform.',
    },

  ro: {
    'desc-dodge': 'Un joc pentru desktop în care obiectivul este să ajungi la linia de sosire, evitând cu abilitate diverse obstacole. Jocul include 15 niveluri cu un grad de dificultate progresiv.',

    'desc-ball': 'Un joc axat pe echilibru și platforming, în care obiectivul este să ajungi la linia de sosire fără să cazi de pe platformă.',
  },

  de: {
    'desc-dodge': 'Ein Desktop-Spiel, bei dem das Ziel darin besteht, die Ziellinie zu erreichen, während man geschickt verschiedenen Hindernissen ausweicht. Das Spiel umfasst 15 Level mit einem zunehmend höheren Schwierigkeitsgrad.',

    'desc-ball': 'Ein Spiel mit Schwerpunkt auf Gleichgewicht und Plattformmechanik, bei dem das Ziel ist, die Ziellinie zu erreichen, ohne von der Plattform zu fallen.',
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