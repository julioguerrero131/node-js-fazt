// puedo exportar solo ciertas funciones
// export function add(){}
export function add(x,y) {
    return x + y;
};

export function subtract(x,y) {
    return x - y;
};

export function multiply(x,y) {
    return x * y;
};

export function divided(x,y) {
    return x / y;
};

// usar preferiblemente esta forma
// sobretodo cuando se siguen las reglas de ECMAScript
export default {
    add,
    subtract,
    divided,
    multiply
}

// export default add; // otra forma

// una mejor manera seria usando export
