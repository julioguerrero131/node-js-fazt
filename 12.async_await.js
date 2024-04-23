const { readFile } = require('fs');

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

// async/await es una forma moderna y simple de escribir promesas

// async debe contener al await
// async indica que ese codigo es asincrono
async function read() {

    // para manejo de errores
    try {
        // throw new Error('error creado');

        // await indica al programa que es codigo asincrono, tambien
        const result = await getText('./data/first.txt'); // permite guarda el resultado
        const result2 = await getText('./data/second.txt'); // permite guarda el resultado
        const result3 = await getText('./data/third.txt'); // permite guarda el resultado
        console.log(result);
        console.log(result2);
        console.log(result3);
    } catch (error) {
        console.log(error);
    }
    
}

read();