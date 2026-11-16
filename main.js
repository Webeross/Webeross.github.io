// Tema claro/escuro: segue o sistema; o botão alterna e a escolha fica salva neste navegador.
(function () {
  const root = document.documentElement;
  let saved = null;
  try { saved = localStorage.getItem("tema"); } catch (_) { /* navegação privada */ }
  if (saved === "light" || saved === "dark") root.dataset.theme = saved;

  const button = document.getElementById("theme");
  if (button) {
    button.addEventListener("click", function () {
      const dark = root.dataset.theme
        ? root.dataset.theme === "dark"
        : window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.dataset.theme = dark ? "light" : "dark";
      try { localStorage.setItem("tema", root.dataset.theme); } catch (_) { /* ignora */ }
    });
  }

  const year = document.getElementById("ano");
  if (year) year.textContent = String(new Date().getFullYear());
})();
