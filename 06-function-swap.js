// Crea una función llamada `swap()` que reciba un array y dos parametros que sean indices del array. 
// La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. 
// Retorna el array resultante.

// Sugeren cia de array:

let players = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

function swapIndex (arr, index1, index2) {  
    const element = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = element;

    return arr;
}

console.log(swapIndex(players, 1, 3));