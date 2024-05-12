/*const nombreProducto = "Monitor 20 Pulgadas";
const precio = 300;
const disponible = true;*/

//Object
const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

/*
console.log(producto);
console.log(producto.precio);
console.log(producto.nombreProducto);
console.log(producto.disponible);
*/

// Agregar nueva propiedad
producto.imagen = "imagen.jpg";

//Eliminar un elemento
delete producto.disponible;

/*console.log(producto);*/

//Objetos
const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

// Destructuring
const { nombreProducto, precio, disponible } = producto;

console.log(nombreProducto);
console.log(precio);

console.log(disponible);

// Destructuring con Arreglos
