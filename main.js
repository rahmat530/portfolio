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
});
