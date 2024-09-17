document.addEventListener("DOMContentLoaded", function() {
    // Validation du formulaire d'inscription
    document.getElementById("inscriptionForm")?.addEventListener("submit", function(e) {
        e.preventDefault();

        let isValid = true;

        // Vérification du nom
        const nom = document.getElementById("nom").value;
        if (nom.length < 2) {
            document.getElementById("error-nom").textContent = "Nom trop court";
            isValid = false;
        } else {
            document.getElementById("error-nom").textContent = "";
        }

        // Vérification du prénom
        const prenom = document.getElementById("prenom").value;
        if (prenom.length < 2) {
            document.getElementById("error-prenom").textContent = "Prénom trop court";
            isValid = false;
        } else {
            document.getElementById("error-prenom").textContent = "";
        }

        // Vérification de l'email
        const email = document.getElementById("email").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("error-email").textContent = "Email non valide";
            isValid = false;
        } else {
            document.getElementById("error-email").textContent = "";
        }

        // Vérification du mot de passe
        const password = document.getElementById("password").value;
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
        if (!passwordRegex.test(password)) {
            document.getElementById("error-password").textContent = "Mot de passe trop faible";
            isValid = false;
        } else {
            document.getElementById("error-password").textContent = "";
        }

        // Vérification de la confirmation du mot de passe
        const confirm_password = document.getElementById("confirm_password").value;
        if (confirm_password !== password) {
            document.getElementById("error-confirm-password").textContent = "Les mots de passe ne correspondent pas";
            isValid = false;
        } else {
            document.getElementById("error-confirm-password").textContent = "";
        }

        // Vérification de l'adresse
        const adresse = document.getElementById("adresse").value;
        if (adresse.length < 5) {
            document.getElementById("error-adresse").textContent = "Adresse trop courte";
            isValid = false;
        } else {
            document.getElementById("error-adresse").textContent = "";
        }

        // Vérification du code postal
        const codePostal = document.getElementById("code_postal").value;
        const codePostalRegex = /^[0-9]{5}$/;
        if (!codePostalRegex.test(codePostal)) {
            document.getElementById("error-code-postal").textContent = "Code postal non valide";
            isValid = false;
        } else {
            document.getElementById("error-code-postal").textContent = "";
        }

        if (isValid) {
            alert("Formulaire soumis avec succès !");
            // Ici, vous pouvez envoyer les données vers le serveur via fetch ou XMLHttpRequest
        }
    });

    // Validation du formulaire de connexion
    document.getElementById("connexionForm")?.addEventListener("submit", function(e) {
        e.preventDefault();

        let isValid = true;

        // Vérification de l'email
        const email = document.getElementById("email").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById("error-email").textContent = "Email non valide";
            isValid = false;
        } else {
            document.getElementById("error-email").textContent = "";
        }

        // Vérification du mot de passe
        const password = document.getElementById("password").value;
        if (password.length < 8) {
            document.getElementById("error-password").textContent = "Mot de passe trop court";
            isValid = false;
        } else {
            document.getElementById("error-password").textContent = "";
        }

        if (isValid) {
            alert("Connexion réussie !");
            // Ici, vous pouvez envoyer les données vers le serveur via fetch ou XMLHttpRequest
        }
    });
});
