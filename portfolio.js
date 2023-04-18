/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


window.addEventListener("load", function(){
  window.document.querySelector("#btn_submit").addEventListener("click", function(){
      var nom = window.document.querySelector("#Nom").value.trim();
      var prenom = window.document.querySelector("#Prénom").value.trim();
      var email = window.document.querySelector("#email").value.trim();
      var telephone = window.document.querySelector("#télephone").value.trim();
      var paysIndex = window.document.querySelector("#country").selectedIndex;
var pays = window.document.querySelector("#country").options[paysIndex].text.trim();

      var message = window.document.querySelector("#mess textarea").value.trim();

      var erreur = false;
      
      if (nom === "") {
          window.document.querySelector("#error-nom").innerHTML = "Le nom doit être rempli.";
          erreur = true;
      } else {
          window.document.querySelector("#error-nom").innerHTML = "";

      if (prenom === "") {

        window.document.querySelector("#error-prenom").innerHTML = "Le prénom doit être rempli.";
        erreur = true;
    } else {
        window.document.querySelector("#error-prenom").innerHTML = "";

          if (nom.length > 15) {
              window.document.querySelector("#error-nom").innerHTML = "Le nom ne doit pas dépasser 15 caractères.";
              erreur = true;
          }

          if (prenom.length > 15) {
            window.document.querySelector("#error-prenom").innerHTML = "le prénom ne doit pas dépasser 15 caractères.";
            erreur = true;
        }
      }

/*verifier l'addresse email******************************************************************************************/

      if (email === "") {
          window.document.querySelector("#error-email").innerHTML = "L'email doit être rempli.";
          erreur = true;
      } else {
          window.document.querySelector("#error-email").innerHTML = "";
          if (!/^\S+@\S+\.\S+$/.test(email)) {
              window.document.querySelector("#error-email").innerHTML = "L'adresse email est invalide.";
              erreur = true;
          }
      }

/*verifier le numero de telephone**********************************************************************************/

      var phoneRegex = /^\d{8,}$/; 
      if (!phoneRegex.test(telephone)) {
          window.document.querySelector("#error-telephone").innerHTML = "Le numéro de téléphone est invalide.";
          erreur = true;
      } else {
          window.document.querySelector("#error-telephone").innerHTML = "";
      }

/*valider le pays*************************************************************************************************/

      var pays = window.document.querySelector("#country").selectedIndex;

      if (pays === 0) {
          window.document.querySelector("#error-pays").innerHTML = "Le pays doit être sélectionné.";
          erreur = true;
      } else {
          window.document.querySelector("#error-pays").innerHTML = "";
      }
      
/*valider le message**********************************************************************************************/
      if (message === "") {
          window.document.querySelector("#error-message").innerHTML = "Le message doit être rempli.";
          erreur = true;
      } else {
          window.document.querySelector("#error-message").innerHTML = "";
      }

      if (!erreur) {
          var question = "Souhaitez-vous réellement utiliser l'adresse suivante : " + email;
          if (confirm(question)){
              window.document.querySelector("#form_contact").submit(); //On peut envoyer
          }
          else{
              alert("Envoi annulé");
          }
      }
      }
      
  }, false);
}, false);

// Récupère tous les liens de la navigation
const navLinks = document.querySelectorAll("nav ul li a");

// Ajoute un écouteur d'événement "click" à chaque lien
navLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    // Empêche le comportement par défaut du lien
    event.preventDefault();
    
    // Récupère l'URL de la page liée au lien
    const linkUrl = link.getAttribute("href");

    // Charge la page liée au lien
    fetch(linkUrl)
      .then(response => response.text())
      .then(html => {
        // Met à jour le contenu de la page principale avec le HTML de la page liée
        const mainContent = document.querySelector("main");
        mainContent.innerHTML = html;
      })
      .catch(error => console.error(error));
  });
});


// Sélectionner tous les éléments td du tableau
const tds = document.querySelectorAll('table td');

// Pour chaque élément td
tds.forEach(td => {
  // Ajouter un événement au survol avec le curseur
  td.addEventListener('mouseover', function() {
    // Récupérer le texte de l'élément td
    const text = this.innerText;
    // Ajouter le pourcentage à la fin du texte
    this.innerText = text + ' (70%)';
  });
  
  // Ajouter un événement au départ du curseur
  td.addEventListener('mouseout', function() {
    // Retirer le pourcentage à la fin du texte
    this.innerText = this.innerText.replace(' (70%)', '');
  });
});

