document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const topOffset = document.querySelector('header').offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - topOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

const translations = {
  en: {
    "nav-about": "About Me",
    "nav-services": "Services",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",
    "services-title": "Services",
    "srv1-title": "Custom Websites",
    "srv1-text": "Responsive presentation websites built with HTML, CSS, JS.",
    "srv2-title": "Logo Design",
    "srv2-text": "Logos and icons designed for your business or website",
    "srv3-title": "Automations",
    "srv3-text": "Designed specifically at your request, guaranteed to get you rid of boring tasks",
    "srv4-title": "Web & Mobile Apps",
    "srv4-text": "Develop your own idea with an app for all platforms",
    "srv5-title": "Data Manipulation",
    "srv5-text": "Whether we're talking about Excel files or SQL databases, we can help you store your data",
    "srv6-title": "Other",
    "srv6-text": "Algorithms, project sections you need help with and... just ask and we might help you",
    "about-title": "About Me",
    "about-text": "I'm Rareș, a freelance developer passionate about creating modern, fast websites and apps for clients. I offer reliable and tailored solutions.",
    "portfolio-title": "Previous Projects - Click on the cards for more details",
    "proj1-title": "Excome",
    "proj1-text": "Take control of your money — a smart mobile and web app for tracking your expenses, income, and budgets.",
    "proj2-title": "C.S. Certificates",
    "proj2-text": "Custom static websites developed on demand as part of the 12th-grade computer science certificate.",
    "proj3-title": "Logos",
    "proj3-text": "Discover a collection of logos crafted with care and creativity. Explore my projects from various fields.",
    "proj4-title":"The Mathematician Frog",
    "proj4-text":"An educational web game designed for primary school students, aimed at helping them learn mathematics in a fun and interactive way.",
    "contact-title": "Contact",
    "about-title": "About Me",
    "about-text": "Hi, I'm Rareș! I'm a passionate freelance developer with a strong focus on delivering clean, high-performance websites and applications. Why should we work together? Well...",
    "about-list-1":"Expertise in web technologies like HTML, CSS, JS, React, and Node.js",
    "about-list-2":"Creating responsive, user-friendly websites and apps",
    "about-list-3":"Helping businesses and individuals bring their ideas to life online",
    "about-list-4":"Committed to providing fast, efficient, and tailored solutions",
    "about-list-5":"Always focused on performance, scalability, and user experience",
    "about-text-2": "If you're looking for a reliable developer to bring your project to life, I’d love to work with you!",
    "find_out_more": "Find out more"
  },
  ro: {
    "nav-about": "Despre mine",
    "nav-services": "Servicii",
    "nav-portfolio": "Portofoliu",
    "nav-contact": "Contact",
    "services-title": "Servicii",
    "srv1-title": "Site-uri Personalizate",
    "srv1-text": "Site-uri de prezentare responsive construite cu HTML, CSS, JS.",
    "srv2-title": "Design Logo",
    "srv2-text": "Logouri și pictograme create pentru afacerea sau site-ul tău",
    "srv3-title": "Automatizări",
    "srv3-text": "Făcute la cererea ta, garantat te scapă de task-uri plictisitoare",
    "srv4-title": "Aplicații Web & Mobile",
    "srv4-text": "Dezvoltă-ți propria idee cu o aplicație pentru toate platformele",
    "srv5-title": "Manipulare Date",
    "srv5-text": "Fie că vorbim de fișiere Excel sau baze de date SQL, te ajutăm să-ți gestionezi datele",
    "srv6-title": "Altele",
    "srv6-text": "Algoritmi, secțiuni de proiect la care ai nevoie de ajutor... spune-ne și noi te ajutam",
    "about-title": "Despre Mine",
    "about-text": "Sunt Rareș, un dezvoltator freelancer pasionat de realizarea de site-uri și aplicații moderne și rapide pentru clienți. Ofer soluții fiabile și adaptate.",
    "portfolio-title": "Proiecte anterioare – Fă clic pe carduri pentru mai multe detalii",
    "proj1-title": "Excome",
    "proj1-text": "Preia controlul asupra banilor tăi — o aplicație mobilă și web pentru urmărirea cheltuielilor, veniturilor și bugetelor tale.",
    "proj2-title": "Atestate Informatica",
    "proj2-text": "Site-uri statice realizate la comanda in cadrul atestatului de informatica din clasa a XII-a.",
    "proj3-title": "Logouri",
    "proj3-text": "Descoperă o colecție de logouri create cu grijă și creativitate. Vezi proiectele mele din diferite domenii.",
    "proj4-title":"Broscuta Matematiciana",
    "proj4-text":"Un joc web educativ creat pentru elevii din învățământul primar, conceput să îi ajute să învețe matematica într-un mod distractiv.",
    "contact-title": "Contact",
    "about-title": "Despre mine",
    "about-text": "Salut, sunt Rareș! Sunt un dezvoltator freelance pasionat, cu un accent puternic pe livrarea de site-uri și aplicații curate, de înaltă performanță. De ce ar trebui să lucrăm împreună? Ei bine...",
    "about-list-1":"Expertiză în tehnologii web precum HTML, CSS, JS, React și Node.js",
    "about-list-2":"Crearea de site-uri și aplicații responsive și ușor de utilizat",
    "about-list-3":"Ajut business-urile și persoanele să își aducă ideile la viață online",
    "about-list-4":"Mă angajez să ofer soluții rapide, eficiente și personalizate",
    "about-list-5":"Focus constant pe performanță, scalabilitate și experiență a utilizatorului",
    "about-text-2": "Dacă ești în căutarea unui dezvoltator de încredere pentru a-ți duce proiectul la bun sfârșit, aș fi încântat să lucrăm împreună!",
    "find_out_more":"Afla mai multe"
  },
  de: {
    "nav-about": "Über mich",
    "nav-services": "Dienstleistungen",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Kontakt",
    "services-title": "Dienstleistungen",
    "srv1-title": "Individuelle Websites",
    "srv1-text": "Responsive Präsentationswebsites mit HTML, CSS, JS.",
    "srv2-title": "Logo-Design",
    "srv2-text": "Logos und Icons für dein Unternehmen oder deine Website",
    "srv3-title": "Automatisierungen",
    "srv3-text": "Speziell auf Anfrage gestaltet, um dich von langweiligen Aufgaben zu befreien",
    "srv4-title": "Web- & Mobile-Apps",
    "srv4-text": "Entwickle deine eigene Idee mit einer App für alle Plattformen",
    "srv5-title": "Datenverarbeitung",
    "srv5-text": "Ob Excel-Dateien oder SQL-Datenbanken – wir helfen dir, deine Daten zu verwalten",
    "srv6-title": "Sonstiges",
    "srv6-text": "Algorithmen, Projektteile, bei denen du Hilfe brauchst – frag einfach nach!",
    "about-title": "Über mich",
    "about-text": "Ich bin Rareș, ein freiberuflicher Entwickler, der sich für moderne und schnelle Websites und Apps begeistert. Ich biete zuverlässige und maßgeschneiderte Lösungen.",
    "portfolio-title": "Frühere Projekte – Klicke auf die Karten für mehr Details",
    "proj1-title": "Excome",
    "proj1-text": "Übernimm die Kontrolle über dein Geld — eine mobile und Web-App zur Verfolgung deiner Ausgaben, Einkünfte und Budgets.",
    "proj2-title": "Informatik-Zertifikatsprojekte",
    "proj2-text": "Statische Websites auf Anfrage, entwickelt im Rahmen des Informatik-Abschlussprojekts der 12. Klasse.",
    "proj3-title": "Logos",
    "proj3-text": "Entdecke eine Sammlung von Logos, die mit Sorgfalt und Kreativität gestaltet wurden. Sieh dir meine Projekte aus verschiedenen Bereichen an.",
    "proj4-title": "Die Mathe-Fröschlein",
    "proj4-text":"Ein edukatives Online-Spiel für Grundschulkinder, das ihnen hilft, Mathematik auf spielerische und interaktive Weise zu lernen.",
    "contact-title": "Kontakt",
    "about-title": "Über mich",
    "about-text": "Hallo, ich bin Rareș! Ich bin ein leidenschaftlicher freiberuflicher Entwickler mit starkem Fokus auf die Lieferung von sauberen, leistungsstarken Websites und Anwendungen. Warum sollten wir zusammenarbeiten? Nun...",
    "about-list-1":"Expertise in Web-Technologien wie HTML, CSS, JS, React und Node.js",
    "about-list-2":"Erstellung von responsiven, benutzerfreundlichen Websites und Apps",
    "about-list-3":"Hilfe für Unternehmen und Einzelpersonen, ihre Ideen online zum Leben zu erwecken",
    "about-list-4":"Engagement für schnelle, effiziente und maßgeschneiderte Lösungen",
    "about-list-5":"Immer fokussiert auf Leistung, Skalierbarkeit und Benutzererfahrung",
    "about-text-2": "Wenn du einen zuverlässigen Entwickler suchst, der dein Projekt zum Leben erweckt, würde ich mich freuen, mit dir zusammenzuarbeiten!",
    "find_out_more": "Mehr erfahren"
  }
};

document.querySelectorAll('.language-switcher img').forEach(img => {
  img.addEventListener('click', () => {
    const lang = img.dataset.lang;
    changeLanguage(lang);
  });
});

function changeLanguage(lang) {
  const texts = translations[lang];
  for (const id in texts) {
    if(id=="find_out_more") {
      document.querySelectorAll(`.${id}`).forEach(element => {
        element.textContent=texts[id]
      })
    }
    else {
      const element = document.getElementById(id);
      if (element) element.textContent = texts[id];
    }
    localStorage.setItem("ln",lang)
  }
}

// Setează limba implicită la engleză
if(localStorage.getItem("ln")) {
  changeLanguage(localStorage.getItem("ln"))
}
else {
  changeLanguage("en")
}