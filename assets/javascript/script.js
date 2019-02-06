function validerFrm() {
  var nom = $('#nom').val();
  var prenom = $('#prenom').val();
  var mail = $('#mail').val();
  var mdp = $('#mot de passe').val();


  var erreurs = new Array();

  if (nom == "") {
    erreurs.push('Veuillez saisir votre nom');
    }

  if (prenom == "") {
    erreurs.push('Veuillez saisir votre prenom');
    }

  if (mail == "") {
    erreurs.push('Veuillez saisir votre mail');
    }

  if (mdp == "") {
    erreurs.push('Veuillez saisir votre mdp');
    }

    if (erreurs.length !=0) {
      var message = "<ul>";

      for (var i = 0 ; i < erreurs.length ; i++) {
       message += "<li>";
       message += erreurs[i];
       message += "</li>";

      }

    message += "</ul>"

    document.write(message);
    }

else {
  alert("Formulaire bien rempli");
}
}
