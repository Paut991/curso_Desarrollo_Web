const carrito = [
  { nombre: "Monitor 20 pulgadas", precio: 500 },
  { nombre: "Television 50 pulgadas", precio: 700 },
  { nombre: "Airpods", precio: 50 },
  { nombre: "Smartwatch", precio: 200 },
  { nombre: "Samsung a57", precio: 150 },
  { nombre: "Altavoz JBL", precio: 70 },
  { nombre: "Cascos Inalambricos", precio: 20 },
  { nombre: "Pc MSI", precio: 1500 },
];

//ForEach listado y mostrar los elemento en pantalla
carrito.forEach(function (producto) {
  console.log(producto);
});

carrito.forEach((producto) => console.log(producto.nombre));

//Map crear un nuevo arreglo
carrito.map((producto) => console.log(producto.nombre));
