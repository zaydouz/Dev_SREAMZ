import logoUrl from "../assets/streamz-logo.svg";
import DOMPurify from "dompurify";
import { navigation, services } from "../data/content";
import { categories } from "../data/catalog";
import { stores, mapsUrl, mapsEmbedUrl } from "../data/stores";

const PLACEHOLDER_IMAGE = "/favicon.svg";

// Les textes du catalogue sont soit une chaine, soit un objet { fr, en }.
const localize = (value, language) =>
  value && typeof value === "object" ? value[language] : value;

const productImage = (src, alt, className = "") =>
  `<img class="${className}${src ? "" : " is-placeholder"}" src="${src || PLACEHOLDER_IMAGE}" alt="${alt}" loading="lazy" />`;

const sectionTitle = (title) => `<h2 class="section-title">${title}</h2>`;

const normalize = (text) =>
  text.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

const headerMarkup = (content, route) => `
  <header class="site-header">
    <a class="brand" href="#home" aria-label="STREAMZ"><img src="${logoUrl}" alt="STREAMZ – Water for life and living." width="220" height="42" /></a>
    <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="main-navigation" aria-label="Menu"><span></span><span></span><span></span></button>
    <nav id="main-navigation" aria-label="Navigation">${navigation
      .map(
        ({ key, href }) =>
          `<a href="${href}"${key === "products" && route.page === "category" ? ' aria-current="page"' : ""}>${content.navigation[key]}</a>`,
      )
      .join("")}</nav>
    <button class="language-switch" type="button">${content.languageName}</button>
  </header>`;

const heroMarkup = (content) => `
  <section class="hero" id="home" aria-labelledby="hero-title">
    <div class="hero-copy">
      <img class="hero-logo" src="${logoUrl}" alt="STREAMZ – Water for life and living." width="460" height="88" />
      <h1 id="hero-title">${content.hero.title}</h1>
      <p class="hero-text">${content.hero.description}</p>
      <div class="hero-actions">
        <a class="button button-primary" href="#products">${content.hero.cta}</a>
        <a class="button button-outline" href="#stores">${content.hero.secondary}</a>
      </div>
    </div>
    <div class="hero-photo"><img src="/images/hero-streamz.jpg" alt="${content.hero.alt}" width="1193" height="1689" /></div>
  </section>
  <section class="stats" aria-label="STREAMZ">${content.stats
    .map(
      ([value, label]) =>
        `<div><strong>${value}</strong><span>${label}</span></div>`,
    )
    .join("")}</section>`;

// Bandeau #ChooseToRefill de l'accueil, comme la section #RefillRevolution d'Oasis.
const refillBannerMarkup = (content) => `
  <section class="refill-banner section-pad" aria-labelledby="refill-title">
    <div>
      <p class="eyebrow">${content.refillBanner.eyebrow}</p>
      <h2 id="refill-title">${content.refillBanner.title.replace("#ChooseToRefill", "<span>#ChooseToRefill</span>")}</h2>
    </div>
    <div>
      ${content.refillBanner.paragraphs.map((text) => `<p>${text}</p>`).join("")}
      <div class="hero-actions">
        <a class="button button-light" href="#/products/refill">${content.refillBanner.cta}</a>
        <a class="button button-outline-light" href="#stores">${content.refillBanner.secondary}</a>
      </div>
    </div>
  </section>`;

const categoriesMarkup = (content, language) => `
  <section class="categories section-pad" id="products">
    <div class="section-heading">${sectionTitle(content.productSection.title)}<p>${content.productSection.description}</p></div>
    <div class="category-grid">${categories
      .map(
        ({ slug, image, title, tagline }) => `
        <a class="category-card" href="#/products/${slug}">
          <div class="category-image">${productImage(image, localize(title, language))}</div>
          <h3>${localize(title, language)}</h3>
          <p>${localize(tagline, language)}</p>
          <span class="category-link">${content.productSection.explore} <span aria-hidden="true">→</span></span>
        </a>`,
      )
      .join("")}</div>
  </section>`;

const productPageMarkup = (content, language, categorySlug, productSlug) => {
  const category = categories.find(({ slug }) => slug === categorySlug);
  const product =
    category?.products.find(({ slug }) => slug === productSlug) ??
    category?.products[0];
  if (!category || !product) {
    return `<section class="section-pad not-found"><p>${content.productPage.notFound}</p><a class="button button-primary" href="#products">${content.productPage.back}</a></section>`;
  }
  const categoryTitle = localize(category.title, language);
  const name = localize(product.name, language);
  return `
  <section class="product-page section-pad">
    <nav class="breadcrumb" aria-label="Breadcrumb"><a href="#products">${content.navigation.products}</a><span aria-hidden="true">/</span><a href="#/products/${category.slug}">${categoryTitle}</a></nav>
    <article class="product-sheet">
      <div class="product-sheet-image">${productImage(product.image, name)}</div>
      <div class="product-sheet-info">
        <p class="eyebrow">${categoryTitle}</p>
        <h1 class="section-title">${name}</h1>
        <p class="product-sheet-text">${localize(product.text, language)}</p>
        <h2>${content.productPage.composition}</h2>
        <dl class="composition">${product.composition
          .map(
            ([label, value]) =>
              `<div><dt>${localize(label, language)}</dt><dd${value === null ? ' class="is-pending"' : ""}>${value === null ? content.pending : localize(value, language)}</dd></div>`,
          )
          .join("")}</dl>
      </div>
    </article>
    ${
      category.products.length > 1
        ? `<div class="product-range">
      <h2>${content.productPage.range}</h2>
      <div class="range-list">${category.products
        .map(
          (item) => `
        <a class="range-item" href="#/products/${category.slug}/${item.slug}"${item === product ? ' aria-current="page"' : ""}>
          <div class="range-image">${productImage(item.image, localize(item.name, language))}</div>
          <span>${localize(item.name, language)}</span>
        </a>`,
        )
        .join("")}</div>
    </div>`
        : ""
    }
  </section>`;
};

const aboutMarkup = (content) => `
  <section class="about section-pad" id="about">
    <div class="about-intro">
      ${sectionTitle(content.about.title)}
      <p>${content.about.story}</p>
    </div>
    <div class="commitment">
      <h2>${content.about.commitmentTitle}</h2>
      <p>${content.about.commitment}</p>
    </div>
    <div class="principles">${content.principles
      .map(
        ([title, text]) => `<article><h3>${title}</h3><p>${text}</p></article>`,
      )
      .join("")}</div>
  </section>`;

const servicesMarkup = (content) => `
  <section class="services section-pad" id="services">
    <div class="section-heading">${sectionTitle(content.serviceSection.title)}</div>
    <div class="service-grid">${services
      .map(({ key, href }) => {
        const [title, text] = content.services[key];
        return `<a class="service" href="${href}"><h3>${title}</h3><p>${text}</p><span class="category-link" aria-hidden="true">→</span></a>`;
      })
      .join("")}</div>
  </section>`;

const storesMarkup = (content) => {
  const labels = content.stores;
  return `
  <section class="stores section-pad" id="stores">
    <div class="section-heading">${sectionTitle(labels.title)}<p>${labels.description}</p></div>
    <div class="locator">
      <div class="locator-panel">
        <label class="locator-search"><span>${labels.searchLabel}</span><input type="search" placeholder="${labels.search}" autocomplete="postal-code" /></label>
        <p class="locator-count" aria-live="polite">${labels.count(stores.length)}</p>
        <ul class="store-list">${stores
          .map(
            (store, index) => `
          <li class="store-card${index === 0 ? " is-selected" : ""}" data-store-id="${store.id}" data-search="${normalize([store.name, store.address, ...store.deliveryAreas].join(" "))}">
            <button class="store-select" type="button" data-map="${mapsEmbedUrl(store)}"><h3>${store.name}</h3></button>
            <p>${store.address}</p>
            <ul class="store-services">${store.services.map((service) => `<li>${labels.serviceNames[service]}</li>`).join("")}</ul>
            <dl>
              <div><dt>${labels.hours}</dt><dd${store.hours ? "" : ' class="is-pending"'}>${store.hours ?? content.pending}</dd></div>
              <div><dt>${labels.delivery}</dt><dd>${store.deliveryAreas.length ? store.deliveryAreas.join(", ") : labels.deliveryAreasPending}</dd></div>
            </dl>
            <div class="store-actions">
              <a class="button button-primary" href="${mapsUrl(store)}" target="_blank" rel="noopener noreferrer">${labels.directions}</a>
              <a class="button button-outline" href="tel:${store.phone.replace(/\s/g, "")}">${labels.call} ${store.phone}</a>
            </div>
          </li>`,
          )
          .join("")}</ul>
        <p class="locator-empty" hidden>${labels.noResult}</p>
      </div>
      <div class="locator-map"><iframe title="${labels.mapTitle}" src="${mapsEmbedUrl(stores[0])}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
    </div>
  </section>`;
};

const contactMarkup = (content) => `
  <section class="contact section-pad" id="contact">
    <div>
      ${sectionTitle(content.contact.title)}
      <p>${content.contact.description}</p>
      <a class="button button-light" href="mailto:${content.contact.email}">${content.contact.cta}</a>
    </div>
    <dl class="contact-details">
      <div><dt>${content.contact.emailLabel}</dt><dd><a href="mailto:${content.contact.email}">${content.contact.email}</a></dd></div>
      <div><dt>${content.contact.phoneLabel}</dt><dd><a href="tel:${content.contact.phone.replace(/\s/g, "")}">${content.contact.phone}</a></dd></div>
      <div><dt>${content.contact.addressLabel}</dt><dd>${stores[0].address}</dd></div>
    </dl>
  </section>`;

const footerMarkup = (content) => `
  <footer class="site-footer">
    <div class="footer-brand"><img src="${logoUrl}" alt="STREAMZ" width="200" height="38" loading="lazy" /><p>${content.footer.tagline}</p></div>
    <nav aria-label="Footer">${navigation.map(({ key, href }) => `<a href="${href}">${content.navigation[key]}</a>`).join("")}</nav>
    <div class="footer-contact">
      <a href="mailto:${content.contact.email}">${content.contact.email}</a>
      <a href="tel:${content.contact.phone.replace(/\s/g, "")}">${content.contact.phone}</a>
      <span>${stores[0].address}</span>
    </div>
    <small>© ${new Date().getFullYear()} ${content.company.name} · ${content.footer.registration} ${content.company.registration} · ${content.footer.vat} ${content.company.vat} · ${content.footer.rights}</small>
  </footer>`;

// Tout le site tient sur l'accueil ; seules les fiches produit ont leur propre vue.
const pageMarkup = (content, language, route) =>
  route.page === "category"
    ? productPageMarkup(content, language, route.category, route.product)
    : [
        heroMarkup(content),
        refillBannerMarkup(content),
        categoriesMarkup(content, language),
        aboutMarkup(content),
        servicesMarkup(content),
        storesMarkup(content),
        contactMarkup(content),
      ].join("");

export function renderApp(root, content, language, route) {
  root.innerHTML = DOMPurify.sanitize(
    `${headerMarkup(content, route)}<main>${pageMarkup(content, language, route)}</main>${footerMarkup(content)}`,
    {
      ADD_TAGS: ["iframe"],
      ADD_ATTR: ["target", "loading", "referrerpolicy"],
    },
  );

  document.documentElement.lang = language;
  document.title = `STREAMZ | ${content.documentTitle}`;

  const menuToggle = root.querySelector(".menu-toggle");
  const navigationElement = root.querySelector("#main-navigation");
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navigationElement.classList.toggle("is-open", !isOpen);
  });
  navigationElement.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      navigationElement.classList.remove("is-open");
    }
  });

  root
    .querySelectorAll("img.is-placeholder")
    .forEach((image) => image.removeAttribute("loading"));
  root.querySelectorAll("main img:not(.is-placeholder)").forEach((image) => {
    image.addEventListener(
      "error",
      () => {
        image.src = PLACEHOLDER_IMAGE;
        image.classList.add("is-placeholder");
      },
      { once: true },
    );
  });

  const locator = root.querySelector(".locator");
  if (locator) {
    const cards = [...locator.querySelectorAll(".store-card")];
    const map = locator.querySelector(".locator-map iframe");
    const count = locator.querySelector(".locator-count");
    const empty = locator.querySelector(".locator-empty");
    locator
      .querySelector(".locator-search input")
      .addEventListener("input", (event) => {
        const query = normalize(event.target.value.trim());
        const visible = cards.filter((card) => {
          card.hidden = query !== "" && !card.dataset.search.includes(query);
          return !card.hidden;
        });
        count.textContent = content.stores.count(visible.length);
        empty.hidden = visible.length > 0;
      });
    locator.addEventListener("click", (event) => {
      const button =
        event.target instanceof Element &&
        event.target.closest(".store-select");
      if (!button) return;
      cards.forEach((card) =>
        card.classList.toggle("is-selected", card.contains(button)),
      );
      map.src = button.dataset.map;
    });
  }
}
