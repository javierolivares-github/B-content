// CADENAS

// MÉTODOS Y PROPIEDADES GENERALES PARA CADENA ---------------------------------------------------
// Los métodos nos permiten realizan acciones.
// Las propiedades nos permiten obtener información.

// length
// slice(start, end)
// substring(start, end)
// substr(start, length)
// replace()
// replace() /i
// replace() /g
// toUpperCase()
// toLowerCase()
// concat();
// trim();
// propery access [];
// charAt();


// MÉTODOS PARA BUSQUEDA DE CADENA ---------------------------------------------------------------
// indexOf();
// lastIndexOf();
// search();
// match(regexp);
// includes(searchvalue)
// startsWith(searchvalue, start)
// endsWith(searchvalue, length)


// PLANTILLAS LITERALES -------------------------------------------------------------------------
// Sintaxis Back-tics
// Permite comillas
// Permite cadenas multilínea
// Permite interpolación de cadenas
// Permite sustitución de variables
// Permite plantillas de HTML


// MÉTODOS Y PROPIEDADES GENERALES PARA NÚMEROS -------------------------------------------------
// toString()
// toExponential()
// toFixed()
// toPrecision()
// valueOf()
// Number()
// parseInt()
// parseFloat()
// MAX_VALUE
// MIN_VALUE
// NaN


const nombre = 'Jane';
const apellido = 'Doe';
const edad = 26;
const mensaje = 'Bienvenido(a)';
const topicos = 'Diseño UI/UX, Programación Front-End, Programación Back-End';

let valor;

valor = nombre + apellido;

// Concatenar cadenas
valor = nombre + ' ' + apellido;

// Anexar cadenas
valor = 'Javier ';
valor += 'Olivares';

valor = 'Hola, mi nombre es ' + nombre + ' y tengo ' + edad + ' años';

// Length
valor = nombre.length;

// concat()
valor = nombre.concat(' ', apellido);

// toUpperCase() - toLowerCase()
valor = nombre.toUpperCase();
valor = nombre.toLowerCase();

valor = nombre[2];

// indexOf()
valor = nombre.indexOf('l');
valor = nombre.lastIndexOf('l');

// charAt()
valor = nombre.charAt('2');
// Get last char
valor = nombre.charAt(nombre.length - 1);

// substring()
valor = nombre.substring(0, 4);

// slice()
valor = nombre.slice(0, 4);
valor = nombre.slice(-3);

// split()
// valor = str.split(' ');
// valor = tags.split(',');

// replace()
// valor = str.replace('Brad', 'Jack');

// includes()
// valor = str.includes('foo');
console.log(valor);
