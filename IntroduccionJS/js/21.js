// This

const reservacion = {
  nombre: "John",
  apellido: "McKinley",
  total: 5000,
  pagado: false,

  informacion: function () {
    console.log(
      `El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`
    );

    //    this.nombre    this.total
  },
};

const reservacion2 = {
  nombre: "Myke",
  apellido: "McKinley",
  total: 5000,
  pagado: false,

  informacion: function () {
    console.log(
      `El cliente ${this.nombre} reservó y su cantidad a pagar es de ${this.total}`
    );

    //    this.nombre    this.total
  },
};

reservacion.informacion();
reservacion2.informacion();
