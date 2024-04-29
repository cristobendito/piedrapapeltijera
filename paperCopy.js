const url = `https://rock-paper-scissors14.p.rapidapi.com/?choice=${userChoice}`;
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7d634ba80fmsh9d5749a6d82b4a1p154050jsn49d6b4ab355c',
        'X-RapidAPI-Host': 'rock-paper-scissors14.p.rapidapi.com'
    }
};

// Llamamos a la función fetchResult cuando se presiona el botón de papel
fetchResult();

// Definimos la función fetchResult para manejar la respuesta de la API
async function fetchResult() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        
        // Personalizamos los mensajes de acuerdo a los resultados
        if (result.result === 'Draw') {
            alert('¡Empate! Ambxs elegimos papel. 📄📄');
        } else if (result.result === 'Win') {
            alert('¡Ganaste! El papel envuelve la piedra. 📄✊');
        } else if (result.result === 'Lose') {
            alert('¡Oh no! Perdiste. La tijera corta el papel. ✂️📄');
        }
    } catch (error) {
        // Mensaje de error personalizado
        alert('Oops! Algo salió mal al obtener el resultado. 😕 Por favor, inténtalo de nuevo.');
        console.error(error);
    }
}

    
    // Agregamos un event listener al botón de papel para llamar a fetchResult cuando se presiona
    document.getElementById('paperButton').addEventListener('click', fetchResult);