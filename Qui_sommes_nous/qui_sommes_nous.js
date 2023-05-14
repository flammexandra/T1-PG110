// Exemple d'animation avec JavaScript
document.addEventListener("DOMContentLoaded", function(event) {
    var headers = document.getElementsByTagName("h2");
    for (var i = 0; i < headers.length; i++) {
        animateHeader(headers[i]);
    }
});

function animateHeader(header) {
    header.style.opacity = 0;
    var start = null;
    var duration = 2000;

    function fadeIn(timestamp) {
        if (!start)
