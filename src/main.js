import './styles.css';
import logoUrl from '../logo.png';

const translations = {
  fr: {
    nav: ['Accueil', 'Notre histoire', 'Produits', 'Services', 'Contact'],
    eyebrow: 'L’eau, source de vie',
    heroTitle: 'Une eau pure, pensée pour la vraie vie.',
    heroText: 'STREAMZ rend l’eau potable de qualité accessible aux foyers, aux entreprises et aux communautés sud-africaines.',
    heroCta: 'Voir notre gamme',
    heroAlt: 'Bouteille d’eau STREAMZ',
    statOne: 'Fondée en', statOneValue: '2023',
    statTwo: 'Contrôle qualité', statTwoValue: 'SANS 241',
    statThree: 'Pour aujourd’hui', statThreeValue: 'Pour demain',
    missionLabel: 'Notre raison d’être',
    missionTitle: 'La confiance, goutte après goutte.',
    missionText: 'Nous fournissons des solutions d’eau fiables, rafraîchissantes et accessibles. Notre travail associe exigence de qualité, service humain et respect de la ressource la plus précieuse de notre planète.',
    principles: [
      ['01', 'Qualité assurée', 'Une eau contrôlée par des laboratoires accrédités selon les exigences SANS 241.'],
      ['02', 'Service attentif', 'Une équipe disponible pour vous accompagner dans chaque besoin.'],
      ['03', 'Impact durable', 'Des pratiques pensées pour préserver l’eau et les communautés que nous servons.']
    ],
    storyKicker: 'Notre histoire', storyTitle: 'Une vision simple. Une ambition essentielle.',
    storyText: 'Fondée en 2023 par Water Street NRG, STREAMZ est née d’une conviction: une eau de haute qualité doit pouvoir accompagner chaque moment de la vie. De l’hydratation quotidienne aux besoins professionnels, nous construisons une marque fiable et proche de ses clients.',
    storyCta: 'Parler à notre équipe',
    rangeKicker: 'La gamme STREAMZ', rangeTitle: 'Pureté et commodité, au même endroit.',
    products: [
      ['Eau purifiée', 'Une eau cristalline pour chaque journée.', 'À partir de R6.00'],
      ['Jus', 'Des recettes à base d’eau purifiée, de 250 ml à 5 L.', 'Formats variés'],
      ['Distributeurs', 'Des solutions pour les maisons, bureaux et entreprises.', 'Sur demande'],
      ['Filtration', 'Des systèmes avancés et un réseau de prestataires fiables.', 'Projet personnalisé']
    ],
    menuKicker: 'Tarifs indicatifs', menuTitle: 'Le menu STREAMZ', menuNote: 'Prix en rands sud-africains (ZAR). Contactez-nous pour les disponibilités et livraisons.',
    menu: [['Eau 500 ml', 'R6.00'], ['Pack de 6 x 500 ml', 'R33.00'], ['Pack de 12 x 500 ml', 'R66.00'], ['Eau 1,5 L', 'R12.00'], ['Bouteille vide 5 L', 'R20.00'], ['Bouteille vide 10 L', 'R38.00'], ['Bidon 18,9 L', 'R121.00'], ['Bidon avec poignées 10 L', 'R99.00'], ['Bidon carré avec robinet 25 L', 'R275.00'], ['Robinet', 'R35.00']],
    servicesKicker: 'Au-delà de l’eau', servicesTitle: 'Des services qui suivent votre rythme.',
    services: [['Livraison & installation', 'Notre équipe dédiée livre et installe nos produits.'], ['Bouteilles personnalisées', 'Donnez une touche unique à vos anniversaires, mariages ou événements.'], ['Emballages', 'Des produits plastiques sans BPA pour vos besoins quotidiens.']],
    contactKicker: 'Parlons de votre besoin', contactTitle: 'Une question? Nous sommes là.', contactText: 'Pour une commande, une livraison ou un projet de filtration, notre équipe vous répond.', contactCta: 'Nous contacter', contactEmail: 'info@waterstreetnrg.co.za', footer: 'Pure water. Real impact.', rights: '© 2026 Water Street NRG. Tous droits réservés.', switchLabel: 'English'
  },
  en: {
    nav: ['Home', 'Our story', 'Products', 'Services', 'Contact'],
    eyebrow: 'Water for life and living', heroTitle: 'Pure water, made for real life.',
    heroText: 'STREAMZ makes quality drinking water accessible to South African homes, businesses and communities.', heroCta: 'Explore our range', heroAlt: 'STREAMZ water bottle',
    statOne: 'Established', statOneValue: '2023', statTwo: 'Quality checked', statTwoValue: 'SANS 241', statThree: 'Built for today', statThreeValue: 'Ready for tomorrow',
    missionLabel: 'Why we exist', missionTitle: 'Trust, one drop at a time.', missionText: 'We deliver reliable, refreshing and accessible water solutions. Our work brings together quality, human service and respect for our planet’s most precious resource.',
    principles: [['01', 'Quality assured', 'Water checked by accredited laboratories against SANS 241 requirements.'], ['02', 'Thoughtful service', 'A responsive team ready to help with every need.'], ['03', 'Sustainable impact', 'Practices designed to protect water and the communities we serve.']],
    storyKicker: 'Our story', storyTitle: 'A simple vision. An essential ambition.', storyText: 'Established in 2023 by Water Street NRG, STREAMZ began with one belief: high-quality water should be part of every moment of life. From daily hydration to business needs, we are building a brand our customers can rely on.', storyCta: 'Talk to our team',
    rangeKicker: 'The STREAMZ range', rangeTitle: 'Purity and convenience, in one place.', products: [['Purified water', 'Crystal-clear water for every day.', 'From R6.00'], ['Juice', 'Purified-water based recipes, from 250 ml to 5 L.', 'Various sizes'], ['Water dispensers', 'Solutions for homes, offices and businesses.', 'On request'], ['Filtration', 'Advanced systems and a trusted provider network.', 'Custom project']],
    menuKicker: 'Indicative prices', menuTitle: 'The STREAMZ menu', menuNote: 'Prices in South African rand (ZAR). Contact us for availability and delivery.', menu: [['Water 500 ml', 'R6.00'], ['6 x 500 ml pack', 'R33.00'], ['12 x 500 ml pack', 'R66.00'], ['Water 1.5 L', 'R12.00'], ['5 L clear bottle', 'R20.00'], ['10 L clear bottle', 'R38.00'], ['18.9 L water container', 'R121.00'], ['10 L container with handles', 'R99.00'], ['25 L square container with tap', 'R275.00'], ['Container tap', 'R35.00']],
    servicesKicker: 'Beyond water', servicesTitle: 'Services that move with you.', services: [['Delivery & installation', 'Our dedicated team delivers and installs our products.'], ['Personalised bottles', 'Make birthdays, weddings and company events your own.'], ['Packaging materials', 'BPA-free plastic products for everyday needs.']],
    contactKicker: 'Let’s talk about your needs', contactTitle: 'Have a question? We are here.', contactText: 'For an order, delivery or filtration project, our team is ready to help.', contactCta: 'Contact us', contactEmail: 'info@waterstreetnrg.co.za', footer: 'Pure water. Real impact.', rights: '© 2026 Water Street NRG. All rights reserved.', switchLabel: 'Français'
  }
};

let language = 'fr';
const app = document.querySelector('#app');

const render = () => {
  const t = translations[language];
  document.documentElement.lang = language;
  document.title = `STREAMZ | ${language === 'fr' ? 'Une eau pure, simplement' : 'Pure water, made simple'}`;
  app.innerHTML = `
    <header class="site-header"><a class="brand" href="#accueil" aria-label="STREAMZ"><img src="${logoUrl}" alt="STREAMZ"></a><nav aria-label="Main navigation">${t.nav.map((item, i) => `<a href="#${['accueil', 'histoire', 'produits', 'services', 'contact'][i]}">${item}</a>`).join('')}</nav><button class="language-switch" type="button" aria-label="Switch language">${t.switchLabel}<span>↗</span></button></header>
    <main>
      <section class="hero" id="accueil"><div class="hero-copy"><p class="eyebrow">${t.eyebrow}</p><h1>${t.heroTitle}</h1><p class="hero-text">${t.heroText}</p><a class="button button-light" href="#produits">${t.heroCta}<span>↗</span></a></div><div class="hero-art"><div class="sun-ring"></div><div class="water-label">STREAMZ<br><small>PURE WATER</small></div><div class="bottle-shape"><span>STREAMZ</span></div><div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div></div></section>
      <section class="stats" aria-label="STREAMZ facts"><div><strong>${t.statOneValue}</strong><span>${t.statOne}</span></div><div><strong>${t.statTwoValue}</strong><span>${t.statTwo}</span></div><div><strong>${t.statThreeValue}</strong><span>${t.statThree}</span></div></section>
      <section class="mission section-pad"><div class="section-intro"><p class="eyebrow">${t.missionLabel}</p><h2>${t.missionTitle}</h2><p>${t.missionText}</p></div><div class="principles">${t.principles.map(([number, title, text]) => `<article><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></section>
      <section class="story section-pad" id="histoire"><div class="story-image"><div class="water-mark">S</div><div class="image-caption">WATER STREET NRG<br><small>EST. 2023 · SOUTH AFRICA</small></div></div><div class="story-copy"><p class="eyebrow">${t.storyKicker}</p><h2>${t.storyTitle}</h2><p>${t.storyText}</p><a class="text-link" href="#contact">${t.storyCta} <span>↗</span></a></div></section>
      <section class="range section-pad" id="produits"><div class="section-heading"><div><p class="eyebrow">${t.rangeKicker}</p><h2>${t.rangeTitle}</h2></div><span class="section-index">01 — 04</span></div><div class="product-grid">${t.products.map(([title, text, meta], i) => `<article class="product product-${i + 1}"><div class="product-number">0${i + 1}</div><div><h3>${title}</h3><p>${text}</p></div><strong>${meta}</strong></article>`).join('')}</div></section>
      <section class="menu-section section-pad"><div class="menu-heading"><p class="eyebrow">${t.menuKicker}</p><h2>${t.menuTitle}</h2><p>${t.menuNote}</p></div><div class="menu-list">${t.menu.map(([item, price]) => `<div><span>${item}</span><strong>${price}</strong></div>`).join('')}</div></section>
      <section class="services section-pad" id="services"><div class="section-heading"><div><p class="eyebrow">${t.servicesKicker}</p><h2>${t.servicesTitle}</h2></div></div><div class="service-grid">${t.services.map(([title, text], i) => `<article><span class="service-icon">${['◒', '✦', '▱'][i]}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></section>
      <section class="contact" id="contact"><div><p class="eyebrow">${t.contactKicker}</p><h2>${t.contactTitle}</h2><p>${t.contactText}</p></div><a class="button button-dark" href="mailto:${t.contactEmail}">${t.contactCta}<span>↗</span></a></section>
    </main><footer><div><img src="${logoUrl}" alt="STREAMZ"><p>${t.footer}</p></div><a href="mailto:${t.contactEmail}">${t.contactEmail}</a><small>${t.rights}</small></footer>`;
  document.querySelector('.language-switch').addEventListener('click', () => { language = language === 'fr' ? 'en' : 'fr'; render(); });
};

render();
