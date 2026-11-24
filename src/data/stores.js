// Magasins STREAMZ. Pour ouvrir un nouveau magasin, ajouter une entree ici :
// le store locator se met a jour automatiquement.
// `gallery` liste les photos du magasin ; vide, le bouton Galerie est masque.

export const stores = [
  {
    id: "roodepoort",
    name: "STREAMZ Roodepoort",
    // Nom de la fiche Google Maps : le repere tombe sur le magasin, pas sur l'immeuble.
    mapsName: "STREAMZ WATER",
    address: "Shop 20, 757 Victoria Ave, Little Falls, Roodepoort, 1735",
    phone: "+27 (78) 123 1829",
    hours: null,
    services: ["shop", "refill", "installation"],
    gallery: [
      "/images/store-roodepoort-front.jpg",
      "/images/store-roodepoort-counter.jpg",
      "/images/store-roodepoort-interior.jpg",
      "/images/store-roodepoort-filling-taps.jpg",
      "/images/store-roodepoort-bottle-rinser.jpg",
    ],
  },
];

export const mapsUrl = (store) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${store.mapsName}, ${store.address}, South Africa`)}`;

export const mapsEmbedUrl = (store) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(`${store.mapsName}, ${store.address}, South Africa`)}&z=15&output=embed`;
