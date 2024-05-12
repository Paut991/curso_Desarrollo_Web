//Object
let producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 300,
  disponible: true,
};

Object.freeze(producto);

producto.imagen = "imagen.jpg";
console.log(producto);
// .freeze no puedes cambiar, eleminar o modificar ningun objeto
// .seal puedes modificar un valor del objeto
