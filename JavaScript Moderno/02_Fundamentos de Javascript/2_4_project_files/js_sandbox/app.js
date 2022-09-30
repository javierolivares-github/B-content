// TIPOS DE DATOS -------------------------------------------------------------------
// Los tipos de datos son los valores que podemos almacenar en las variables.


// SIMPLES
// Cadenas de texto
const nombre = 'Javier';
// Números
const edad = 34;
const PI = 3.14;
// Booleanos
const tieneHijos = false;
// Nulo
const automovil = null;
// Indefinido
let prueba;
// Símbolo
const simbolo = Symbol();
// BigInt - Gran número


// COMPUESTOS (Objetos)
// Arreglos
const frutas = ['manzana', 'banana', 'naranja'];
console.log(frutas);

// Funciones
const saludar = function () {
  return "Hola";
}

// Objetos Literales
const manzana = {
  tipo: 'fuji',
  color: 'rojo',
  sabor: 'dulce'
}
console.log(manzana);

const hoy = new Date();
console.log(hoy);
console.log(typeof hoy);