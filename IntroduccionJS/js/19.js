// For loop
for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("El numero ${i} es PAR");
  } else {
    console.log("El numero ${i} es IMPAR");
  }
}

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

for (let i = 0; i < carrito.length; i++) {
  console.log(carrito[i].nombre);
}

// While Loop primero revisa y luego ejecuta

let i = 1; //Indice
while (i <= 100) {
  //Condicion
  if (i % 2 === 0) {
    console.log("El numero ${i} es PAR");
  } else {
    console.log("El numero ${i} es IMPAR");
  }
  i++; //Incremento
}

// Do While Loop se ejecuta al menos una vez y luego eh ejecuta
let x = 0;
do {
  console.log(x);
  x++;
} while (x <= 10);
