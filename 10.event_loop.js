console.log('first');

setTimeout(() => {
    console.log('second');
}, 3000); // se delega la tarea, se sigue con las otras tareas

console.log('third');

const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url === '/') {
        res.write('Welcome to the server');
        return res.end();
    }

    if (req.url === '/about') {

        // blocking code: bloquea el hilo de ejecucion 
        // bloquea las peticiones
        for (let i = 0; i < 10000; i++) {
            console.log(Math.random() * i);
        }

        return res.end('about page');
    }

    res.end('not found');
});

server.listen(3000);

console.log('Server on port 3000');
