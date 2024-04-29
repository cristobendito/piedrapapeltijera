// Importamos la biblioteca node-fetch para realizar solicitudes HTTP
const fetch = require('node-fetch');

// Definimos la URL de la API y las opciones de la solicitud
const url = 'https://rock-paper-scissors14.p.rapidapi.com/?choice=scissors';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7d634ba80fmsh9d5749a6d82b4a1p154050jsn49d6b4ab355c',
        'X-RapidAPI-Host': 'rock-paper-scissors14.p.rapidapi.com'
    }
};

// Definimos una función asincrónica para realizar la solicitud HTTP y procesar la respuesta
async function fetchResult() {
    try {
        // Realizamos la solicitud HTTP utilizando await para esperar la respuesta
        const response = await fetch(url, options);
        // Utilizamos await nuevamente para esperar la conversión de la respuesta a texto
        const result = await response.text();
        // Imprimimos el resultado en la consola
        console.log(result);
    } catch (error) {
        // Capturamos cualquier error que pueda ocurrir durante el proceso y lo imprimimos en la consola
        console.error(error);
    }
}

// Llamamos a la función fetchResult para ejecutarla
fetchResult();
