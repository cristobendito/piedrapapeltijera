// Obtenemos el elemento de la consola
const consoleElement = document.getElementById('console');

// Función para desplazar la consola hacia abajo
function scrollToBottom() {
    consoleElement.scrollTop = consoleElement.scrollHeight;
}
// Llamamos a la función scrollToBottom cada vez que se añade un nuevo mensaje a la consola
consoleElement.innerHTML += "Nuevo mensaje<br>";
scrollToBottom(); // Desplazamos la consola hacia abajo
