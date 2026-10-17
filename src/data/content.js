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
    tone: "1",
    title: "purifiedWater",
    description: "purifiedWaterDescription",
    meta: "purifiedWaterMeta",
    menuKey: "water",
    image: "",
  },
  {
    number: "02",
    tone: "2",
    title: "dispensers",
    description: "dispensersDescription",
    meta: "dispensersMeta",
    menuKey: "dispensers",
    image: "",
  },
  {
    number: "03",
    tone: "3",
    title: "juice",
    description: "juiceDescription",
    meta: "juiceMeta",
    menuKey: "juice",
    image: "",
  },
  {
    number: "04",
    tone: "4",
    title: "filtration",
    description: "filtrationDescription",
    meta: "filtrationMeta",
    image: "",
  },
];

export const services = [
  { icon: "▱", title: "packaging", description: "packagingDescription" },
  { icon: "◒", title: "delivery", description: "deliveryDescription" },
  {
    icon: "✦",
    title: "customBottles",
    description: "customBottlesDescription",
  },
];

const shared = {
  contact: { email: "info@waterstreetnrg.co.za" },
};

export const translations = {
  fr: {
    ...shared,
    languageName: "English",
    documentTitle: "Votre source fiable pour une eau pure et rafraîchissante",
    navigation: {
      home: "Accueil",
      story: "Notre histoire",
      products: "Produits",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      eyebrow: "L’eau, source de vie",
      title: "Votre source fiable pour une eau pure et rafraîchissante",
      description:
        "Chez Water Street NRG, nous nous engageons à offrir aux communautés un accès à l’eau propre, pure et rafraîchissante. Notre mission est de fournir des produits et services d’eau de qualité supérieure qui, non seulement étanchent votre soif, mais améliorent également votre bien-être général.",
      cta: "Voir notre gamme",
      alt: "Illustration d’une bouteille d’eau STREAMZ",
    },
    stats: [
      ["2023", "Fondée en"],
      ["SANS 241", "Norme qualité"],
      ["3", "Principes d’engagement"],
    ],
    mission: {
      eyebrow: "Water Street NRG",
      title: "Notre engagement",
      description:
        "Chez Water Street NRG, nous comprenons l’importance de l’eau comme élément fondamental de la vie. C’est pourquoi nous avons soigneusement conçu notre entreprise pour répondre aux besoins variés de nos clients. Notre engagement repose sur trois principes essentiels :",
    },
    principles: [
      [
        "01",
        "Assurance qualité",
        "Nous respectons les normes les plus élevées de purification et de traitement de l’eau afin de garantir que notre produit soit d’une qualité et d’une pureté irréprochables. De plus, nos infrastructures de pointe et nos procédures rigoureuses de contrôle qualité vous assurent le meilleur. La qualité de notre eau est vérifiée par des laboratoires accrédités selon les exigences de la norme SANS 241.",
      ],
      [
        "02",
        "Satisfaction client",
        "Votre satisfaction est au cœur de nos activités. Nous faisons quotidiennement tout notre possible pour écouter vos besoins et proposer des solutions personnalisées qui dépassent vos attentes. Notre équipe amicale et compétente est toujours prête à vous aider.",
      ],
      [
        "03",
        "Impact communautaire",
        "Nous croyons en l’importance de redonner aux communautés que nous servons. Nos pratiques durables et notre conscience environnementale reflètent notre engagement à préserver la ressource la plus précieuse de notre planète — l’eau.",
      ],
    ],
    story: {
      eyebrow: "Notre aventure",
      title: "Une vision simple mais puissante.",
      description:
        "Fondée en 2023, notre aventure a commencé avec une vision simple mais puissante : rendre l’eau potable de haute qualité accessible à tous. Au fil du temps, nous voulons que notre entreprise devienne un symbole de pureté et de fiabilité.",
      cta: "Rejoignez notre aventure",
    },
    productSection: {
      eyebrow: "Notre offre",
      title: "Notre gamme de produits et services",
    },
    products: {
      purifiedWater: "Eau potable purifiée",
      purifiedWaterDescription:
        "Notre produit phare est une eau purifiée cristalline, disponible en plusieurs formats pour répondre à vos besoins quotidiens.",
      purifiedWaterMeta: "Plusieurs formats",
      dispensers: "Distributeurs d’eau",
      dispensersDescription:
        "Nous proposons une gamme de distributeurs d’eau pour les maisons, bureaux et entreprises, garantissant un accès facile à l’eau fraîche à tout moment.",
      dispensersMeta: "Maisons & bureaux",
      juice: "Jus",
      juiceDescription:
        "Notre gamme de jus, préparée à base d’eau purifiée, est disponible en différents formats (de 250 ml à 5 L).",
      juiceMeta: "De 250 ml à 5 L",
      filtration: "Systèmes de filtration d’eau",
      filtrationDescription:
        "Pour ceux qui recherchent des solutions complètes de traitement de l’eau, nous proposons des systèmes de filtration avancés garantissant une eau pure et sûre à portée de main. Nous pouvons également mettre à disposition notre réseau de prestataires de confiance pour les forages et projets industriels sur demande.",
      filtrationMeta: "Sur demande",
    },
    menu: {
      eyebrow: "Tarifs",
      title: "Le menu STREAMZ",
      note: "Prix en rands sud-africains (ZAR). Contactez-nous pour les disponibilités et la livraison.",
      empty: "Les tarifs de cette catégorie seront bientôt disponibles.",
      sections: [
        {
          key: "water",
          title: "Eau potable",
          items: [
            ["Eau 500 ml", "R6.00", "/images/500ml_water.png"],
            ["Eau 500 ml — pack de 6", "R33.00", ""],
            ["Eau 500 ml — pack de 12", "R66.00", ""],
            ["Eau 1,5 L", "R12.00", "/images/1500ml_water.png"],
            ["Bouteille vide 5 L", "R20.00", ""],
            ["Bouteille vide 10 L", "R38.00", ""],
            ["Bidon 18,9 L", "R121.00", ""],
            ["Bidon avec poignées 10 L", "R99.00", ""],
            ["Bidon carré avec robinet 25 L", "R275.00", ""],
            ["Robinet", "R35.00", ""],
          ],
        },
        {
          key: "juice",
          title: "Jus",
          items: [
            ["Jus d’orange", "Prix sur demande", "/images/orange_juice.png"],
            ["Jus de mangue", "Prix sur demande", "/images/mango_juice.png"],
          ],
        },
        {
          key: "dispensers",
          title:
            "Distributeur sur pied Executive, eau chaude et froide, sans contact",
          items: [],
          details: {
            image: "/images/Executive Hot and Cold Floorstanding.png",
            category: "Refroidisseurs / Distributeurs d’eau",
            brand: "Classic / Water Street NRG",
            heating: "85-95 °C, 500 W",
            cooling: "5-10 °C, 90 W",
            refrigerant: "R134a",
            voltage: "220-240 V",
            dimensions: "L 34 cm ; l 33 cm ; H 98 cm",
            features: [
              "Compresseur de refroidissement",
              "Réservoirs chaud et froid en acier inoxydable de qualité alimentaire",
              "Compresseur silencieux, haute performance et longue durée de vie",
              "Installation et entretien faciles",
              "Pièces en plastique ABS antibactérien",
            ],
          },
        },
      ],
    },
    serviceSection: { eyebrow: "Autres services", title: "Nos services" },
    services: {
      packaging: "Matériaux d’emballage",
      packagingDescription: "Produits plastiques, sans BPA.",
      delivery: "Livraison et installation",
      deliveryDescription:
        "Nous disposons d’un service dédié à l’installation et à la livraison de nos produits. N’hésitez pas à nous consulter.",
      customBottles: "Bouteilles personnalisées",
      customBottlesDescription:
        "Nous pouvons personnaliser vos bouteilles pour rendre vos célébrations vraiment uniques (anniversaires, mariages, événements d’entreprise, etc.).",
    },
    contact: {
      ...shared.contact,
      eyebrow: "Rejoignez notre aventure",
      title: "Faites la différence avec STREAMZ",
      description:
        "Chez Water Street NRG, nous vous invitons à participer à notre mission pour faire la différence grâce à l’eau. Découvrez le goût de la pureté et la garantie de la qualité. Ensemble, parions sur un avenir plus sain et plus durable.",
      cta: "Nous contacter",
    },
    footer: {
      tagline: "Quand pureté rime avec commodité.",
      rights: "Tous droits réservés.",
    },
  },
  en: {
    ...shared,
    languageName: "Français",
    documentTitle: "Your Trusted Source for Pure, Refreshing Water",
    navigation: {
      home: "Home",
      story: "Our story",
      products: "Products",
      services: "Services",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Water for life and living",
      title: "Your Trusted Source for Pure, Refreshing Water",
      description:
        "At Water Street NRG, we are committed to providing communities with access to clean, pure, and refreshing water solutions. We have set out on a mission to deliver premium quality water products and services that not only quench your thirst but also enhance your overall well-being.",
      cta: "Explore our range",
      alt: "Illustration of a STREAMZ water bottle",
    },
    stats: [
      ["2023", "Established"],
      ["SANS 241", "Quality standard"],
      ["3", "Core principles"],
    ],
    mission: {
      eyebrow: "Water Street NRG",
      title: "Our Commitment",
      description:
        "At Water Street NRG, we understand the significance of water as a fundamental element of life. With this understanding, we have meticulously designed our business to cater to the diverse needs of our customers. Our commitment is built on three core principles:",
    },
    principles: [
      [
        "01",
        "Quality Assurance",
        "We adhere to the highest standards of water purification and treatment to ensure that every drop we provide is of the utmost quality and purity. Our state-of-the-art facility and rigorous quality control processes guarantee that you receive nothing but the best. Our water quality is checked by accredited laboratories against SANS 241 requirements.",
      ],
      [
        "02",
        "Customer Satisfaction",
        "Your satisfaction is at the heart of our operations. We go the extra mile to listen to your needs and deliver personalized solutions that exceed your expectations. Our friendly and knowledgeable team is always ready to assist you.",
      ],
      [
        "03",
        "Community Impact",
        "We believe in giving back to the communities we serve. Our sustainable practices and environmental consciousness reflect our commitment to preserving our planet’s most precious resource — water.",
      ],
    ],
    story: {
      eyebrow: "Our journey",
      title: "A simple yet powerful vision.",
      description:
        "Established in 2023, our journey began with a simple yet powerful vision: to make high-quality drinking water accessible to everyone. Over the years, we want our company to stand as a symbol of purity and reliability.",
      cta: "Join our journey",
    },
    productSection: {
      eyebrow: "Our offering",
      title: "Our Range of Products and Services",
    },
    products: {
      purifiedWater: "Purified Drinking Water",
      purifiedWaterDescription:
        "Our flagship product is crystal-clear purified water, available in various sizes to meet your daily hydration needs.",
      purifiedWaterMeta: "Various sizes",
      dispensers: "Water Dispensers",
      dispensersDescription:
        "We offer a range of water dispensers designed for homes, offices, and businesses, ensuring easy access to refreshing water at any time.",
      dispensersMeta: "Homes & offices",
      juice: "Juice range",
      juiceDescription:
        "Our STREAMZ juice range made of purified water available in various pack sizes (from 250 ml to 5 L).",
      juiceMeta: "From 250 ml to 5 L",
      filtration: "Water Filtration Systems",
      filtrationDescription:
        "For those seeking comprehensive water treatment solutions, we provide advanced filtration systems that guarantee pure, safe water at your fingertips. We will also avail our network of reliable service providers upon request for borehole requirements and industrial projects.",
      filtrationMeta: "On request",
    },
    menu: {
      eyebrow: "Pricing",
      title: "The STREAMZ Menu",
      note: "Prices in South African rand (ZAR). Contact us for availability and delivery.",
      empty: "Pricing for this category will be available soon.",
      sections: [
        {
          key: "water",
          title: "Drinking water",
          items: [
            ["Water 500 ml", "R6.00", "/images/500ml_water.png"],
            ["Water 500 ml 6 pack", "R33.00", ""],
            ["Water 500 ml 12 pack", "R66.00", ""],
            ["Water 1.5 L", "R12.00", "/images/1500ml_water.png"],
            ["Bottle 5 L clear", "R20.00", ""],
            ["Bottle 10 L clear", "R38.00", ""],
            ["Water container 18.9 L", "R121.00", ""],
            ["Water container 10 L with handles", "R99.00", ""],
            ["Container 25 L square with tap", "R275.00", ""],
            ["Tap for container", "R35.00", ""],
          ],
        },
        {
          key: "juice",
          title: "Juices",
          items: [
            ["Orange juice", "Price on request", "/images/orange_juice.png"],
            ["Mango juice", "Price on request", "/images/mango_juice.png"],
          ],
        },
        {
          key: "dispensers",
          title: "Executive Hot and Cold Floorstanding Non-Touch Dispenser",
          items: [],
          details: {
            image: "/images/Executive Hot and Cold Floorstanding.png",
            category: "Water coolers / Dispensers",
            brand: "Classic / Water Street NRG",
            heating: "85-95 °C, 500 W",
            cooling: "5-10 °C, 90 W",
            refrigerant: "R134a",
            voltage: "220-240 V",
            dimensions: "L 34 cm; W 33 cm; H 98 cm",
            features: [
              "Compressor cooling",
              "Hot and cold tanks in food-grade stainless steel",
              "Low-noise, high-performance and long-life compressor",
              "Easy installation and maintenance",
              "Plastic parts made of antibacterial ABS materials",
            ],
          },
        },
      ],
    },
    serviceSection: { eyebrow: "Our Services", title: "Beyond water" },
    services: {
      packaging: "Packaging materials",
      packagingDescription: "BPA free plastic products.",
      delivery: "Delivery and installation",
      deliveryDescription:
        "We have a dedicated department for installation and delivery of our products, please ask us!",
      customBottles: "Personalized bottles",
      customBottlesDescription:
        "We can tailor make products for you to make your celebrations really special (birthdays, weddings, company events etc.).",
    },
    contact: {
      ...shared.contact,
      eyebrow: "Join us",
      title: "Discover the difference with STREAMZ",
      description:
        "At Water Street NRG, we invite you to be a part of our mission to make a difference through water. Join us in experiencing the taste of purity and the assurance of quality. Together, we can raise a glass to a healthier, more sustainable future.",
      cta: "Contact us",
    },
    footer: {
      tagline: "Where Purity Meets Convenience.",
      rights: "All rights reserved.",
    },
  },
};
