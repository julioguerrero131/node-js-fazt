// os es un modulo de Node.js
// se busca aprender a usar este tipo de modulos de Node

// al importar el modulo, si no damos una ruta exacta, solo nombre la busqueda se da:
// 1. archivos del proyecto
// 2. modulos preinstalados
const os = require('os');
// permite extraer info del usuario

console.log(os.userInfo());
console.log(os.uptime()); // tiempo (s) desde que se prendio el dispositivo
console.log(os.platform()); // sistema operativo en el que se ejecuta node
console.log(os.totalmem()); // memoria total
console.log(os.freemem()); // memoria disponible

console.table({
    os: os.platform(),
    version : os.release(),
    totalmem : os.totalmem()
});
