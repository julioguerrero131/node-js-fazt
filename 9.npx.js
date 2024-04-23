// Existen modulos que no se llaman desde el codigo, sino desde consola
// Estos tienen su ejecutable en la carpeta bin

// Por ejemplo, nodemon se puede ejecutar de la siguiente forma:
// .\node_modules\.bin\nodemon npx.js

// Estos actuan como cli (command line interface), es decir, programas de consola

console.log('Hello World');

// Otro ejemplo es el paquete cowsay

// para no tener que estar buscando la ruta hasta el archivo, podemos crear scripts
// ver: package.json


// NPX

// npx permite usar modulos sin tener instalados (los instala en ese momento)
// NO se instalan como tal en el node_modules, solo para ejecutar EN EL MOMENTO
// si ya esta instalado solo lo usa
// ejemplo: npx cowsay texto
