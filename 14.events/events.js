const EventEmitter = require('events');
// modulo para crear mis propios eventos
// se lo suele llamar con este nombre

const customEmitter = new EventEmitter();
// se crea el objeto para escuchar ciertos eventos

// emit: permite emitir un evento desde el codigo
// on: cuando pase un evento, lo escucha (como addEventListener)

customEmitter.on('response', (data, secondData) => { // response no existe  
    console.log('received');
    console.log(data);
    console.log(secondData);
});

customEmitter.emit('response', 'Hello world', 30); // emito evento response, paso datos
customEmitter.emit('response', [1,2,3], {name:'jane'}); 