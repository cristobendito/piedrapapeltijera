// Importamos la biblioteca node-fetch para realizar solicitudes HTTP
const fetch = require('node-fetch');

// Definimos la URL de la API y las opciones de la solicitud
const url = 'https://rock-paper-scissors14.p.rapidapi.com/?choice=paper';
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




/* // biblioteca node-fetch previamente instalada para realizar solicitudes HTTP
const fetch = require('node-fetch');

// Definimos URL de la API
const url = 'https://rock-paper-scissors14.p.rapidapi.com/?choice=paper';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7d634ba80fmsh9d5749a6d82b4a1p154050jsn49d6b4ab355c',
        'X-RapidAPI-Host': 'rock-paper-scissors14.p.rapidapi.com'
    }
};


fetchResult();

// función asincrónica para realizar la solicitud HTTP y procesar respuesta
async function fetchResult() {
    try {
        // solicittud HTTP utilizando await para esperar la respuesta
        const response = await fetch(url, options);
        // awaite para esperar la conversión de la respuesta a texto
        const result = await response.text();
        console.log(result);
        
        if (result === 'rock') {
            document.getElementById('imagenResultado').src = 'imagen_piedra.jpg';
        } else if (result === 'paper') {
            document.getElementById('imagenResultado').src = 'imagen_papel.jpg';
        } else if (result === 'scissors') {
            document.getElementById('imagenResultado').src = 'imagen_tijera.jpg';
        } else {
                        console.log('Respuesta inesperada:', result);
        }
    } catch (error) {
       
        console.error(error);
    }
} */