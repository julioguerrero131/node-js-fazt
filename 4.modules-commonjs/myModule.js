// codigo para ser reutilizado:
const myAddress = 'google.com';
const myNumber = 30;
const myArray = [10,20,30];
const user = {
    name : 'Ryan',
    lastName : 'Gosling'
};
// se puede guardar datos, estructuras de datos u objetos

// UN ELEMENTO

// para exportar modulos se usa un objeto global:
// este objeto lo tiene cada archivo
module.exports = myAddress;
// se guarda en exports
// en exports solo puede haber 1 valor
// solo se exporto un valor en especifico

// console.log(module); // los console.log se veran si se importa en el main


// VARIOS ELEMENTOS

// para exportar varios valores, podemos organizarlos en un solo arreglo:
const group = {
    myAddress : myAddress,
    myNumber : myNumber,
    myArray : myArray,
    user : user
}
module.exports = group;

// console.log(module);
// podria crear el objeto directamente:
// ademas, podemos escribir el nombre de la variable (o constante) 1 sola vez

module.exports = {
    myAddress,
    myNumber,
    myArray,
    user
};
