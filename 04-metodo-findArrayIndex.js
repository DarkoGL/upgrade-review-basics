// **Iteración #4: Métodos findArrayIndex**

// Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos 
// y un texto y devuelve la posición del array cuando el valor del array sea igual al valor del texto que enviaste como parametro. 

// Haz varios ejemplos y compruebalos.

let animals = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];

function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++) {
        if(array[i] === text) return i; 
    }
    
    return "Elemento no encontrado";
}

console.log(findArrayIndex(animals, 'Salamandra'));
console.log(findArrayIndex(animals, 'Mosquito'));
console.log(findArrayIndex(animals, 'Pato'));
console.log(findArrayIndex(animals, 'Caracol'));
