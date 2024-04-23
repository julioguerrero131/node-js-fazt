const http = require('http');
// permiten crear servidores web http
// se basan en el modelo cliente-servidor
// los servidores se mantienen ejecutando constantemente esperando el request
// ver: http port
// cada puerto tiene asignado un protocolo evitando que las tareas se interrumpan entre si

const server = http.createServer(function (request, response) { // () => valido

    console.log(request.url);

    if (request.url === '/') {
        response.write('Bienvenido al servidor del puerto 3000');
        return response.end(); // termina la funcion
    }

    if (request.url === '/about') {
        response.write('acerca de');
        return response.end(); // termina la funcion
    }

    response.write(`
    <h1>Not Found</h1>
    <p>Esta pagina no se encontro</p>
    <a href='/'>Volver a la pagina principal</a>
    `); // no hay request, siempre el mismo response
    response.end(); // IMPORTANTE: terminar respuesta

});

server.listen(3000); // numero puerto
// el servidor se mantendra escuchando

console.log('Servidor escuchando en el puerto 3000.');
// para conectarnos en el navegador: http://localhost:3000/