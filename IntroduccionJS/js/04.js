// String o Cadenas de texto
const producto = "Monitor de 20 pulgadas";
const producto2 = "Monitor HD";

console.log(producto2);

//IndexOf (retorna posicion de la palabra que le pases)
console.log(producto.indexOf("de"));

//Includes (retorna true o false)
console.log(producto.includes("Monitor"));

//ToUpperCase (convierte a mayusculas)
console.log(producto.toUpperCase());
//ToLowerCase (convierte a minusculas)
console.log(producto.toLowerCase());

//Length (retorna la cantidad de caracteres)
console.log(producto.length);

//Replace (reemplaza una palabra por otra)
console.log(producto.replace("Monitor", "Monitor curvo"));

//Template (permite concatenar variables)
const nombre = "Juan";
const apellido = "Perez";
const nombreCompleto = `${nombre} ${apellido};`;

console.log(nombreCompleto);

//Concat (concatena dos o mas cadenas de texto)
console.log(nombreCompleto.concat(" ").concat(producto));
