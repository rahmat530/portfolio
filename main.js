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
  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen);
    });
  }
  // Close mobile menu when a navigation link is clicked
  if (navLinks) {
    navLinks.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        if (navToggle) navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }
});
