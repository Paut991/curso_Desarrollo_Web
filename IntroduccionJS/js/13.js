// Arrays
const numeros = [10, 20, 30, 40, 50];
console.log(numeros);
const meses = ["Enero", "Febrero", "Marzo", "Abril"];
console.table(meses);

// Acceder a valores de un array
console.log(numeros[0]);
console.log(meses[1]);

// Conocer la extensión de un array
console.log(meses.length);

// Recorrer un array
meses.forEach(function (mes) {
  console.log(mes);
});

// Agregar un elemento al final del array
meses.push("Mayo");
console.table(meses);

// Eliminar el último elemento del array
meses.pop();
console.table(meses);

// Eliminar el primer elemento del array
meses.shift();
console.table(meses);

// Agregar un elemento al inicio del array
meses.unshift("Mes 0");
console.table(meses);

// Rest Operator o Spread Operator
const nuevoArreglo = [...meses, "Junio"];
