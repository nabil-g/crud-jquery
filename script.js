// JS

function republier(cible) {
  var msg = $(cible).prev().val(function() {
    $(cible).parent().text(msg);
  });

}

function modifier(cible) {

  var msg = $(cible).parent().prev();
  var valmsg = $(cible).parent().prev().val(function(){
    msg.html('<input type="text" value="' + valmsg + '"><button class="btn btn-primary btn-sm" onclick"republier(this)">Re-publier</button>');
  });






}



function supprimer(cible) {
  $(cible).parent().parent().remove();
}


var actions = '<td><a href="#" onclick="modifier(this)">Modifier</a><a href="#" onclick="supprimer(this)">Supprimer</a></td></tr>';

$(document).ready(function(){



  $("#publier").click(function() {
    event.preventDefault();
    var nom = $('#inputEmail3').val();
    var msg = $('#inputPassword3').val();

    if (nom.length > 0 || msg.length > 0) {
      $('#tableau').append("<tr><td>" + nom + "</td><td>" + msg + "</td>" + actions);
      $('#inputEmail3').val("");
      $('#inputPassword3').val("");
    }


  });




});
