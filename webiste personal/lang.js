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
      "site-title": "Business Soft Solutions S.R.L.",
      "nav-about": "About",
      "nav-services": "Services",
      "nav-portfolio": "Portfolio",
      "nav-contact": "Contact",
      "about-title": "About Me",
      "about-text": "I'm Rareș, a freelance developer passionate about creating modern, fast websites and apps for clients. I offer reliable and tailored solutions.",
      "services-title": "Services",
      "srv1-title": "Custom Websites",
      "srv1-text": "Responsive websites built with HTML, CSS, JS or React.",
      "srv2-title": "Performance Optimization",
      "srv2-text": "Speed improvements, SEO tuning and UX enhancements.",
      "srv3-title": "Automations & APIs",
      "srv3-text": "API integrations or microservices with Node.js or Python.",
      "portfolio-title": "Previous Projects",
      "proj1-title": "Transport Company Site",
      "proj1-text": "Responsive website with a price estimation form.",
      "proj2-title": "Client Dashboard",
      "proj2-text": "React dashboard app connected to Flask backend.",
      "proj3-title": "SaaS Landing Page",
      "proj3-text": "High-performance landing page for a digital product.",
      "contact-title": "Contact"
    },
    ro: {
      "site-title": "Business Soft Solutions S.R.L.",
      "nav-about": "Despre",
      "nav-services": "Servicii",
      "nav-portfolio": "Portofoliu",
      "nav-contact": "Contact",
      "about-title": "Despre mine",
      "about-text": "Sunt Rareș, un freelancer pasionat de dezvoltare web și soluții personalizate. Ofer servicii rapide și adaptate nevoilor tale.",
      "services-title": "Servicii oferite",
      "srv1-title": "Website-uri personalizate",
      "srv1-text": "Site-uri responsive cu HTML, CSS, JS sau React.",
      "srv2-title": "Optimizare performanță",
      "srv2-text": "Reducere timp de încărcare, SEO și UX îmbunătățit.",
      "srv3-title": "Automatizări & API-uri",
      "srv3-text": "Integrare API-uri sau microservicii cu Node.js / Python.",
      "portfolio-title": "Proiecte anterioare",
      "proj1-title": "Site firmă transport",
      "proj1-text": "Website cu formular estimare preț.",
      "proj2-title": "Dashboard clienți",
      "proj2-text": "Aplicație React conectată la backend Flask.",
      "proj3-title": "Landing page SaaS",
      "proj3-text": "Landing performant pentru produs digital.",
      "contact-title": "Contact"
    },
    de: {
      "site-title": "Business Soft Solutions S.R.L.",
      "nav-about": "Über mich",
      "nav-services": "Dienstleistungen",
      "nav-portfolio": "Projekte",
      "nav-contact": "Kontakt",
      "about-title": "Über mich",
      "about-text": "Ich bin Rareș, ein Freelancer mit Fokus auf Webentwicklung. Ich biete maßgeschneiderte, schnelle Lösungen für Kunden.",
      "services-title": "Angebotene Dienstleistungen",
      "srv1-title": "Individuelle Webseiten",
      "srv1-text": "Responsive Webseiten mit HTML, CSS, JS oder React.",
      "srv2-title": "Performance Optimierung",
      "srv2-text": "Ladezeiten reduzieren, SEO verbessern, UX optimieren.",
      "srv3-title": "Automatisierungen & APIs",
      "srv3-text": "API-Integration oder Microservices mit Node.js/Python.",
      "portfolio-title": "Frühere Projekte",
      "proj1-title": "Transportfirma Webseite",
      "proj1-text": "Responsive Seite mit Preisrechner.",
      "proj2-title": "Kunden-Dashboard",
      "proj2-text": "React App mit Flask-Backend.",
      "proj3-title": "SaaS Landingpage",
      "proj3-text": "Performante Landingpage für ein digitales Produkt.",
      "contact-title": "Kontakt"
    }
  };
  
  document.querySelectorAll('.language-switcher img').forEach(img => {
    img.addEventListener('click', () => {
      const selectedLang = img.getAttribute('data-lang');
      const keys = translations[selectedLang];
      for (let key in keys) {
        const el = document.getElementById(key);
        if (el) el.textContent = keys[key];
      }
    });
  });
  