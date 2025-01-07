// Attendi che il DOM sia completamente caricato
document.addEventListener("DOMContentLoaded", function () {
    // Seleziona tutti i link della navbar
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    // Aggiungi un gestore di eventi click per ciascun link
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            // Prevenire il comportamento predefinito dei link
            event.preventDefault();

            // Verifica l'ancora dell'attributo href del link cliccato
            switch (link.getAttribute("href")) {
                case "#home":
                    window.location.href = "index.html";
                case "#latest":
                    window.location.href = "latest.html";
                    break;
                case "#top":
                    window.location.href = "top.html";
                    break;
                case "#oscar":
                    window.location.href = "oscar.html";
                    break;
                default:
                    console.log("Nessuna azione per questo link.");
            }
        });
    });
});
