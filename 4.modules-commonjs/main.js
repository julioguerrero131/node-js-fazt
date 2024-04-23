// Util para extender el funcionamiento de apps
// mas crece la app == mas dificil de tener codigo en un solo archivo
// modulos == dividir en partes
// main es el archivo principal

// permite obtener un valor del exports de module
const address = require('./myModule');
// ./ indica que la ruta empieza en la carpeta del archivo actual
console.log(address);

// Cuando se exportan varios valores, se exporta de la misma forma
// del objeto exportado puedo decidir que valor extraer
// util para objetos demasiado grandes
const { myArray } = require('./myModule');
console.log(myArray);

const { myAddress, myNumber } = require('./myModule');
console.log(myAddress);
console.log(myNumber);