const path = require('path');
// para trabajar con carpetas y archivos, conociendo sus direcciones

// dependiendo del sistema, podemos utilizar distintas logicas de un modulo
// no siempre se tiene acceso a las mismmas funcionalidades
// las direcciones tienen diferente formato dependiendo del sistema
// el modulo busca solucionar ese problema

console.log(path.sep);

const filePath = path.join('/public','dist','/styles','main.css'); // construye una ruta valida
console.log(filePath);
// util para importar archivos en backend

const file = path.basename(filePath); // devuelve el archivo base de la URL
console.log(file);

const dir = path.dirname(filePath); // directorio del archivo base
console.log(dir);

const info = path.parse(filePath); // objeto con la ruta y mas info
console.log(info);

const file2 = path.resolve('app.js'); // como join, pero esta completa la ruta desde la ruta del proyecto
console.log(file2);