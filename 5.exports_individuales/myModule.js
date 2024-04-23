// console.log(module); // export vacio

const myAddress = 'google.com';
const myNumber = 30;
const myArray = [10,20,30];
const user = {
    name : 'Ryan',
    lastName : 'Gosling'
};

// module.exports = {
//     myAddress,
//     myNumber,
//     myArray,
//     user
// };

// CommonJS
// otra forma de exportar es:
module.exports.user = user;
module.exports.myAddress = myAddress;
// es como ir anadiendo valores a un objeto
// me permite elegir que valores exportar

console.log(module); // export con valor