
function actualizarPuntos() {
    const userName = localStorage.getItem('userName');
    let userPoints = parseInt(localStorage.getItem('userPoints')) || 0;

    // Incrementar los puntos del usuario en 5
    userPoints += 5;

    // Guardar los nuevos puntos del usuario en el almacenamiento local
    localStorage.setItem('userPoints', userPoints);

    // Actualizar la tabla de puntuaciones en el HTML con los nuevos puntos del usuario
    const puntosUsuarioElemento = document.getElementById('puntos' + userName);
    if (puntosUsuarioElemento) {
        puntosUsuarioElemento.textContent = userPoints;
    }
}
