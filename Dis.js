document.getElementById("BVer").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "block";
});

document.getElementById("BotonCerrar").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "none";
    document.querySelector(".Contenedor-Binicio").style.display = "none";
    document.querySelector(".Con-2").style.display = "block";
});

document.getElementById("B1").addEventListener('click', function() {
    document.querySelector(".Con-2").style.display = "none"; // Oculta la sección de elección
    document.querySelector("main").style.display = "block"; // Muestra la sección principal
});

document.getElementById("B12").addEventListener('click', function() {
    document.querySelector(".Con-2").style.display = "none"; // Oculta la sección de elección
    document.querySelector("main").style.display = "block"; // Muestra la sección principal
});

// Botón para regresar a la elección
document.getElementById("BotonRegresarMain").addEventListener('click', function() {
    document.querySelector("main").style.display = "none"; // Oculta la sección principal
    document.querySelector(".Con-2").style.display = "block"; // Muestra la sección de elección
});
