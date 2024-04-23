const http = require('http');
const {createReadStream} = require('fs');

// Para enviar datos al servidor desde un archivo (por chunks)

const server = http.createServer((req, res) => {
    const fileStream = createReadStream('./data/big_file.txt', {
        encoding: 'utf-8'
    })

    fileStream.on('data', (chunk) => {
        fileStream.pipe(res); // pasa la porciones de datos al frontend
        // pipe manda datos a otra funcion
    })

    fileStream.on('error', (error) => {
        console.log(error);
    })
});

server.listen(3000);
console.log(`server on port ${3000}`);