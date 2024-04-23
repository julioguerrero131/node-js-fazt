// PRIMERA FORMA
const { readFile } = require('fs');
const {promisify} = require('util'); // funciones adicionales node
// exiten modulos de promesas ya escritas dentro de node

const readFilePromise = promisify(readFile); 
// leer un archivo basado en promesas

async function read() {
    try {
        // throw new Error('error creado');
        const result = await readFilePromise('./data/first.txt','utf-8'); 
        const result2 = await readFilePromise('./data/second.txt','utf-8'); 
        const result3 = await readFilePromise('./data/third.txt','utf-8'); 
        console.log(result);
        console.log(result2);
        console.log(result3);
    } catch (error) {
        console.log(error);
    }
    
}

read();