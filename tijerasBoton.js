// Esperar a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Función para agregar un mensaje al console
    function addToConsole(message) {
        const consoleDiv = document.getElementById('console');
        let mensaje;
        switch (message) {
            case 'Draw':
                mensaje = '¡Empate! Ambxs elegimos tijera. (╯°□°)╯︵ ┻━┻ ︵ ╯(°□° ╯)';
                break;
            
            case 'You Win': // Manejar "You Win" como una victoria
                mensaje = '¡Ganaste! La tijera corta el papel. 	※\(^o^)/※';
                break;
            case 'You Lose':
                mensaje = '¡Oh no! Perdiste. La piedra machaca la tijera. (╥﹏╥)';
                break;
            default:
                mensaje = message;
        }
        consoleDiv.innerHTML += mensaje + '<br>';
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    }

/*     function scrollToBottom() { //funcion para scrolleo automatico
        const consoleDiv = document.getElementById('console');
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    } */

    // Función para manejar el clic en los botones y llamar a la API
    async function handleButtonClick(event) {
        // Obtener la elección del botón clickeado
        const choice = event.target.getAttribute('data-choice');
        
        // Realizar una solicitud a la API para obtener el resultado
        const resultado = await obtenerResultadoDeAPI(choice);
        
        // Mostrar el resultado en la consola
        addToConsole(`${resultado}`);
/*         scrollToBottom(); //llamamos a la funcion scroll */
    }


    // Función para obtener el resultado de la API
    async function obtenerResultadoDeAPI(choice) {
        const url = 'https://rock-paper-scissors14.p.rapidapi.com/?choice=scissors';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '7d634ba80fmsh9d5749a6d82b4a1p154050jsn49d6b4ab355c',
                'X-RapidAPI-Host': 'rock-paper-scissors14.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            const resultado = data.result;
            return resultado;
            
        } catch (error) {
            console.error('Error al obtener el resultado de la API:', error);
            return '&#9940 Fallo en la conexión, prueba otra vez &#9940 ଘ(੭*ˊᵕˋ)੭ˋ ɪɴᴛᴇʀɴᴇᴛ';
        }
    }

    // Agregar event listener solo al botón de tijeras
    document.getElementById('scissorsButton').addEventListener('click', handleButtonClick);
});
