// CONVERSIONES DE TIPOS --------------------------------------------------

let valor;
// Número a cadena
valor = String(555);
valor = String(4 + 4);
// Booleano a cadena
valor = String(true);
// Fecha a cadena
valor = String(new Date());
// Arreglo a cadena
valor = String([1, 2, 3, 4]);

// toString()
valor = (5).toString();
valor = (true).toString();

// Cadena a número
valor = Number('5');
valor = Number(true);
valor = Number(false);
valor = Number(null);
valor = Number('hola');
valor = Number([1, 2, 3]);

// parseInt: convierte una cadena en un número
valor = parseInt('100.30');
// parseFloat: convierte una cadena en un número decimal
valor = parseFloat('100.30');

// Salida
// console.log(valor);
// console.log(typeof valor);
// //console.log(valor.length);
// console.log(valor.toFixed(2));

const valor1 = String(5);
const valor2 = 6;
const sum = Number(valor1 + valor2);

console.log(sum);
console.log(typeof sum);
