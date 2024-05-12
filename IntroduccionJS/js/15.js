// Declaracion de funcion
function sumar(numero1, numero2) {
  //Parametros
  console.log(numero1 + numero2);
}
sumar(10, 10); //Argumentos o valores reales

//Expresion de la funcion
const sumar2 = function () {
  console.log(3 + 3);
};
sumar2();

// IIFE
(function () {
  console.log("Esto es una funcion");
})();

// Funciones flecha
const sumar3 = () => {
  console.log(3 + 3);
};
sumar3();

// Funciones flecha con parametros
const sumar4 = (a, b) => {
  console.log(a + b);
};
sumar4(2, 3);

// Funciones flecha con return
const sumar5 = (a, b) => a + b;
console.log(sumar5(1, 2));
