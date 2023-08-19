// Fecha objetivo en el formato: Año, Mes (0-11), Día, Hora, Minuto, Segundo
var targetDate = new Date("2023-08-24T20:00:00").getTime();

// Función para actualizar el contador
function updateCountdown() {
    var now = new Date().getTime();
    var timeRemaining = targetDate - now;

    if (timeRemaining <= 0) {
        // Si la fecha objetivo ha pasado, muestra un mensaje
        document.getElementById("countdown").innerHTML = "¡Tiempo cumplido!";
    } else {
        // Calcula los días, horas, minutos y segundos restantes
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Muestra el tiempo restante en el elemento con el id "countdown"
        document.getElementById("countdown").innerHTML = days + " dias, " + hours + " horas, " + minutes + " minutos, " + seconds + " segundos";
    }
}
// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);