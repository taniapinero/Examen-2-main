// Selecciona todos los elementos con la clase "placa"
let imagenes = document.querySelectorAll(".imagen");

// Itera sobre cada elemento de la NodeList
imagenes.forEach(imagen => {
    // Guardar el tamaño original para poder restaurarlo en mouseout
    let originalWidth = imagen.clientWidth;
    let originalHeight = imagen.clientHeight;

    imagen.addEventListener("mouseover", function() {
        console.log("Mouseover: aumentando tamaño");
        // Aumenta el tamaño del elemento actual
        imagen.style.width = (originalWidth * 1.2) + "px";
        imagen.style.height = (originalHeight * 1.2) + "px";
    });

    imagen.addEventListener("mouseout", function() {
        console.log("Mouseout: restableciendo tamaño");
        // Restablece el tamaño del elemento actual
        imagen.style.width = originalWidth + "px";
        imagen.style.height = originalHeight + "px";
    });
});