// Catalogue commun aux deux langues : les images ne sont definies qu'une fois.
// Les textes traduits sont des objets { fr, en }. Une valeur `null` dans une
// composition s'affiche "A confirmer" en attendant la fiche complete du client.
// `detailsType` choisit le libelle de la fenetre de details (voir content.js).

// Analyse fournie par le client pour la bouteille de 500 ml.
// Les autres formats ont une composition vide, qui masque le bouton de details.
const waterAnalysis = [
  [{ fr: "Calcium (Ca)", en: "Calcium (Ca)" }, "< 0.86"],
  [{ fr: "Magnésium (Mg)", en: "Magnesium (Mg)" }, "< 0.13"],
  [{ fr: "Sodium (Na)", en: "Sodium (Na)" }, "8.87"],
  [{ fr: "Potassium (K)", en: "Potassium (K)" }, "< 0.07"],
  [{ fr: "Chlorures (Cl)", en: "Chloride (Cl)" }, "< 12"],
  [{ fr: "Sulfates (SO4)", en: "Sulphate (SO4)" }, "< 3"],
  [{ fr: "Alcalinité (CaCO3)", en: "Alkalinity (CaCO3)" }, "< 10"],
  [{ fr: "Nitrates (N)", en: "Nitrate (N)" }, "< 0.19"],
  [{ fr: "Fluorures (F)", en: "Fluoride (F)" }, "< 0.1"],
  [{ fr: "Fer (Fe)", en: "Iron (Fe)" }, "< 0.1"],
  [{ fr: "Aluminium (Al)", en: "Aluminium (Al)" }, "< 0.15"],
  [{ fr: "Résidu sec (TDS)", en: "TDS" }, "66.7"],
  [{ fr: "pH", en: "pH" }, "6-8"],
];

const waterComposition = (analysis) => [
  [
    { fr: "Type", en: "Type" },
    { fr: "Eau potable purifiée", en: "Purified drinking water" },
  ],
  [{ fr: "Norme qualité", en: "Quality standard" }, "SANS 241"],
  ...analysis,
];

const waterText = {
  fr: "Une eau purifiée cristalline, contrôlée par des laboratoires accrédités selon la norme SANS 241.",
  en: "Crystal-clear purified water, checked by accredited laboratories against SANS 241 requirements.",
};

const containerComposition = (capacity) => [
  [{ fr: "Contenance", en: "Capacity" }, capacity],
  [
    { fr: "Matériau", en: "Material" },
    { fr: "Plastique sans BPA", en: "BPA-free plastic" },
  ],
];

// Les caracteristiques non fournies par le client ne sont pas affichees.
const dispenserComposition = (specs) =>
  [
    [
      { fr: "Catégorie", en: "Category" },
      {
        fr: "Refroidisseurs / Distributeurs d’eau",
        en: "Water coolers / Dispensers",
      },
    ],
    [{ fr: "Marque", en: "Brand" }, "Classic / STREAMZ"],
    [{ fr: "Chauffage", en: "Heating" }, specs.heating ?? null],
    [{ fr: "Refroidissement", en: "Cooling" }, specs.cooling ?? null],
    [{ fr: "Réfrigérant", en: "Refrigerant" }, specs.refrigerant ?? null],
    [{ fr: "Tension", en: "Voltage" }, specs.voltage ?? null],
    [{ fr: "Dimensions", en: "Dimensions" }, specs.dimensions ?? null],
  ].filter(([, value]) => value !== null);

// Osmoseurs : seuls le nom et la photo sont connus. Une composition vide masque le
// bouton de details en attendant les caracteristiques du client.
const filtrationText = {
  fr: "Système de purification de l’eau par osmose inverse.",
  en: "Reverse osmosis water purification system.",
};

export const categories = [
  {
    slug: "water",
    detailsType: "composition",
    image: "/images/water-500ml.png",
    title: { fr: "Eau purifiée", en: "Purified water" },
    tagline: { fr: "Notre produit phare", en: "Our flagship product" },
    description: {
      fr: "Notre produit phare est une eau purifiée cristalline, disponible en plusieurs formats pour répondre à vos besoins quotidiens.",
      en: "Our flagship product is crystal-clear purified water, available in various sizes to meet your daily hydration needs.",
    },
    products: [
      {
        slug: "500ml",
        name: { fr: "Eau 500 ml", en: "Water 500 ml" },
        image: "/images/water-500ml.png",
        text: waterText,
        composition: waterComposition(waterAnalysis),
      },
      {
        slug: "1500ml",
        name: { fr: "Eau 1,5 L", en: "Water 1.5 L" },
        image: "/images/water-1500ml.png",
        text: waterText,
        composition: [],
      },
      {
        slug: "5l",
        name: { fr: "Bidon d’eau 5 L", en: "Water 5 L" },
        image: "/images/water-5l.png",
        text: waterText,
        composition: [],
      },
      {
        slug: "10l",
        name: { fr: "Bidon d’eau 10 L", en: "Water 10 L" },
        image: "/images/water-10l.png",
        text: waterText,
        composition: [],
      },
    ],
  },
  {
    slug: "refill",
    detailsType: "features",
    image: "/images/refill-container-18-9l.png",
    title: { fr: "Recharge & contenants", en: "Refill & containers" },
    tagline: { fr: "Remplissez en magasin", en: "Refill in store" },
    description: {
      fr: "Bouteilles et bidons réutilisables, à remplir d’eau purifiée STREAMZ dans nos magasins.",
      en: "Reusable bottles and containers, to refill with STREAMZ purified water in our stores.",
    },
    products: [
      {
        slug: "container-10l-handles",
        name: {
          fr: "Bidon 10 L avec poignées",
          en: "Water container 10 L with handles",
        },
        image: "/images/refill-container-blue-tap.png",
        text: {
          fr: "Bidon de 10 L avec poignées, facile à transporter.",
          en: "10 L container with handles, easy to carry.",
        },
        composition: containerComposition("10 L"),
      },
      {
        slug: "container-18-9l",
        name: { fr: "Bidon 18,9 L", en: "Water container 18.9 L" },
        image: "/images/refill-container-18-9l.png",
        text: {
          fr: "Bidon de 18,9 L, compatible avec nos distributeurs.",
          en: "18.9 L container, compatible with our dispensers.",
        },
        composition: containerComposition("18,9 L"),
      },
      {
        slug: "container-20l",
        name: { fr: "Bidon 20 L", en: "Water container 20 L" },
        image: "/images/refill-container-blue-tap.png",
        text: {
          fr: "Bidon réutilisable de 20 L, à remplir dans nos magasins.",
          en: "Reusable 20 L container, to refill in our stores.",
        },
        composition: containerComposition("20 L"),
      },
      {
        slug: "container-25l",
        name: { fr: "Bidon 25 L", en: "Water container 25 L" },
        image: "/images/refill-container-blue-tap.png",
        text: {
          fr: "Bidon réutilisable de 25 L, à remplir dans nos magasins.",
          en: "Reusable 25 L container, to refill in our stores.",
        },
        composition: containerComposition("25 L"),
      },
      {
        slug: "container-25l-tap",
        name: {
          fr: "Bidon carré 25 L avec robinet",
          en: "Container 25 L square with tap",
        },
        image: "/images/25l-refill.png",
        text: {
          fr: "Bidon carré de 25 L, livré avec robinet.",
          en: "25 L square container, supplied with a tap.",
        },
        composition: containerComposition("25 L"),
      },
    ],
  },
  {
    slug: "juice",
    detailsType: "composition",
    image: "/images/juice-fruit-cocktail.png",
    title: { fr: "Jus", en: "Juice range" },
    tagline: { fr: "De 250 ml à 500 ml", en: "From 250 ml to 500 ml" },
    description: {
      fr: "Notre gamme de jus STREAMZ, préparée à base d’eau purifiée, est disponible en différents formats (de 250 ml à 500 ml).",
      en: "Our STREAMZ juice range made of purified water, available in various pack sizes (from 250 ml to 500 ml).",
    },
    products: [
      {
        slug: "orange",
        name: { fr: "Jus d’orange", en: "Orange juice" },
        image: "/images/juice-orange.png",
        text: {
          fr: "Jus d’orange STREAMZ, préparé à base d’eau purifiée.",
          en: "STREAMZ orange juice, made with purified water.",
        },
        composition: [
          [
            { fr: "Base", en: "Base" },
            { fr: "Eau purifiée STREAMZ", en: "STREAMZ purified water" },
          ],
          [{ fr: "Formats", en: "Sizes" }, "250 ml, 330 ml, 500 ml"],
        ],
      },
      {
        slug: "mango",
        name: { fr: "Jus de mangue", en: "Mango juice" },
        image: "/images/juice-mango.png",
        text: {
          fr: "Jus de mangue STREAMZ, préparé à base d’eau purifiée.",
          en: "STREAMZ mango juice, made with purified water.",
        },
        composition: [
          [
            { fr: "Base", en: "Base" },
            { fr: "Eau purifiée STREAMZ", en: "STREAMZ purified water" },
          ],
          [{ fr: "Formats", en: "Sizes" }, "250 ml, 330 ml, 500 ml"],
        ],
      },
      {
        slug: "fruit-cocktail",
        name: { fr: "Jus cocktail de fruits", en: "Fruit cocktail juice" },
        image: "/images/juice-fruit-cocktail.png",
        text: {
          fr: "Jus cocktail de fruits STREAMZ, préparé à base d’eau purifiée.",
          en: "STREAMZ fruit cocktail juice, made with purified water.",
        },
        composition: [
          [
            { fr: "Base", en: "Base" },
            { fr: "Eau purifiée STREAMZ", en: "STREAMZ purified water" },
          ],
          [{ fr: "Formats", en: "Sizes" }, "250 ml, 330 ml, 500 ml"],
        ],
      },
    ],
  },
  {
    slug: "dispensers",
    detailsType: "specifications",
    image: "/images/dispenser-executive.png",
    title: { fr: "Distributeurs d’eau", en: "Water dispensers" },
    tagline: { fr: "Maisons & bureaux", en: "Homes & offices" },
    description: {
      fr: "Une gamme de distributeurs d’eau pour les maisons, bureaux et entreprises, pour un accès facile à l’eau fraîche à tout moment.",
      en: "A range of water dispensers designed for homes, offices, and businesses, ensuring easy access to refreshing water at any time.",
    },
    products: [
      {
        slug: "executive-floorstanding",
        name: {
          fr: "Distributeur sur pied Executive, chaud et froid, sans contact",
          en: "Executive Hot and Cold Floorstanding Non-Touch Dispenser",
        },
        image: "/images/dispenser-executive.png",
        text: {
          fr: "Compresseur silencieux, réservoirs en acier inoxydable alimentaire et pièces en ABS antibactérien.",
          en: "Low-noise compressor, food-grade stainless steel tanks and antibacterial ABS parts.",
        },
        composition: dispenserComposition({
          heating: "85-95 °C, 500 W",
          cooling: "5-10 °C, 90 W",
          refrigerant: "R134a",
          voltage: "220-240 V",
          dimensions: {
            fr: "L 34 cm ; l 33 cm ; H 98 cm",
            en: "L 34 cm; W 33 cm; H 98 cm",
          },
        }),
      },
      {
        slug: "floorstanding-push",
        name: {
          fr: "Distributeur sur pied, chaud et froid, à poussoir",
          en: "Floor Standing Hot and Cold Dispenser – Push",
        },
        image: "/images/dispenser-floorstanding-push.png",
        text: {
          fr: "Distributeur sur pied eau chaude et froide, à poussoir.",
          en: "Floor standing hot and cold water dispenser with push taps.",
        },
        composition: dispenserComposition({}),
      },
      {
        slug: "desktop",
        name: {
          fr: "Distributeur de comptoir, chaud et froid",
          en: "Desktop Hot and Cold Dispenser",
        },
        image: "/images/dispenser-desktop.png",
        text: {
          fr: "Distributeur compact eau chaude et froide, à poser sur un comptoir.",
          en: "Compact hot and cold water dispenser for countertops.",
        },
        composition: dispenserComposition({}),
      },
    ],
  },
  {
    slug: "filtration",
    // Photos non detourees : leur fond blanc est fondu dans la case.
    blendPhotos: true,
    detailsType: "specifications",
    image: "/images/filtration-system.png",
    title: { fr: "Filtration d’eau", en: "Water filtration" },
    tagline: { fr: "Sur demande", en: "On request" },
    description: {
      fr: "Des systèmes de filtration avancés pour une eau pure et sûre à portée de main. Nous mettons aussi à disposition notre réseau de prestataires pour les forages et projets industriels.",
      en: "Advanced filtration systems that guarantee pure, safe water at your fingertips. We also avail our network of reliable service providers for borehole requirements and industrial projects.",
    },
    products: [
      {
        slug: "fluxtek-50gpd",
        name: {
          fr: "Osmoseur Fluxtek 50 GPD, sans pompe ni support",
          en: "50 GPD Fluxtek RO System, non-pump, without stand",
        },
        image: "/images/filtration-fluxtek-50gpd.webp",
        text: filtrationText,
        composition: [],
      },
      {
        slug: "fluxtek-50gpd-stand",
        name: {
          fr: "Osmoseur Fluxtek 50 GPD, sans pompe, avec support",
          en: "50 GPD Fluxtek RO System, non-pump, with stand",
        },
        image: "/images/filtration-fluxtek-50gpd-stand.webp",
        text: filtrationText,
        composition: [],
      },
      {
        slug: "aqua-care-75gpd",
        name: {
          fr: "Osmoseur Aqua Care 75 GPD, sans pompe",
          en: "75 GPD Aqua Care RO System, without pump",
        },
        image: "/images/filtration-aqua-care-75gpd.webp",
        text: filtrationText,
        composition: [],
      },
      {
        slug: "aqua-care-75gpd-pump",
        name: {
          fr: "Osmoseur Aqua Care 75 GPD, avec pompe",
          en: "75 GPD Aqua Care RO System, with pump",
        },
        image: "/images/filtration-aqua-care-75gpd-pump.webp",
        text: filtrationText,
        composition: [],
      },
      {
        slug: "american-stars-75gpd",
        name: {
          fr: "Osmoseur American Stars 75 GPD, sans pompe",
          en: "75 GPD American Stars RO System, without pump",
        },
        image: "/images/filtration-american-stars-75gpd.webp",
        text: filtrationText,
        composition: [],
      },
      {
        slug: "american-stars-75gpd-pump",
        name: {
          fr: "Osmoseur American Stars 75 GPD, avec pompe",
          en: "75 GPD American Stars RO System, with pump",
        },
        image: "/images/filtration-american-stars-75gpd-pump.webp",
        text: filtrationText,
        composition: [],
      },
      {
        slug: "purewater-400gpd",
        name: {
          fr: "Osmoseur PureWater 400 GPD (3013)",
          en: "400 GPD PureWater RO System 3013",
        },
        image: "/images/filtration-purewater-400gpd.webp",
        text: filtrationText,
        composition: [],
      },
      {
        slug: "purewater-500gpd",
        name: {
          fr: "Osmoseur PureWater 500 GPD",
          en: "500 GPD PureWater RO System",
        },
        image: "/images/filtration-purewater-500gpd.webp",
        text: filtrationText,
        composition: [],
      },
      {
        slug: "purewater-600gpd",
        name: {
          fr: "Osmoseur PureWater 600 GPD (3213)",
          en: "600 GPD PureWater RO System 3213",
        },
        image: "/images/filtration-purewater-600gpd.webp",
        text: filtrationText,
        composition: [],
      },
      {
        slug: "purewater-800gpd",
        name: {
          fr: "Osmoseur PureWater 800 GPD (3413)",
          en: "800 GPD PureWater RO System 3413",
        },
        image: "/images/filtration-purewater-800gpd.webp",
        text: filtrationText,
        composition: [],
      },
    ],
  },
];
