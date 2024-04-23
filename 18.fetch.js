// es una api de node
// es una caracteristica experimental (puede tener fallos   )
// en el navegador funciona para traer datos de una direccion
// no hace falta importar

// no hace falta la funcion: (por el type:module)
// se lo conoce como top level await
// async function loadData() {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
    
// }

// loadData();