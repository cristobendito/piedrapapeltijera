//pop up
window.addEventListener('beforeunload', function(event) {
    // Cancela el evento por defecto para que el navegador no cierre la ventana automáticamente
    event.preventDefault();
    // Define el mensaje que se mostrará al usuario
    const mensaje = '¿Seguro que quieres salir? Perderás todo tu progreso.';
    // Muestra el mensaje al usuario
    event.returnValue = mensaje;
});
