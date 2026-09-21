import "./styles.css";
import { translations } from "./data/content";
import { renderApp } from "./ui/render";

const LANGUAGE_STORAGE_KEY = "streamz-language";
const root = document.querySelector("#app");

function getInitialLanguage() {
  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return savedLanguage in translations ? savedLanguage : "fr";
}

function render(language) {
  renderApp(root, translations[language], language);
  root.querySelector(".language-switch").addEventListener("click", () => {
    const nextLanguage = language === "fr" ? "en" : "fr";
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    render(nextLanguage);
  });
}

render(getInitialLanguage());
