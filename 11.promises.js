const { readFile } = require('fs');
const { result } = require('lodash');

// Se busca transformar de esta funcion asincrona a una Promesa

// readFile('./data/first.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.log(err);
//     }
//     console.log(data);
// });

// new Promise(function (resolve, reject) { // success, error

//     readFile('./data/first.txt', 'utf-8', (err, data) => {
//         if (err) {
//             reject(err);
//         }
//         resolve(data);
//     });

// }); // ya estan disponibles
// una funcion espera el resultado de otra
// hay una mejor forma, en la que se podra ingresar rutas de diferentes archivos

const getText = (pathFile) => {

    return new Promise(function (resolve, reject) { // success, error

        readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            }
            resolve(data);
        });
    
    });

}

// then: cuando va bien, catch: cuando va mal
getText('./data/first.txt') 
    .then((result) => console.log(result))
    .then(() => getText('./data/second.txt'))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
// si un then falla, es capturado por el catch

// Los promises permiten tener codigo mas legible que los callbacks
// Convertimos de una funcion callback a una promesa


