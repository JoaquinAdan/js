//* IF, ELSEIF, ELSE

let piedra = "Piedra";
let papel = "Papel";
let tijera = "Tijera";

let resultado = function (user, cpu) {
  if (user != cpu) {
    if (user === piedra && cpu === tijera) {
      console.log("el usuario GANO con " + piedra);
    } else if (user === papel && cpu === piedra) {
      console.log("el usuario GANO con " + papel);
    } else if (user === tijera && cpu === papel) {
      console.log("el usuario GANO con " + tijera);
    } else {
      console.log("La CPU Gano!!");
    }
  } else if (user === cpu) {
    console.log("Empate");
  }
};

resultado(piedra, tijera); // ej: el usuario GANO con Piedra

//* OPERADOR TERNARIO

const i = 10
i % 2 === 0 ? console.log(i + "Es par") : console.log(i + "No es par");

//* SWITCH

var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera ");
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var machine = options[Math.floor(Math.random() * 3)];

switch (true) {
  case user === machine:
    console.log("es un empate");
    break;
  case machine === "piedra" && user === "papel":
    console.log("Ganaste");
    break;
  case machine === "papel" && user === "tijera":
    console.log("Ganaste");
    break;
  case machine === "tijera" && user === "piedra":
    console.log("Ganaste");
    break;
  default:
    console.log("¡Perdiste!");
}
