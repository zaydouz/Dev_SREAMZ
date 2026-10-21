// Magasins STREAMZ. Pour ouvrir un nouveau magasin, ajouter une entree ici :
// le store locator se met a jour automatiquement.

export const stores = [
  {
    id: "roodepoort",
    name: "STREAMZ Roodepoort",
    address:
      "Corner Victoria and Cascades Roads, Roodepoort, Johannesburg, Gauteng, 1715",
    phone: "+27 (78) 123 1829",
    hours: null,
    services: ["shop", "refill", "installation"],
  },
];

export const mapsUrl = (store) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`;

export const mapsEmbedUrl = (store) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(store.address)}&z=15&output=embed`;
