const fs = require('fs');
// permite crear, alterar, leer o eliminar archivos


// SYNC
// codigo que debemos que esperar a que termine para comenzar con otra tarea

const first = fs.readFileSync('./data/first.txt'); // lee archivo, retorna el buffer
console.log(first);

const first1 = fs.readFileSync('./data/first.txt', 'utf-8'); // lo convierte a string
console.log(first1);

const second = fs.readFileSync('./data/second.txt');
console.log(second.toString()); // lo convierte a string, tambien

const title = 'este es un tercer archivo\n';
fs.writeFileSync('./data/third.txt', title); // crea el archivo, si ya existe sobrescribe

fs.writeFileSync('./data/third.txt', title, {
    flag: 'a'
}); // crea el archivo, si ya existe anade al final (append)


// ASYNC 
// mientras se realiza un tarea, pueden ejecutarse otras al mismo tiempo 
// (mientras tenga espacio libre)
// es la forma mas comun

fs.readFile('./data/first.txt', function (error, data) { // error: salio mal, data: salio bien
    if (error) {
        console.log(error); // null si no hay error
    }
    console.log(data.toString()); // datos leidos

}); // pueden usarse funciones flecha 

fs.readFile('./data/second.txt', 'utf-8', function (error, data) { // funcion callback
    if (error) {
        console.log(error);
    }
    console.log(data); // no necesito toString
}); // funcion que se ejecuta despues de terminar una tarea anterior
// ayuda a ejecutar logica extra

// para realizar varias operaciones, sin que sea sincrono, se hace de la forma:

fs.readFile('./data/first.txt', function (error, data) { // Primero...
    if (error) {
        console.log(error); 
    }
    console.log(data.toString()); 

    // va dentro
    fs.readFile('./data/second.txt', 'utf-8', function (error, data) { // Segundo...
        if (error) {
            console.log(error);
        }
        console.log(data); 

        fs.writeFile('./data/fourth.txt', 'archivo creado asincronamente', (error, data) => {
            console.log(error); // null == no error
            console.log(data); // no se devuelven datos
        });
    }); 

});

// si hubiera mas codigo, se ejecutaria y no se esperaria a que terminen estas tareas
// hay una mejor forma de crear este tipo de codigo: Promesas



