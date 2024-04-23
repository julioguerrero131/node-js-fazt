// se puede usar las palabras export e import para los modulos
// en node se puede, pero necesita configuraciones adicionales

// para iniciar el node_modules se puede usar: npm init -y
// inicia los modulos y el package.json con configuraciones por defecto

// en el package.json debemos anadir: "type": "module"
// asi, se pondra usar import y export

// const math = require('./math/index.js');
import math, {add,subtract,multiply,divided} from './math/index.js';

console.log(math.add(1,2));

console.log(divided(4,2));
