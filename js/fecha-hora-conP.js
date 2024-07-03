
//Mostrar fecha y hora
function mostrarHoraFecha() {
    let elemento = document.querySelector("#horaFecha");
  
    let fecha = new Date();
  
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
  
    let dia = fecha.getDate();
    let mes = fecha.getMonth() + 1;
    let anio = fecha.getFullYear();
  
    let horaFechaString =
      "Hoy es " +
      dia +
      "/" +
      mes + "/" + anio + "" + horas + ":" + minutos + ":" + segundos;
  
    elemento.textContent = horaFechaString;
  }
  
  mostrarHoraFecha();
  
  setInterval(mostrarHoraFecha, 1000);