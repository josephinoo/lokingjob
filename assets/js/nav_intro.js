const intro = introJs();
intro.setOptions({

    steps: [{
        intro = "Bienvenidos a la pagina"
    }, {
        element = "#step-one",
        intro: "Esto es el logo"
    }]
});
document.querySelectorAll("#start-steps").addEventListener('click', function () {
    intro.start();
});