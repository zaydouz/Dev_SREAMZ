// Textes de l'interface. Le catalogue produits est dans catalog.js et les
// magasins dans stores.js, communs aux deux langues.

export const navigation = [
  { key: "products", href: "#products" },
  { key: "water", href: "#process" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "stores", href: "#stores" },
  { key: "contact", href: "#contact" },
];

export const services = [
  { key: "installation", href: "#contact" },
  { key: "refill", href: "#/products/refill" },
  { key: "customBottles", href: "#contact" },
  { key: "packaging", href: "#contact" },
];

const shared = {
  contact: { email: "info@swsnrg.co.za", phone: "+27 (78) 123 1829" },
  company: {
    name: "Water Street NRG",
    registration: "2023 / 642357 / 07",
    vat: "4230314678",
  },
};

export const translations = {
  fr: {
    ...shared,
    languageName: "English",
    documentTitle: "Votre source fiable pour une eau pure et rafraîchissante",
    navigation: {
      products: "Nos produits",
      water: "Notre eau",
      about: "À propos",
      services: "Services",
      stores: "Magasins",
      contact: "Contact",
    },
    pending: "À confirmer",
    hero: {
      title: "Votre source fiable pour une eau pure et rafraîchissante",
      description:
        "Chez Water Street NRG, nous offrons aux communautés un accès à une eau propre, pure et rafraîchissante, ainsi que des produits et services de qualité supérieure.",
      cta: "Découvrir nos produits",
      secondary: "Trouver un magasin",
      alt: "Bouteille d’eau STREAMZ dans une éclaboussure d’eau",
    },
    stats: [
      ["2023", "Fondée en"],
      ["SANS 241", "Norme qualité"],
      ["Sans BPA", "Emballages"],
    ],
    refillBanner: {
      alt: "Femme buvant une bouteille d’eau STREAMZ",
      eyebrow: "STREAMZ REFILL",
      title: "Rejoignez le mouvement #ChooseToRefill",
      paragraphs: [
        "Pensée autour de la recharge, l’hydratation durable est devenue notre produit le plus vendu chez STREAMZ. Notre initiative vise à fournir une eau potable pure et sûre, tout en réduisant considérablement la pollution liée aux bouteilles en plastique. Votre soutien permet d’éviter que des millions de bouteilles en plastique ne finissent chaque année dans les décharges.",
        "Agissez durablement. Participez au changement et rejoignez le mouvement #ChooseToRefill.",
      ],
      cta: "Découvrir la recharge",
      secondary: "Trouver un magasin",
    },
    productSection: {
      title: "Nos produits",
      description:
        "Choisissez une gamme pour découvrir chaque produit et sa composition.",
      explore: "Découvrir",
      all: "Tous les produits",
    },
    productPage: {
      // Libelle de la fenetre de details selon la gamme (detailsType du catalogue).
      details: {
        composition: { title: "Composition", button: "Voir la composition" },
        specifications: {
          title: "Caractéristiques techniques",
          button: "Voir les caractéristiques",
        },
        features: {
          title: "Caractéristiques",
          button: "Voir les caractéristiques",
        },
      },
      close: "Fermer",
      variants: "Choisir un produit",
      back: "Toutes les gammes",
      notFound: "Ce produit est introuvable.",
    },
    about: {
      title: "À propos de STREAMZ",
      story:
        "Fondée en 2023, notre aventure a commencé avec une vision simple mais puissante : rendre l’eau potable de haute qualité accessible à tous. Au fil du temps, nous voulons que notre entreprise devienne un symbole de pureté et de fiabilité.",
      photoAlt: "Eau versée dans un verre",
      commitmentTitle: "Notre engagement",
      commitment:
        "Chez Water Street NRG, nous comprenons l’importance de l’eau comme élément fondamental de la vie. Notre engagement repose sur trois principes essentiels :",
    },
    principles: [
      [
        "Assurance qualité",
        "Nous respectons les normes les plus élevées de purification et de traitement de l’eau. Nos infrastructures de pointe et nos contrôles qualité rigoureux vous assurent le meilleur. La qualité de notre eau est vérifiée par des laboratoires accrédités selon la norme SANS 241.",
      ],
      [
        "Satisfaction client",
        "Votre satisfaction est au cœur de nos activités. Nous écoutons vos besoins et proposons des solutions personnalisées. Notre équipe amicale et compétente est toujours prête à vous aider.",
      ],
      [
        "Impact communautaire",
        "Nous croyons en l’importance de redonner aux communautés que nous servons. Nos pratiques durables reflètent notre engagement à préserver la ressource la plus précieuse de notre planète : l’eau.",
      ],
    ],
    // Etapes simplifiees du processus de traitement fourni par le client
    // (13 operations regroupees en 7 etapes).
    process: {
      title: "Notre processus de purification",
      description:
        "Chaque goutte d’eau STREAMZ passe par sept étapes de traitement avant d’arriver jusqu’à vous. Passez sur une étape pour découvrir ce qui s’y passe.",
      steps: [
        [
          "Pré-chloration",
          "Un dosage précis de chlore désinfecte l’eau brute dès son arrivée.",
        ],
        [
          "Filtration",
          "Des filtres multimédia, à sable vert et à charbon actif retirent les sédiments, le fer et le chlore.",
        ],
        [
          "Adoucissement",
          "Un adoucisseur retire le calcaire, puis la déchloration et un anti-tartre protègent la membrane d’osmose.",
        ],
        [
          "Osmose inverse",
          "Une membrane très fine retient les sels et minéraux dissous : seule l’eau pure la traverse.",
        ],
        [
          "Désinfection UV",
          "Les rayons ultraviolets neutralisent les bactéries et les virus.",
        ],
        [
          "Équilibrage",
          "L’ajustement du pH, le filtre à calcite et une légère post-chloration équilibrent et protègent l’eau.",
        ],
        [
          "Stockage & contrôle",
          "L’eau purifiée est stockée avant distribution, et sa qualité est contrôlée par des laboratoires accrédités selon la norme SANS 241.",
        ],
      ],
      diagram: "Voir le schéma technique complet",
      diagramTitle: "Schéma de traitement de l’eau",
      diagramAlt:
        "Schéma technique complet de l’installation de traitement de l’eau STREAMZ",
    },
    serviceSection: { title: "Nos services" },
    services: {
      installation: [
        "Installation",
        "Un service dédié installe nos produits. N’hésitez pas à nous consulter.",
      ],
      refill: [
        "Recharge en magasin",
        "Rapportez vos bouteilles et bidons pour les remplir d’eau purifiée STREAMZ.",
      ],
      customBottles: [
        "Bouteilles personnalisées",
        "Des bouteilles à votre image pour vos anniversaires, mariages et événements d’entreprise.",
      ],
      packaging: [
        "Matériaux d’emballage",
        "Des produits en plastique sans BPA.",
      ],
    },
    stores: {
      title: "Nos magasins",
      description: "Trouvez le magasin STREAMZ le plus proche de chez vous.",
      search: "Ville, quartier ou code postal",
      searchLabel: "Rechercher un magasin",
      count: (n) => `${n} magasin${n > 1 ? "s" : ""}`,
      noResult:
        "Aucun magasin trouvé pour cette recherche. Contactez-nous, nous vous orienterons.",
      directions: "Itinéraire",
      call: "Appeler",
      hours: "Horaires",
      serviceNames: {
        shop: "Magasin",
        refill: "Recharge",
        installation: "Installation",
      },
      mapTitle: "Carte du magasin",
    },
    contact: {
      ...shared.contact,
      title: "Faites la différence avec STREAMZ",
      description: "Une question ou une commande ? Notre équipe vous répond.",
      emailLabel: "E-mail",
      phoneLabel: "Téléphone",
      addressLabel: "Adresse",
      cta: "Nous écrire",
    },
    footer: {
      tagline: "Quand pureté rime avec commodité.",
      registration: "N° d’enregistrement",
      vat: "N° TVA",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    ...shared,
    languageName: "Français",
    documentTitle: "Your Trusted Source for Pure, Refreshing Water",
    navigation: {
      products: "Our products",
      water: "Our water",
      about: "About",
      services: "Services",
      stores: "Stores",
      contact: "Contact",
    },
    pending: "To be confirmed",
    hero: {
      title: "Your Trusted Source for Pure, Refreshing Water",
      description:
        "At Water Street NRG, we provide communities with access to clean, pure and refreshing water, with premium quality products and services.",
      cta: "Explore our products",
      secondary: "Find a store",
      alt: "STREAMZ water bottle in a water splash",
    },
    stats: [
      ["2023", "Established"],
      ["SANS 241", "Quality standard"],
      ["BPA free", "Packaging"],
    ],
    refillBanner: {
      alt: "Woman drinking from a STREAMZ water bottle",
      eyebrow: "STREAMZ REFILL",
      title: "Take Part in the #ChooseToRefill movement",
      paragraphs: [
        "Built around the power of refilling, STREAMZ has made sustainable hydration our top selling product. Our initiative is dedicated to providing pure, safe drinking water while significantly reducing plastic bottle pollution. Your support helps prevent millions of plastic bottles from reaching landfills annually.",
        "Make a lasting impact. Be part of the change and join the #ChooseToRefill movement.",
      ],
      cta: "Discover STREAMZ Refill",
      secondary: "Find a store",
    },
    productSection: {
      title: "Our products",
      description:
        "Choose a range to discover each product and its composition.",
      explore: "Explore",
      all: "All products",
    },
    productPage: {
      details: {
        composition: { title: "Composition", button: "View composition" },
        specifications: {
          title: "Specifications",
          button: "View specifications",
        },
        features: { title: "Features", button: "View features" },
      },
      close: "Close",
      variants: "Choose a product",
      back: "All ranges",
      notFound: "This product could not be found.",
    },
    about: {
      title: "About STREAMZ",
      story:
        "Established in 2023, our journey began with a simple yet powerful vision: to make high-quality drinking water accessible to everyone. Over the years, we want our company to stand as a symbol of purity and reliability.",
      photoAlt: "Water being poured into a glass",
      commitmentTitle: "Our Commitment",
      commitment:
        "At Water Street NRG, we understand the significance of water as a fundamental element of life. Our commitment is built on three core principles:",
    },
    principles: [
      [
        "Quality Assurance",
        "We adhere to the highest standards of water purification and treatment. Our state-of-the-art facility and rigorous quality control processes guarantee that you receive nothing but the best. Our water quality is checked by accredited laboratories against SANS 241 requirements.",
      ],
      [
        "Customer Satisfaction",
        "Your satisfaction is at the heart of our operations. We listen to your needs and deliver personalised solutions. Our friendly and knowledgeable team is always ready to assist you.",
      ],
      [
        "Community Impact",
        "We believe in giving back to the communities we serve. Our sustainable practices reflect our commitment to preserving our planet’s most precious resource: water.",
      ],
    ],
    process: {
      title: "Our purification process",
      description:
        "Every drop of STREAMZ water goes through seven treatment steps before it reaches you. Hover over a step to see what happens.",
      steps: [
        [
          "Pre-chlorination",
          "A precise chlorine dose disinfects the raw water as soon as it arrives.",
        ],
        [
          "Filtration",
          "Multimedia, green sand and activated carbon filters remove sediment, iron and chlorine.",
        ],
        [
          "Softening",
          "A softener removes hardness, then de-chlorination and an antiscalant protect the reverse osmosis membrane.",
        ],
        [
          "Reverse osmosis",
          "An ultra-fine membrane holds back dissolved salts and minerals: only pure water passes through.",
        ],
        [
          "UV disinfection",
          "Ultraviolet light neutralises bacteria and viruses.",
        ],
        [
          "Balancing",
          "pH adjustment, a calcite filter and light post-chlorination balance and protect the water.",
        ],
        [
          "Storage & testing",
          "The purified water is stored before distribution, and its quality is checked by accredited laboratories against SANS 241.",
        ],
      ],
      diagram: "View the full technical diagram",
      diagramTitle: "Water treatment diagram",
      diagramAlt:
        "Full technical diagram of the STREAMZ water treatment installation",
    },
    serviceSection: { title: "Our services" },
    services: {
      installation: [
        "Installation",
        "A dedicated department installs our products, please ask us!",
      ],
      refill: [
        "In-store refill",
        "Bring back your bottles and containers to refill them with STREAMZ purified water.",
      ],
      customBottles: [
        "Personalised bottles",
        "Tailor-made bottles for birthdays, weddings and company events.",
      ],
      packaging: ["Packaging materials", "BPA-free plastic products."],
    },
    stores: {
      title: "Our stores",
      description: "Find your nearest STREAMZ store.",
      search: "Town, suburb or postal code",
      searchLabel: "Search for a store",
      count: (n) => `${n} store${n > 1 ? "s" : ""}`,
      noResult:
        "No store found for this search. Contact us and we’ll point you in the right direction.",
      directions: "Directions",
      call: "Call",
      hours: "Trading hours",
      serviceNames: {
        shop: "Shop",
        refill: "Refill",
        installation: "Installation",
      },
      mapTitle: "Store map",
    },
    contact: {
      ...shared.contact,
      title: "Discover the difference with STREAMZ",
      description: "A question or an order? Our team will get back to you.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      addressLabel: "Address",
      cta: "Email us",
    },
    footer: {
      tagline: "Where Purity Meets Convenience.",
      registration: "Reg no.",
      vat: "VAT no.",
      rights: "All rights reserved.",
    },
  },
};
