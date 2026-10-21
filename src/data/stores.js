// Magasins STREAMZ. Pour ouvrir un nouveau magasin, ajouter une entree ici :
// le store locator et la partie livraison se mettent a jour automatiquement.
// `deliveryAreas` liste les quartiers / villes livres depuis ce magasin.

export const stores = [
  {
    id: "roodepoort",
    name: "STREAMZ Roodepoort",
    address:
      "Corner Victoria and Cascades roads, Roodepoort, Johannesburg, Gauteng, 1715",
    phone: "078 123 1829",
    hours: null,
    services: ["shop", "refill", "delivery", "installation"],
    deliveryAreas: [],
  },
];

export const mapsUrl = (store) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.address)}`;

export const mapsEmbedUrl = (store) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(store.address)}&z=15&output=embed`;
