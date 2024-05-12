function obtenerEmpleados() {
  const archivo = "empleados.json";

  fetch(archivo)
    .then((resultado) => resultado.json())
    .then((datos) => {
      //console.log(datos)
      const { empleados } = datos;
      empleados.forEach((empleado) => {
        console.log(empleado.id);
        console.log(empleado.nombre);
        console.log(empleado.puesto);
        document.querySelector(".contenido").textContent = empleado.nombre;
      });
    });
}

obtenerEmpleados();
