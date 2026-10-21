// Textes de l'interface. Le catalogue produits est dans catalog.js et les
// magasins dans stores.js, communs aux deux langues.

export const navigation = [
  { key: "products", href: "#products" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "stores", href: "#stores" },
  { key: "contact", href: "#contact" },
];

export const services = [
  { key: "delivery", href: "#stores" },
  { key: "refill", href: "#/products/refill" },
  { key: "customBottles", href: "#contact" },
  { key: "packaging", href: "#contact" },
];

const shared = {
  contact: { email: "info@waterstreetnrg.co.za", phone: "078 123 1829" },
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
      about: "À propos",
      services: "Services",
      stores: "Magasins & livraison",
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
      composition: "Composition",
      range: "Dans cette gamme",
      back: "Toutes les gammes",
      notFound: "Ce produit est introuvable.",
    },
    about: {
      title: "À propos de STREAMZ",
      story:
        "Fondée en 2023, notre aventure a commencé avec une vision simple mais puissante : rendre l’eau potable de haute qualité accessible à tous. Au fil du temps, nous voulons que notre entreprise devienne un symbole de pureté et de fiabilité.",
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
    serviceSection: { title: "Nos services" },
    services: {
      delivery: [
        "Livraison et installation",
        "Un service dédié livre et installe nos produits. Vérifiez si votre zone est desservie.",
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
      title: "Magasins & livraison",
      description:
        "Trouvez le magasin STREAMZ le plus proche, et vérifiez s’il livre dans votre zone.",
      search: "Ville, quartier ou code postal",
      searchLabel: "Rechercher un magasin",
      count: (n) => `${n} magasin${n > 1 ? "s" : ""}`,
      noResult:
        "Aucun magasin trouvé pour cette recherche. Contactez-nous : nous livrons peut-être votre zone.",
      directions: "Itinéraire",
      call: "Appeler",
      hours: "Horaires",
      delivery: "Livraison depuis ce magasin",
      deliveryAreasPending:
        "Zones de livraison sur demande : contactez le magasin.",
      serviceNames: {
        shop: "Magasin",
        refill: "Recharge",
        delivery: "Livraison",
        installation: "Installation",
      },
      mapTitle: "Carte du magasin",
    },
    contact: {
      ...shared.contact,
      title: "Faites la différence avec STREAMZ",
      description:
        "Une question, une commande ou une demande de livraison ? Notre équipe vous répond.",
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
      about: "About",
      services: "Services",
      stores: "Stores & delivery",
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
      composition: "Composition",
      range: "In this range",
      back: "All ranges",
      notFound: "This product could not be found.",
    },
    about: {
      title: "About STREAMZ",
      story:
        "Established in 2023, our journey began with a simple yet powerful vision: to make high-quality drinking water accessible to everyone. Over the years, we want our company to stand as a symbol of purity and reliability.",
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
    serviceSection: { title: "Our services" },
    services: {
      delivery: [
        "Delivery and installation",
        "A dedicated department delivers and installs our products. Check whether we deliver to your area.",
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
      title: "Stores & delivery",
      description:
        "Find your nearest STREAMZ store, and check whether it delivers to your area.",
      search: "Town, suburb or postal code",
      searchLabel: "Search for a store",
      count: (n) => `${n} store${n > 1 ? "s" : ""}`,
      noResult:
        "No store found for this search. Contact us: we may still deliver to your area.",
      directions: "Directions",
      call: "Call",
      hours: "Trading hours",
      delivery: "Delivery from this store",
      deliveryAreasPending:
        "Delivery areas on request: please contact the store.",
      serviceNames: {
        shop: "Shop",
        refill: "Refill",
        delivery: "Delivery",
        installation: "Installation",
      },
      mapTitle: "Store map",
    },
    contact: {
      ...shared.contact,
      title: "Discover the difference with STREAMZ",
      description:
        "A question, an order or a delivery request? Our team will get back to you.",
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
