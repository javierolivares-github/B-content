// ARREGLOS ---------------------------------

// MÉTODOS Y PROPIEDADES GENERALES PARA ARREGLOS ---------------------------------------
// toString()
// join()
// pop() & push()
// shift() & unshift()
// Acceder & cambiar elementos
// length
// delete
// concat()
// splice()
// slice()


// MÉTODOS PARA ORDENAR ARREGLOS -------------------------------------------------------
// sort()
// reverse()
// Ordenar números ascendente & descendente
// Orden aleatorio
// Obtener el número más alto
// Obtener el número más pequeño


// MÉTODOS PARA ITERAR ARREGLOS ---------------------------------------------------------
// forEach()
// map()
// filter()
// reduce()
// every()
// some()
// indexOf()
// lastIndexOf()
// find()
// findIndex()
// Array.from(string)
// Array.includes(search-item)






// Crea algunos arreglos
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];

let val;

// Obtener la longitud del arreglo
val = numbers.length;
// Verificar si es un arreglo
val = Array.isArray(numbers);
// Obtener un valor especificado
val = numbers[3];
val = numbers[0];
// Insertar dentro de un arreglo
numbers[2] = 100;
// Encontrar el indice de un valor
val = numbers.indexOf(36);

// MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();

// Concatenate array
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
// val = numbers.sort();

// // Use the "compare function"
// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// });

// Find
function over50(num) {
  return num > 50;
}

val = numbers.find(over50);

console.log(numbers);
console.log(val);
