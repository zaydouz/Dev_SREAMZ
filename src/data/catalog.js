// Catalogue commun aux deux langues : les images ne sont definies qu'une fois.
// Les textes traduits sont des objets { fr, en }. Une valeur `null` dans une
// composition s'affiche "A confirmer" en attendant la fiche complete du client.

// Analyse fournie par le client pour la bouteille de 500 ml.
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

// Memes lignes, valeurs "A confirmer", pour les formats sans analyse fournie.
const pendingWaterAnalysis = waterAnalysis.map(([label]) => [label, null]);

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

const dispenserComposition = (specs) => [
  [
    { fr: "Catégorie", en: "Category" },
    {
      fr: "Refroidisseurs / Distributeurs d’eau",
      en: "Water coolers / Dispensers",
    },
  ],
  [{ fr: "Marque", en: "Brand" }, "Classic / Water Street NRG"],
  [{ fr: "Chauffage", en: "Heating" }, specs.heating ?? null],
  [{ fr: "Refroidissement", en: "Cooling" }, specs.cooling ?? null],
  [{ fr: "Réfrigérant", en: "Refrigerant" }, specs.refrigerant ?? null],
  [{ fr: "Tension", en: "Voltage" }, specs.voltage ?? null],
  [{ fr: "Dimensions", en: "Dimensions" }, specs.dimensions ?? null],
];

export const categories = [
  {
    slug: "water",
    image: "/images/500ml_water.png",
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
        image: "/images/500ml_water.png",
        text: waterText,
        composition: waterComposition(waterAnalysis),
      },
      {
        slug: "1500ml",
        name: { fr: "Eau 1,5 L", en: "Water 1.5 L" },
        image: "/images/1500ml_water.png",
        text: waterText,
        composition: waterComposition(pendingWaterAnalysis),
      },
      {
        slug: "5l",
        name: { fr: "Bidon d’eau 5 L", en: "Water 5 L" },
        image: "/images/5l_water.png",
        text: waterText,
        composition: waterComposition(pendingWaterAnalysis),
      },
    ],
  },
  {
    slug: "refill",
    image: "/images/water_5l.png",
    title: { fr: "Recharge & contenants", en: "Refill & containers" },
    tagline: { fr: "Remplissez en magasin", en: "Refill in store" },
    description: {
      fr: "Bouteilles et bidons réutilisables, à remplir d’eau purifiée STREAMZ dans nos magasins.",
      en: "Reusable bottles and containers, to refill with STREAMZ purified water in our stores.",
    },
    products: [
      {
        slug: "bottle-5l",
        name: { fr: "Bouteille vide 5 L", en: "Bottle 5 L clear" },
        image: "/images/5l_water.png",
        text: {
          fr: "Bouteille transparente réutilisable de 5 L.",
          en: "Reusable 5 L clear bottle.",
        },
        composition: containerComposition("5 L"),
      },
      {
        slug: "bottle-10l",
        name: { fr: "Bouteille vide 10 L", en: "Bottle 10 L clear" },
        image: "",
        text: {
          fr: "Bouteille transparente réutilisable de 10 L.",
          en: "Reusable 10 L clear bottle.",
        },
        composition: containerComposition("10 L"),
      },
      {
        slug: "container-18-9l",
        name: { fr: "Bidon 18,9 L", en: "Water container 18.9 L" },
        image: "/images/water_5l.png",
        text: {
          fr: "Bidon de 18,9 L, compatible avec nos distributeurs.",
          en: "18.9 L container, compatible with our dispensers.",
        },
        composition: containerComposition("18,9 L"),
      },
      {
        slug: "container-10l-handles",
        name: {
          fr: "Bidon 10 L avec poignées",
          en: "Water container 10 L with handles",
        },
        image: "",
        text: {
          fr: "Bidon de 10 L avec poignées, facile à transporter.",
          en: "10 L container with handles, easy to carry.",
        },
        composition: containerComposition("10 L"),
      },
      {
        slug: "container-25l-tap",
        name: {
          fr: "Bidon carré 25 L avec robinet",
          en: "Container 25 L square with tap",
        },
        image: "",
        text: {
          fr: "Bidon carré de 25 L, livré avec robinet.",
          en: "25 L square container, supplied with a tap.",
        },
        composition: containerComposition("25 L"),
      },
      {
        slug: "tap",
        name: { fr: "Robinet pour bidon", en: "Tap for container" },
        image: "",
        text: {
          fr: "Robinet de remplacement pour nos bidons.",
          en: "Replacement tap for our containers.",
        },
        composition: [[{ fr: "Matériau", en: "Material" }, null]],
      },
    ],
  },
  {
    slug: "juice",
    image: "/images/orange_juice.png",
    title: { fr: "Jus", en: "Juice range" },
    tagline: { fr: "De 250 ml à 5 L", en: "From 250 ml to 5 L" },
    description: {
      fr: "Notre gamme de jus STREAMZ, préparée à base d’eau purifiée, est disponible en différents formats (de 250 ml à 5 L).",
      en: "Our STREAMZ juice range made of purified water, available in various pack sizes (from 250 ml to 5 L).",
    },
    products: [
      {
        slug: "orange",
        name: { fr: "Jus d’orange", en: "Orange juice" },
        image: "/images/orange_juice.png",
        text: {
          fr: "Jus d’orange STREAMZ, préparé à base d’eau purifiée.",
          en: "STREAMZ orange juice, made with purified water.",
        },
        composition: [
          [
            { fr: "Base", en: "Base" },
            { fr: "Eau purifiée STREAMZ", en: "STREAMZ purified water" },
          ],
          [{ fr: "Ingrédients", en: "Ingredients" }, null],
          [{ fr: "Formats", en: "Sizes" }, "250 ml – 5 L"],
        ],
      },
      {
        slug: "mango",
        name: { fr: "Jus de mangue", en: "Mango juice" },
        image: "/images/mango_juice.png",
        text: {
          fr: "Jus de mangue STREAMZ, préparé à base d’eau purifiée.",
          en: "STREAMZ mango juice, made with purified water.",
        },
        composition: [
          [
            { fr: "Base", en: "Base" },
            { fr: "Eau purifiée STREAMZ", en: "STREAMZ purified water" },
          ],
          [{ fr: "Ingrédients", en: "Ingredients" }, null],
          [{ fr: "Formats", en: "Sizes" }, "250 ml – 5 L"],
        ],
      },
    ],
  },
  {
    slug: "dispensers",
    image: "/images/Executive Hot and Cold Floorstanding.png",
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
        image: "/images/Executive Hot and Cold Floorstanding.png",
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
        image: "/images/Floor Standing Hot and Cold – Push.png",
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
        image: "/images/Desktop Hot and Cold Dispenser.png",
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
    image: "/images/filtration.png",
    title: { fr: "Filtration d’eau", en: "Water filtration" },
    tagline: { fr: "Sur demande", en: "On request" },
    description: {
      fr: "Des systèmes de filtration avancés pour une eau pure et sûre à portée de main. Nous mettons aussi à disposition notre réseau de prestataires pour les forages et projets industriels.",
      en: "Advanced filtration systems that guarantee pure, safe water at your fingertips. We also avail our network of reliable service providers for borehole requirements and industrial projects.",
    },
    products: [
      {
        slug: "system",
        name: { fr: "Système de filtration", en: "Filtration system" },
        image: "/images/filtration.png",
        text: {
          fr: "Solution de traitement de l’eau sur mesure, étudiée selon votre installation.",
          en: "Tailored water treatment solution, designed around your installation.",
        },
        composition: [
          [{ fr: "Type", en: "Type" }, null],
          [{ fr: "Étapes de filtration", en: "Filtration stages" }, null],
          [
            { fr: "Installation", en: "Installation" },
            { fr: "Par notre équipe", en: "By our team" },
          ],
        ],
      },
    ],
  },
];
