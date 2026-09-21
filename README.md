# STREAMZ

Site vitrine bilingue (francais / anglais) pour Water Street NRG, construit avec Vite.

## Demarrage

```bash
npm install
npm run dev
```

Le build de production est genere avec `npm run build`.

## Organisation

- `src/main.js` demarre l'application et gere uniquement l'etat de langue.
- `src/data/content.js` contient les traductions, les produits, les services et les prix de demonstration.
- `src/ui/render.js` contient le rendu HTML et ne contient pas de contenu metier.
- `src/styles.css` contient le design responsive.
- `logo.png` est importe comme asset Vite.

Pour ajouter une fonctionnalite, ajouter d'abord ses donnees dans `src/data/content.js`, puis son rendu dans `src/ui/render.js`. Quand le catalogue deviendra achetable, remplacer le tableau `menu.items` par une API et conserver les prix cote serveur.

Le code peut etre reformate avec `npm run format`.

## Backend et securite

Pour la maquette actuelle, un backend n'est pas necessaire. Un hebergement statique suffit, avec un formulaire qui pourra pointer plus tard vers un service de contact.

Pour la future boutique, je recommande un backend dedie des que les utilisateurs, paiements, stocks, livraisons ou comptes entrent en jeu. Il devra notamment:

- exposer une API HTTPS avec validation serveur des donnees;
- ne jamais faire confiance aux prix, roles ou quantites envoyes par le navigateur;
- gerer les sessions via cookies `HttpOnly`, `Secure`, `SameSite` et une protection CSRF;
- utiliser un fournisseur de paiement certifie et ne jamais stocker les donnees de carte;
- appliquer rate limiting, journalisation, CORS strict et secrets uniquement dans les variables d'environnement;
- proteger les routes cote serveur, meme si le frontend masque certains liens.

Pour les redirections, utiliser une liste blanche de chemins internes plutot qu'une URL fournie directement par l'utilisateur. En production, forcer HTTPS, definir une CSP et configurer les headers de securite du reverse proxy.
