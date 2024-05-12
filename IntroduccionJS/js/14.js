const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Television 50 pulgadas", precio: 700 },
];

//foreach
meses.forEach(function (mes) {
  if (mes == "Marzo") {
    console.log("Marzo si existe");
  }
});

//Includes
let resultado = meses.includes("Marzo");

//Some ideal para arreglo de objetos
resultado = carrito.some(function (producto) {
  return producto.nombre === "Celurar";
});

//Reduce
resultado = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);

//Filter
resultado = carrito.filter(function (producto) {
  return producto.precio > 400;
});

console.log(resultado);
