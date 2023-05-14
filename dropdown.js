$(document).ready(function() {
    // Sélectionner l'élément de la barre de navigation qui contiendra le dropdown
    var dropdown = $('#navbarNav .dropdown');
    
    // Ajouter un événement "click" à cet élément pour activer le dropdown
    dropdown.on('click', function() {
      $(this).toggleClass('show');
    });
    
    // Empêcher la fermeture du dropdown lorsque l'utilisateur clique dessus
    dropdown.on('click', '.dropdown-menu', function(e) {
      e.stopPropagation();
    });
    
    // Fermer le dropdown lorsque l'utilisateur clique n'importe où sur la page
    $(document).on('click', function() {
      dropdown.removeClass('show');
    });
});



