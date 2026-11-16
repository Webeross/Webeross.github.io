// Ano do rodapé. O resto do site é HTML e CSS puros.
(function () {
  var year = document.getElementById("ano");
  if (year) year.textContent = String(new Date().getFullYear());
})();
