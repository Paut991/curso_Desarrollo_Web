//Metodos de Propiedad

const reproductor = {
  reproducir: function (id) {
    console.log(`Reproduciendo canción con el id ${id}`);
  },
  pausar: function () {
    console.log("pausando...");
  },

  crearPlaylist: function (nombre) {
    console.log(`Creando la playlist ${nombre}`);
  },
  crearPlaylist: function (nombre) {
    console.log(`Creando la playlist ${nombre}`);
  },
};

reproductor.borrarCancion = function (id) {
  console.log(`Borrando la cancion ${id}`);
};

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(20);
reproductor.crearPlaylist("Heavy Metal");
reproductor.crearPlaylist("House Music");
