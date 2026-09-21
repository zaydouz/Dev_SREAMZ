export const navigation = [
  { key: "home", href: "#home" },
  { key: "story", href: "#story" },
  { key: "products", href: "#products" },
  { key: "services", href: "#services" },
  { key: "contact", href: "#contact" },
];

export const products = [
  {
    number: "01",
    tone: "aqua",
    title: "purifiedWater",
    description: "purifiedWaterDescription",
    meta: "purifiedWaterMeta",
  },
  {
    number: "02",
    tone: "peach",
    title: "juice",
    description: "juiceDescription",
    meta: "juiceMeta",
  },
  {
    number: "03",
    tone: "sage",
    title: "dispensers",
    description: "dispensersDescription",
    meta: "dispensersMeta",
  },
  {
    number: "04",
    tone: "lilac",
    title: "filtration",
    description: "filtrationDescription",
    meta: "filtrationMeta",
  },
];

export const services = [
  { icon: "◒", title: "delivery", description: "deliveryDescription" },
  {
    icon: "✦",
    title: "customBottles",
    description: "customBottlesDescription",
  },
  { icon: "▱", title: "packaging", description: "packagingDescription" },
];

const shared = {
  contact: { email: "info@waterstreetnrg.co.za" },
  footer: { tagline: "Pure water. Real impact." },
};

export const translations = {
  fr: {
    ...shared,
    languageName: "English",
    documentTitle: "Une eau pure, simplement",
    navigation: {
      home: "Accueil",
      story: "Notre histoire",
      products: "Produits",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      eyebrow: "L’eau, source de vie",
      title: "Une eau pure, pensée pour la vraie vie.",
      description:
        "STREAMZ rend l’eau potable de qualité accessible aux foyers, aux entreprises et aux communautés sud-africaines.",
      cta: "Voir notre gamme",
      alt: "Illustration d’une bouteille d’eau STREAMZ",
    },
    stats: [
      ["2023", "Fondée en"],
      ["SANS 241", "Contrôle qualité"],
      ["Pour demain", "Pour aujourd’hui"],
    ],
    mission: {
      eyebrow: "Notre raison d’être",
      title: "La confiance, goutte après goutte.",
      description:
        "Nous fournissons des solutions d’eau fiables, rafraîchissantes et accessibles. Notre travail associe exigence de qualité, service humain et respect de la ressource la plus précieuse de notre planète.",
    },
    principles: [
      [
        "01",
        "Qualité assurée",
        "Une eau contrôlée par des laboratoires accrédités selon les exigences SANS 241.",
      ],
      [
        "02",
        "Service attentif",
        "Une équipe disponible pour vous accompagner dans chaque besoin.",
      ],
      [
        "03",
        "Impact durable",
        "Des pratiques pensées pour préserver l’eau et les communautés que nous servons.",
      ],
    ],
    story: {
      eyebrow: "Notre histoire",
      title: "Une vision simple. Une ambition essentielle.",
      description:
        "Fondée en 2023 par Water Street NRG, STREAMZ est née d’une conviction : une eau de haute qualité doit pouvoir accompagner chaque moment de la vie. De l’hydratation quotidienne aux besoins professionnels, nous construisons une marque fiable et proche de ses clients.",
      cta: "Parler à notre équipe",
    },
    productSection: {
      eyebrow: "La gamme STREAMZ",
      title: "Pureté et commodité, au même endroit.",
    },
    products: {
      purifiedWater: "Eau purifiée",
      purifiedWaterDescription: "Une eau cristalline pour chaque journée.",
      purifiedWaterMeta: "À partir de R6.00",
      juice: "Jus",
      juiceDescription: "Des recettes à base d’eau purifiée, de 250 ml à 5 L.",
      juiceMeta: "Formats variés",
      dispensers: "Distributeurs",
      dispensersDescription:
        "Des solutions pour les maisons, bureaux et entreprises.",
      dispensersMeta: "Sur demande",
      filtration: "Filtration",
      filtrationDescription:
        "Des systèmes avancés et un réseau de prestataires fiables.",
      filtrationMeta: "Projet personnalisé",
    },
    menu: {
      eyebrow: "Tarifs indicatifs",
      title: "Le menu STREAMZ",
      note: "Prix en rands sud-africains (ZAR). Contactez-nous pour les disponibilités et livraisons.",
      items: [
        ["Eau 500 ml", "R6.00"],
        ["Pack de 6 x 500 ml", "R33.00"],
        ["Pack de 12 x 500 ml", "R66.00"],
        ["Eau 1,5 L", "R12.00"],
        ["Bouteille vide 5 L", "R20.00"],
        ["Bouteille vide 10 L", "R38.00"],
        ["Bidon 18,9 L", "R121.00"],
        ["Bidon avec poignées 10 L", "R99.00"],
        ["Bidon carré avec robinet 25 L", "R275.00"],
        ["Robinet", "R35.00"],
      ],
    },
    serviceSection: {
      eyebrow: "Au-delà de l’eau",
      title: "Des services qui suivent votre rythme.",
    },
    services: {
      delivery: "Livraison & installation",
      deliveryDescription:
        "Notre équipe dédiée livre et installe nos produits.",
      customBottles: "Bouteilles personnalisées",
      customBottlesDescription:
        "Donnez une touche unique à vos anniversaires, mariages ou événements.",
      packaging: "Emballages",
      packagingDescription:
        "Des produits plastiques sans BPA pour vos besoins quotidiens.",
    },
    contact: {
      ...shared.contact,
      eyebrow: "Parlons de votre besoin",
      title: "Une question ? Nous sommes là.",
      description:
        "Pour une commande, une livraison ou un projet de filtration, notre équipe vous répond.",
      cta: "Nous contacter",
    },
    footer: { ...shared.footer, rights: "Tous droits réservés." },
  },
  en: {
    ...shared,
    languageName: "Français",
    documentTitle: "Pure water, made simple",
    navigation: {
      home: "Home",
      story: "Our story",
      products: "Products",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Water for life and living",
      title: "Pure water, made for real life.",
      description:
        "STREAMZ makes quality drinking water accessible to South African homes, businesses and communities.",
      cta: "Explore our range",
      alt: "Illustration of a STREAMZ water bottle",
    },
    stats: [
      ["2023", "Established"],
      ["SANS 241", "Quality checked"],
      ["Ready for tomorrow", "Built for today"],
    ],
    mission: {
      eyebrow: "Why we exist",
      title: "Trust, one drop at a time.",
      description:
        "We deliver reliable, refreshing and accessible water solutions. Our work brings together quality, human service and respect for our planet’s most precious resource.",
    },
    principles: [
      [
        "01",
        "Quality assured",
        "Water checked by accredited laboratories against SANS 241 requirements.",
      ],
      [
        "02",
        "Thoughtful service",
        "A responsive team ready to help with every need.",
      ],
      [
        "03",
        "Sustainable impact",
        "Practices designed to protect water and the communities we serve.",
      ],
    ],
    story: {
      eyebrow: "Our story",
      title: "A simple vision. An essential ambition.",
      description:
        "Established in 2023 by Water Street NRG, STREAMZ began with one belief: high-quality water should be part of every moment of life. From daily hydration to business needs, we are building a brand our customers can rely on.",
      cta: "Talk to our team",
    },
    productSection: {
      eyebrow: "The STREAMZ range",
      title: "Purity and convenience, in one place.",
    },
    products: {
      purifiedWater: "Purified water",
      purifiedWaterDescription: "Crystal-clear water for every day.",
      purifiedWaterMeta: "From R6.00",
      juice: "Juice",
      juiceDescription: "Purified-water based recipes, from 250 ml to 5 L.",
      juiceMeta: "Various sizes",
      dispensers: "Water dispensers",
      dispensersDescription: "Solutions for homes, offices and businesses.",
      dispensersMeta: "On request",
      filtration: "Filtration",
      filtrationDescription: "Advanced systems and a trusted provider network.",
      filtrationMeta: "Custom project",
    },
    menu: {
      eyebrow: "Indicative prices",
      title: "The STREAMZ menu",
      note: "Prices in South African rand (ZAR). Contact us for availability and delivery.",
      items: [
        ["Water 500 ml", "R6.00"],
        ["6 x 500 ml pack", "R33.00"],
        ["12 x 500 ml pack", "R66.00"],
        ["Water 1.5 L", "R12.00"],
        ["5 L clear bottle", "R20.00"],
        ["10 L clear bottle", "R38.00"],
        ["18.9 L water container", "R121.00"],
        ["10 L container with handles", "R99.00"],
        ["25 L square container with tap", "R275.00"],
        ["Container tap", "R35.00"],
      ],
    },
    serviceSection: {
      eyebrow: "Beyond water",
      title: "Services that move with you.",
    },
    services: {
      delivery: "Delivery & installation",
      deliveryDescription:
        "Our dedicated team delivers and installs our products.",
      customBottles: "Personalised bottles",
      customBottlesDescription:
        "Make birthdays, weddings and company events your own.",
      packaging: "Packaging materials",
      packagingDescription: "BPA-free plastic products for everyday needs.",
    },
    contact: {
      ...shared.contact,
      eyebrow: "Let’s talk about your needs",
      title: "Have a question? We are here.",
      description:
        "For an order, delivery or filtration project, our team is ready to help.",
      cta: "Contact us",
    },
    footer: { ...shared.footer, rights: "All rights reserved." },
  },
};
