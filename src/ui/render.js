import logoUrl from "../assets/streamz-logo.svg";
import DOMPurify from "dompurify";
import { navigation, services } from "../data/content";
import { categories } from "../data/catalog";
import { stores, mapsUrl, mapsEmbedUrl } from "../data/stores";

const PLACEHOLDER_IMAGE = "/favicon.svg";

// Lien d'appel : uniquement le "+" et les chiffres (ex. tel:+27781231829).
const telHref = (phone) => `tel:${phone.replace(/[^\d+]/g, "")}`;

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
    <div class="hero-photo"><img src="/images/photo-hero-bottle.jpg" alt="${content.hero.alt}" width="1193" height="1689" /></div>
  </section>
  <section class="stats" aria-label="STREAMZ">${content.stats
    .map(
      ([value, label]) =>
        `<div><strong>${value}</strong><span>${label}</span></div>`,
    )
    .join("")}</section>`;

// Bandeau #ChooseToRefill de l'accueil, comme la section #RefillRevolution d'Oasis.
const refillBannerMarkup = (content) => `
  <section class="refill-banner" aria-labelledby="refill-title">
    <div class="refill-photo"><img src="/images/photo-woman-drinking.jpg" alt="${content.refillBanner.alt}" width="672" height="860" loading="lazy" /></div>
    <div class="refill-copy">
      <p class="eyebrow">${content.refillBanner.eyebrow}</p>
      <h2 id="refill-title">${content.refillBanner.title.replace("#ChooseToRefill", "<span>#ChooseToRefill</span>")}</h2>
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
  const details = content.productPage.details[category.detailsType];
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
        ${
          category.products.length > 1
            ? `<div class="variant-picker">
          <p class="variant-label">${content.productPage.variants}</p>
          <div class="variant-list">${category.products
            .map(
              (item) => `
            <a class="variant" href="#/products/${category.slug}/${item.slug}"${item === product ? ' aria-current="page"' : ""}>
              <span class="variant-image">${productImage(item.image, "")}</span>
              <span class="variant-name">${localize(item.name, language)}</span>
            </a>`,
            )
            .join("")}</div>
        </div>`
            : ""
        }
        <button class="button button-primary" type="button" data-dialog="composition-dialog">${details.button}</button>
      </div>
    </article>
    <dialog class="composition-dialog" id="composition-dialog" aria-labelledby="composition-title">
      <div class="composition-header">
        <div>
          <p class="eyebrow">${details.title}</p>
          <h2 id="composition-title">${name}</h2>
        </div>
        <button class="composition-close" type="button" aria-label="${content.productPage.close}">&times;</button>
      </div>
      <dl class="composition-grid">${product.composition
        .map(([label, value]) => {
          const text =
            value === null ? content.pending : localize(value, language);
          // Les valeurs longues (texte) sont affichees plus petit que les chiffres.
          const classes = [
            value === null && "is-pending",
            text.length > 12 && "is-text",
          ]
            .filter(Boolean)
            .join(" ");
          return `<div class="composition-tile"><dd${classes ? ` class="${classes}"` : ""}>${text}</dd><dt>${localize(label, language)}</dt></div>`;
        })
        .join("")}</dl>
    </dialog>
  </section>`;
};

const aboutMarkup = (content) => `
  <section class="about" id="about">
    <div class="about-text">
      ${sectionTitle(content.about.title)}
      <p>${content.about.story}</p>
      <h2>${content.about.commitmentTitle}</h2>
      <p>${content.about.commitment}</p>
      <div class="principles">${content.principles
        .map(
          ([title, text]) =>
            `<article><h3>${title}</h3><p>${text}</p></article>`,
        )
        .join("")}</div>
    </div>
    <div class="about-photo"><img src="/images/photo-glass-pouring.jpg" alt="${content.about.photoAlt}" width="712" height="1280" loading="lazy" /></div>
  </section>`;

// Icones des etapes de purification (traits, couleur heritee).
const PROCESS_ICONS = [
  // Pre-chloration : pipette de dosage
  '<path d="M14 3l7 7M16 5l-9 9-2 5 5-2 9-9"/><path d="M5 21h0"/>',
  // Filtration : filtres
  '<path d="M6 3h12M7 3v4l3 3v11h4V10l3-3V3"/><path d="M10 14h4"/>',
  // Adoucissement : goutte et couches
  '<path d="M12 3s5 5.5 5 9.5a5 5 0 0 1-10 0C7 8.5 12 3 12 3Z"/><path d="M4 21h16M6 18h12"/>',
  // Osmose inverse : membrane
  '<path d="M12 3v18"/><path d="M3 8c2 0 3-2 5-2M3 12h7M3 16c2 0 3 2 5 2"/><path d="M14 12h7m-3-3 3 3-3 3"/>',
  // Desinfection UV : soleil
  '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  // Equilibrage : balance
  '<path d="M12 3v18M7 21h10M5 7h14"/><path d="m5 7-3 6a3 3 0 0 0 6 0L5 7ZM19 7l-3 6a3 3 0 0 0 6 0l-3-6Z"/>',
  // Stockage et controle : bouclier valide
  '<path d="M12 3 5 6v5c0 4.5 3 8.5 7 10 4-1.5 7-5.5 7-10V6l-7-3Z"/><path d="m9 12 2 2 4-4"/>',
];

const processMarkup = (content) => `
  <section class="process section-pad" id="process">
    <div class="section-heading">${sectionTitle(content.process.title)}<p>${content.process.description}</p></div>
    <ol class="process-steps">${content.process.steps
      .map(
        ([title, text], index) => `
      <li class="process-step">
        <button class="process-card" type="button" aria-label="${title}. ${text}">
          <span class="process-inner">
            <span class="process-face process-front">
              <span class="process-number">${String(index + 1).padStart(2, "0")}</span>
              <svg class="process-icon" viewBox="0 0 24 24" aria-hidden="true">${PROCESS_ICONS[index]}</svg>
              <span class="process-title">${title}</span>
            </span>
            <span class="process-face process-back"><span class="process-title">${title}</span>${text}</span>
          </span>
        </button>
      </li>`,
      )
      .join("")}</ol>
    <button class="text-link process-diagram-link" type="button" data-dialog="process-dialog">${content.process.diagram} <span aria-hidden="true">→</span></button>
    <dialog class="composition-dialog process-dialog" id="process-dialog" aria-labelledby="process-dialog-title">
      <div class="composition-header">
        <h2 id="process-dialog-title">${content.process.diagramTitle}</h2>
        <button class="composition-close" type="button" aria-label="${content.productPage.close}">&times;</button>
      </div>
      <div class="process-diagram"><img src="/images/diagram-water-treatment.png" alt="${content.process.diagramAlt}" width="1258" height="646" loading="lazy" /></div>
    </dialog>
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
          <li class="store-card${index === 0 ? " is-selected" : ""}" data-store-id="${store.id}" data-search="${normalize([store.name, store.address].join(" "))}">
            <button class="store-select" type="button" data-map="${mapsEmbedUrl(store)}"><h3>${store.name}</h3></button>
            <p>${store.address}</p>
            <ul class="store-services">${store.services.map((service) => `<li>${labels.serviceNames[service]}</li>`).join("")}</ul>
            <dl>
              <div><dt>${labels.hours}</dt><dd${store.hours ? "" : ' class="is-pending"'}>${store.hours ?? content.pending}</dd></div>
            </dl>
            <div class="store-actions">
              <a class="button button-primary" href="${mapsUrl(store)}" target="_blank" rel="noopener noreferrer">${labels.directions}</a>
              <a class="button button-outline" href="${telHref(store.phone)}">${labels.call} ${store.phone}</a>
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
      <div><dt>${content.contact.phoneLabel}</dt><dd><a href="${telHref(content.contact.phone)}">${content.contact.phone}</a></dd></div>
      <div><dt>${content.contact.addressLabel}</dt><dd>${stores[0].address}</dd></div>
    </dl>
  </section>`;

const footerMarkup = (content) => `
  <footer class="site-footer">
    <div class="footer-brand"><img src="${logoUrl}" alt="STREAMZ" width="200" height="38" loading="lazy" /><p>${content.footer.tagline}</p></div>
    <nav aria-label="Footer">${navigation.map(({ key, href }) => `<a href="${href}">${content.navigation[key]}</a>`).join("")}</nav>
    <div class="footer-contact">
      <a href="mailto:${content.contact.email}">${content.contact.email}</a>
      <a href="${telHref(content.contact.phone)}">${content.contact.phone}</a>
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
        processMarkup(content),
        servicesMarkup(content),
        storesMarkup(content),
        contactMarkup(content),
      ].join("");

export function renderApp(root, content, language, route) {
  root.innerHTML = DOMPurify.sanitize(
    `${headerMarkup(content, route)}<main>${pageMarkup(content, language, route)}</main>${footerMarkup(content)}`,
    {
      ADD_TAGS: ["iframe", "dialog"],
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

  // Fenetres (composition, schema de traitement) : un bouton data-dialog="<id>"
  // ouvre la fenetre ; la croix ou un clic sur le fond flou la ferme.
  root.querySelectorAll("[data-dialog]").forEach((button) => {
    const dialog = root.querySelector(`#${button.dataset.dialog}`);
    button.addEventListener("click", () => dialog.showModal());
  });
  root.querySelectorAll("dialog").forEach((dialog) => {
    dialog
      .querySelector(".composition-close")
      .addEventListener("click", () => dialog.close());
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
  });

  // Cartes du processus : retournees au survol (CSS) ; sur ecran tactile, au toucher.
  if (window.matchMedia("(hover: none)").matches) {
    root.querySelectorAll(".process-card").forEach((card) => {
      card.addEventListener("click", () => card.classList.toggle("is-flipped"));
    });
  }

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
