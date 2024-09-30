// Fonction pour générer une couleur aléatoire
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Fonction pour rendre actif l'élément cliqué de la liste
document.querySelectorAll("#limbo-list .list-group-item").forEach((item) => {
  item.addEventListener("click", function () {
    // Retirer l'état actif de tous les éléments de la liste
    document
      .querySelectorAll("#limbo-list .list-group-item")
      .forEach((el) => el.classList.remove("active"));
    // Ajouter l'état actif à l'élément cliqué
    this.classList.add("active");
  });
});

// Variables pour la barre de progression
let progressValue = 60;
const progressBar = document.getElementById("progress-bar");

// Fonction pour mettre à jour la barre de progression
function updateProgressBar() {
  progressBar.style.width = progressValue + "%";
  progressBar.setAttribute("aria-valuenow", progressValue);
}

// Bouton pour augmenter la progression
document
  .getElementById("progress-forward")
  .addEventListener("click", function () {
    if (progressValue < 100) {
      progressValue += 5; // Incrément de 5%
      updateProgressBar();
    }
  });

// Bouton pour diminuer la progression
document.getElementById("progress-back").addEventListener("click", function () {
  if (progressValue > 0) {
    progressValue -= 5; // Décrément de 5%
    updateProgressBar();
  }
});

// Détecter les touches D, G, C pour afficher le récapitulatif
let keySequence = [];
const keyOrder = ["d", "g", "c"];

document.addEventListener("keydown", function (event) {
  keySequence.push(event.key.toLowerCase());
  if (keySequence.slice(-3).join("") === keyOrder.join("")) {
    showFormModal();
    keySequence = [];
  }
});

// Fonction pour afficher la modale avec les infos du formulaire
function showFormModal() {
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;
  const dogecoin = document.getElementById("dogecoin").value;
  const url = document.getElementById("url").value;

  const formInfo = `
    <strong>Login:</strong> ${login} <br>
    <strong>Mot de Passe:</strong> ${password} <br>
    <strong>DogeCoin:</strong> ${dogecoin} <br>
    <strong>URL:</strong> ${url}
  `;

  document.getElementById("formInfo").innerHTML = formInfo;
  new bootstrap.Modal(document.getElementById("formModal")).show();
}

// Validation du formulaire et changement de couleur du spinner sans casser l'animation
document
  .getElementById("rightForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche l'envoi classique du formulaire

    const email = document.getElementById("email").value;
    const password = document.getElementById("password2").value;

    if (email && password) {
      const spinner = document.querySelector(".spinner-border");
      const randomColor = getRandomColor();

      // Changer la couleur de la bordure supérieure du spinner pour ne pas casser l'animation
      spinner.style.borderTopColor = randomColor;
    } else {
      alert("Veuillez remplir les champs email et mot de passe.");
    }
  });

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

// Ajouter un écouteur d'événement au bouton Rebooter
document
  .getElementById("rebootButton")
  .addEventListener("click", rebooterLeMonde);
