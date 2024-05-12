//Arrow Functions

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(5, 10);

const aprendiendo = () => {
  console.log("Aprendiendo JavaScript");
};

//Estructura de control
const puntaje = 1000;

if (puntaje == 1000) {
  console.log("Si es igual");
} else {
  console.log("No es igual");
}

//Otra estructuta de control
const efectivo = 1000;
const carrito = 800;

if (efectivo > carrito) {
  console.log("Pago correcto");
} else {
  console.log("Fondos insuficientes");
}

const rol = "EDITOR";

if (rol === "ADMINISTRADOR") {
  console.log("Acceso a todo el sistema");
} else if (rol === "EDITOR") {
  console.log("Eres editor, puedes entrar pero no puedes hacer mucho");
} else {
  console.log("No tienes acceso");
}

//Switch
const metodoPago = "cheque";
switch (metodoPago) {
  case "efectivo":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case "cheque":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  case "tarjeta":
    console.log(`Pagaste con ${metodoPago}`);
    break;
  default:
    console.log("Aun no has pagado");
    break;
}

//Ciclos
