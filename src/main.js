import "./styles.css";
import { translations } from "./data/content";
import { renderApp } from "./ui/render";

const LANGUAGE_STORAGE_KEY = "streamz-language";
const root = document.querySelector("#app");
let language = getInitialLanguage();
let renderedPage = null;

function getInitialLanguage() {
  try {
    const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return savedLanguage in translations ? savedLanguage : "fr";
  } catch {
    return "fr";
  }
}

// Fiches produit : #/products/<gamme>[/<produit>].
// Tout le reste est l'accueil, et #<section> fait defiler jusqu'a cette section.
function parseRoute(hash) {
  const [page, category, product] = hash.replace(/^#\/?/, "").split("/");
  if (page === "products" && category)
    return { page: "category", category, product };
  return { page: "home", section: page };
}

function render(route) {
  renderApp(root, translations[language], language, route);
  renderedPage = route.page;
  root.querySelector(".language-switch").addEventListener("click", () => {
    language = language === "fr" ? "en" : "fr";
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // La langue reste valable pour la session meme sans stockage.
    }
    render(parseRoute(window.location.hash));
  });
}

function scrollToSection(section) {
  const target = section && document.getElementById(section);
  if (target) target.scrollIntoView();
  else window.scrollTo(0, 0);
}

window.addEventListener("hashchange", () => {
  const route = parseRoute(window.location.hash);
  // Deja sur l'accueil : on defile sans re-rendre (la carte ne se recharge pas).
  if (route.page !== "home" || renderedPage !== "home") render(route);
  scrollToSection(route.section);
});

const initialRoute = parseRoute(window.location.hash);
render(initialRoute);
if (initialRoute.section) scrollToSection(initialRoute.section);
