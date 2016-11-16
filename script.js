// JS




// fonction republier

function republier(id) {
  var msg = $(cible).prev().val();
  console.log(msg);
}


// fonction modifier

function modifier(cible, id) {
  var valmsg = $(cible).parent().prev().val();
  console.log(valmsg);
  var msg = $(cible).parent().prev();

  msg.html('<input type="text" id="modif" value="' + valmsg + '"><button class="btn btn-primary btn-sm" onclick="republier(this, ' + id + ')">Re-publier</button>');

}




// fonction supprimer

function supprimer(id) {


  console.log(id);
  $.ajax({
    method: 'POST',
    url: 'traitement.php',
    data: {
      numero : id
    },
    success: function(data) { // en cas de succés
      // console.log(data);
      $('#tableau').html(data);


    },
    error: function(){ // en cas d'erreur

    alert('La requête n\'a pas aboutie !');
    }
 });
}


$(document).ready(function(){

  $.ajax({
    method: 'POST', // On indique le type de requete http
    url: 'traitement.php', // l'adresse de la page de réception
    // data: $('#monform').serialize(), // on sérialise toutes les données entrées dans le formulaire pour les envoyer
    success: function(data) { // en cas de succés
      // console.log(data);
      $('#tableau').html(data);


    },
    error: function(){ // en cas d'erreur

    alert('La requête n\'a pas aboutie !');
    }
 });

 // fonction publier

 $("#publier").click(function() {
   event.preventDefault();
   var nom = $('#inputEmail3').val();
   var msg = $('#inputPassword3').val();

   if (nom.length > 0 || msg.length > 0) {

     $.ajax({
       method: 'POST', // On indique le type de requete http
       url: 'traitement.php', // l'adresse de la page de réception
       data: $('#monform').serialize(), // on sérialise toutes les données entrées dans le formulaire pour les envoyer
       success: function(data) { // en cas de succés
         // console.log(data);
         $('#tableau').html(data);


       },
       error: function(){ // en cas d'erreur

       alert('La requête n\'a pas aboutie !');
       }
    });

     $('#inputEmail3').val("");
     $('#inputPassword3').val("");
   }


 });


});
