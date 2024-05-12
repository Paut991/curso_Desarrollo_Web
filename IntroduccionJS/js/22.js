// POO

const producto1 = {
  nombre: "Monitor 20 pulgadas",
  precio: 300,
};

//Object Constructor
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

// Crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function () {
  return "El Producto ${this.nombre} tiene un precio de: $ ${this.precio}";
};

const producto3 = new Producto("Pc de Msi", 1500);
const producto2 = new Producto("Monitor 24 pulgadas", 500);

function formatearProducto(producto) {
  return "El producto ${producto.nombre} tiene un precio de: $ {producto.precio}";
}

console.log(producto2);
console.log(producto3);

// Clases en JavaScript

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }

  formatearProducto() {
    return `El producto ${this.nombre} tiene un precio de: $ ${this.precio}`;
  }
}
const producto = new Producto("Auriculares", 65);
const producto4 = new Producto("Lavadora", 750);

//Herencia
class Libro extends Producto {
  constructor(nombre, precio, ISBN) {
    super(nombre, precio);
    this.ISBN = ISBN;
  }
}

const Libro = new Libro("JavaScript", 19.99, "22323520");
console.log(Libro.formatearProducto());

console.log(producto);
console.log(producto4);
