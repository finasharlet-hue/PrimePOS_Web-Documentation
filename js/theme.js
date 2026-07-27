(function(){
  const THEMES = ["default", "dark"];
  const saved = localStorage.getItem("pp-theme");
  const initial = THEMES.includes(saved) ? saved : "default";
  document.documentElement.setAttribute("data-theme", initial);
  document.documentElement.setAttribute("data-bs-theme", initial === "dark" ? "dark" : "light");

  function applyTheme(theme){
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-bs-theme", theme === "dark" ? "dark" : "light");
    localStorage.setItem("pp-theme", theme);
    document.querySelectorAll(".pp-theme-switch [data-theme-btn]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.themeBtn === theme);
    });
  }

  window.addEventListener("DOMContentLoaded", () => {
    applyTheme(document.documentElement.getAttribute("data-theme") || "default");
    document.querySelectorAll(".pp-theme-switch [data-theme-btn]").forEach(btn => {
      btn.addEventListener("click", () => applyTheme(btn.dataset.themeBtn));
    });
  });
})();
