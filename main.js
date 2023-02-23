const botonJugar = document.getElementById('btn_jugar');
const botonPiedra = document.getElementById('btn_piedra');
const botonPapel = document.getElementById('btn_papel');
const botonTijera = document.getElementById('btn_tijera');
const PIEDRA = 1
const PAPEL = 2
const TIJERA = 3
let ganadasJugador = 0, ganadasMaquina = 0, turnosJugados = 0;

function convertidor(n) {
    switch (n) {
        case 1:
            return "PIEDRA";
            break;
        case 2:
            return "PAPEL";
            break;
        case 3:
            return "TIJERA";
            break;
        default:
            break;
    }
}

function calcularResultado(turnoJugador) {
    turnoMaquina = Math.floor(Math.random() * 3) + 1;

    document.getElementById("estadoActualMaquina").innerHTML = convertidor(turnoMaquina);
    document.getElementById("estadoActualJugador").innerHTML = convertidor(turnoJugador);

    if (turnoMaquina == turnoJugador) {
        return "empate";
    }
    else if (turnoMaquina == PIEDRA && turnoJugador == PAPEL) {
        ganadasJugador++;
        return "Gana jugador";
    }
    else if (turnoMaquina == PIEDRA && turnoJugador == TIJERA) {
        ganadasMaquina++;
        return "Gana maquina";
    }
    else if (turnoMaquina == PAPEL && turnoJugador == TIJERA) {
        ganadasJugador++;
        return "Gana jugador";
    }
    else if (turnoMaquina == PAPEL && turnoJugador == PIEDRA) {
        ganadasMaquina++;
        return "Gana maquina";
    }
    else if (turnoMaquina == TIJERA && turnoJugador == PIEDRA) {
        ganadasJugador++;
        return "Gana jugador";
    }
    else if (turnoMaquina == TIJERA && turnoJugador == PAPEL) {
        ganadasMaquina++;
        return "Gana maquina";
    }
}

function turno(option) {
    document.getElementById("resultados").innerHTML = calcularResultado(option);
    document.getElementById("puntajeMaquina").innerHTML = ganadasMaquina;
    document.getElementById("puntajeJugador").innerHTML = ganadasJugador;


    console.log("turnos jugados", turnosJugados);
    console.log("turnos totales", turnosTotales);
    if (turnosJugados == turnosTotales) {
        if (ganadasJugador > ganadasMaquina) {
            alert("GANASTE EL JUEGO!");
        }
        else if (ganadasJugador < ganadasMaquina) {
            alert("GANA LA MAQUINA :O");
        }
        else {
            alert("UFF EMPATE!");
        }
        alert("Fin del juego!")
        document.getElementById("cartas").style.display = "none";
        document.getElementById("puntaje").style.display = "none";
    }
}

botonJugar.addEventListener('click', () => {
    ganadasJugador = 0, ganadasMaquina = 0, turnosJugados = 0;
    turnosTotales = + prompt("BIENVENIDO! CUANTAS VECES QUIERE JUGAR? ");
    document.getElementById("puntajeMaquina").innerHTML = "";
    document.getElementById("puntajeJugador").innerHTML = "";
    document.getElementById("resultados").innerHTML = "";
    document.getElementById("estadoActualMaquina").innerHTML = "";
    document.getElementById("estadoActualJugador").innerHTML = "";
    document.getElementById("cartas").style.display = "flex";
    document.getElementById("puntaje").style.display = "flex";
});

botonPiedra.addEventListener('click', () => {
    turno(PIEDRA);
    turnosJugados++;
});

botonPapel.addEventListener('click', () => {
    turno(PAPEL);
    turnosJugados++;
});

botonTijera.addEventListener('click', () => {
    turno(TIJERA);
    turnosJugados++;
});