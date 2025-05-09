const datos = {
  gio: {
    nombre: "Gio",
    logros: "Debut en 2019. MAE Young Classic. Finishers: Better End, Scissor Kick."
  },
  rebecca: {
    nombre: "Rebecca Fox",
    logros: "Luchadora destacada en parejas y tríos. Finishers técnicos."
  }
};

function verDetalles(id) {
  document.getElementById("nombre").textContent = datos[id].nombre;
  document.getElementById("logros").textContent = datos[id].logros;
  document.getElementById("detalles").style.display = "block";
}

function cerrarDetalles() {
  document.getElementById("detalles").style.display = "none";
}
