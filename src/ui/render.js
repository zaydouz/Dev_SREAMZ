import logoUrl from "../../logo.png";
import { navigation, products, services } from "../data/content";

const navigationMarkup = (labels) =>
  navigation
    .map(({ key, href }) => `<a href="${href}">${labels[key]}</a>`)
    .join("");

export function renderApp(root, content, language) {
  const productMarkup = products
    .map(
      ({ number, tone, title, description, meta }) => `
    <article class="product product-${tone}">
      <span class="product-number">${number}</span>
      <div><h3>${content.products[title]}</h3><p>${content.products[description]}</p></div>
      <strong>${content.products[meta]}</strong>
    </article>`,
    )
    .join("");
  const serviceMarkup = services
    .map(
      ({ icon, title, description }) =>
        `<article class="service"><span class="service-icon" aria-hidden="true">${icon}</span><h3>${content.services[title]}</h3><p>${content.services[description]}</p></article>`,
    )
    .join("");
  const menuMarkup = content.menu.items
    .map(
      ([name, price]) =>
        `<div><span>${name}</span><strong>${price}</strong></div>`,
    )
    .join("");

  root.innerHTML = `
    <header class="site-header">
      <a class="brand" href="#home" aria-label="STREAMZ home"><img src="${logoUrl}" alt="STREAMZ"></a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-navigation" aria-label="Open menu"><span></span><span></span><span></span></button>
      <nav id="main-navigation" aria-label="Main navigation">${navigationMarkup(content.navigation)}</nav>
      <button class="language-switch" type="button" aria-label="Change language">${content.languageName}<span aria-hidden="true">↗</span></button>
    </header>
    <main>
      <section class="hero" id="home" aria-labelledby="hero-title"><div class="hero-copy"><p class="eyebrow">${content.hero.eyebrow}</p><h1 id="hero-title">${content.hero.title}</h1><p class="hero-text">${content.hero.description}</p><a class="button button-light" href="#products">${content.hero.cta}<span aria-hidden="true">↗</span></a></div><div class="hero-art" role="img" aria-label="${content.hero.alt}"><div class="sun-ring"></div><div class="bottle-shape"><span>STREAMZ</span></div><div class="hero-orbit orbit-one"></div><div class="hero-orbit orbit-two"></div></div></section>
      <section class="stats" aria-label="STREAMZ facts">${content.stats.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join("")}</section>
      <section class="mission section-pad"><div class="section-intro"><p class="eyebrow">${content.mission.eyebrow}</p><h2>${content.mission.title}</h2><p>${content.mission.description}</p></div><div class="principles">${content.principles.map(([number, title, text]) => `<article><span>${number}</span><h3>${title}</h3><p>${text}</p></article>`).join("")}</div></section>
      <section class="story section-pad" id="story"><div class="story-image"><div class="water-mark" aria-hidden="true">S</div><div class="image-caption">WATER STREET NRG<br><small>EST. 2023 · SOUTH AFRICA</small></div></div><div class="story-copy"><p class="eyebrow">${content.story.eyebrow}</p><h2>${content.story.title}</h2><p>${content.story.description}</p><a class="text-link" href="#contact">${content.story.cta} <span aria-hidden="true">↗</span></a></div></section>
      <section class="range section-pad" id="products"><div class="section-heading"><div><p class="eyebrow">${content.productSection.eyebrow}</p><h2>${content.productSection.title}</h2></div><span class="section-index">01 — 04</span></div><div class="product-grid">${productMarkup}</div></section>
      <section class="menu-section section-pad"><div class="menu-heading"><p class="eyebrow">${content.menu.eyebrow}</p><h2>${content.menu.title}</h2><p>${content.menu.note}</p></div><div class="menu-list">${menuMarkup}</div></section>
      <section class="services section-pad" id="services"><div class="section-heading"><div><p class="eyebrow">${content.serviceSection.eyebrow}</p><h2>${content.serviceSection.title}</h2></div></div><div class="service-grid">${serviceMarkup}</div></section>
      <section class="contact" id="contact"><div><p class="eyebrow">${content.contact.eyebrow}</p><h2>${content.contact.title}</h2><p>${content.contact.description}</p></div><a class="button button-dark" href="mailto:${content.contact.email}">${content.contact.cta}<span aria-hidden="true">↗</span></a></section>
    </main>
    <footer><div><img src="${logoUrl}" alt="STREAMZ"><p>${content.footer.tagline}</p></div><a href="mailto:${content.contact.email}">${content.contact.email}</a><small>© 2026 Water Street NRG. ${content.footer.rights}</small></footer>`;

  document.documentElement.lang = language;
  document.title = `STREAMZ | ${content.documentTitle}`;

  const menuToggle = root.querySelector(".menu-toggle");
  const navigationElement = root.querySelector("#main-navigation");
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Open menu" : "Close menu");
    navigationElement.classList.toggle("is-open", !isOpen);
  });
  navigationElement.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
      navigationElement.classList.remove("is-open");
    }
  });
}
