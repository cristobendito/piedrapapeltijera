
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameusuario').value;
    localStorage.setItem('userName', name);
    window.location.href = 'game.html'; // Redirecciona al usuario al juego
});


/* //PODER AGREGARPUNTOS
document.getElementById('nameForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('nameusuario').value;
    localStorage.setItem('userName', name);
    window.location.href = 'game.html'; // Redirecciona al usuario al juego
    actualizarPuntos(); // Actualiza los puntos del jugador al redirigir al juego
}); 
 */