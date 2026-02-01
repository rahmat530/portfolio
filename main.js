function toggleDarkMode() {
  document.body.classList.add("dark-mode");
  localStorage.setItem("darkMode", true);
}

function toggleLightMode() {
  document.body.classList.remove("dark-mode");
  localStorage.setItem("darkMode", false);
}

window.addEventListener("DOMContentLoaded", () => {
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
  }

  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });
  }

  if (navLinks) {
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});

/**  Deutsch Sprache */

let translationsData = {};

function applyTranslations(lang) {
  const txt = translationsData[lang] || translationsData.en || {};
  if (!txt.nav) return;
  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);
  $$(".nav-links a").forEach((el, i) => (el.textContent = txt.nav[i]));
  $(".logo").textContent = txt.portfolio;
  $(".home-teaser h4").textContent = txt.title;
  $(".home-teaser > p").textContent = txt.desc;
  $(".links-container a").textContent = txt.email;
  $(".links-container a:last-of-type").textContent = txt.download;
  $(".skill-container h2").textContent = txt.skills;
  $("#projects > h2").textContent = txt.projects;
  $(".projects-card h4").textContent = txt.projTitle;
  $(".projects-card > p:nth-of-type(2)").textContent = txt.projDesc;
  $(".project-links a").textContent = txt.live;
  $("footer > p:first-of-type").textContent = txt.location;
  $(".contact-card h4").textContent = txt.contacts;
  const cps = $$(".contact-card p");
  if (cps[0])
    cps[0].innerHTML = `${txt.emailLabel} <a href="mailto:rahmatullahwahdat07@gmail.com">rahmatullahwahdat07@gmail.com</a>`;
  if (cps[1]) cps[1].textContent = `${txt.phone} 0152-1456-5039`;
  $("footer > p:last-of-type").textContent = txt.footer;
  $$(".lang-btn").forEach((btn) =>
    btn.classList.toggle("active", btn.dataset.lang === lang),
  );
}

function setLanguage(lang) {
  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
}

window.setLanguage = setLanguage;

async function init() {
  try {
    const res = await fetch("translations.json");
    translationsData = await res.json();
  } catch (e) {
    console.error("Failed to load translations.json", e);
    translationsData = {};
  }
  const lang = localStorage.getItem("language") || "en";
  setLanguage(lang);
}

window.addEventListener("DOMContentLoaded", init);
