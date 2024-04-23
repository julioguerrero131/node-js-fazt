const {writeFile} = require('fs/promises');

// stream busca enviar archivos pesados por partes
// Para leer archivos con stream:

const createBigFile = async () => {
    await writeFile('./data/big_file.txt', 'Hello World'.repeat(10000));
}

createBigFile();
// para ver peso de un archivo: dir data

const {createReadStream} = require('fs');
// se basa en eventos
// no usa promesas

const stream = createReadStream('./data/big_file.txt',{
    encoding:'utf-8'
    // para mas flags, ver documentacion
});
// retorna un objeto con manejadores de eventos
// usar 'utf-8' para ver el string y no el buffer

stream.on('data', (chunk) => {
    console.log(chunk); // lee el archivo poco a poco
});
// cada vez que se lee, se dispara el evento
// chunk: pedazo

stream.on('end', () => {
    console.log('Lectura Terminada!'); 
}); // se ejecuta al final de leer

stream.on('error', (error) => {
    console.log(error);
});