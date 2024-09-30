// Citations de Blade Runner
const quotes = [
  "Tous ces moments se perdront dans l'oubli, comme des larmes dans la pluie.",
  "J'ai vu tant de choses que vous, humains, ne pourriez pas croire.",
  "La lumière qui brûle deux fois plus fort brûle deux fois moins longtemps.",
  "C'est toute la différence entre nous, vous croyez que je n'ai pas de sentiments.",
];

// Fonction pour afficher une citation aléatoire
function rebooterLeMonde() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("jumbotron-text").innerText = randomQuote;
}

// Ajoute un écouteur d'événement au bouton Rebooter
document
  .getElementById("rebootButton")
  .addEventListener("click", rebooterLeMonde);

// Contenu pour la pagination
const pageContents = [
  "Contenu de la page 1 : Bienvenue sur la première page. Cette section présente une introduction au monde des papillons.",
  "Contenu de la page 2 : Vous êtes maintenant sur la deuxième page. Ici, nous explorons la diversité des espèces de papillons.",
  "Contenu de la page 3 : Dernière page ! Découvrez comment élever et prendre soin de vos propres papillons.",
];

// Fonction pour changer le contenu selon la pagination
function changePage(pageIndex) {
  document.getElementById("jumbotron-text").innerText = pageContents[pageIndex];
}

// Écouteurs d'événements pour les boutons de pagination
document.getElementById("page1").addEventListener("click", function () {
  changePage(0);
});
document.getElementById("page2").addEventListener("click", function () {
  changePage(1);
});
document.getElementById("page3").addEventListener("click", function () {
  changePage(2);
});
