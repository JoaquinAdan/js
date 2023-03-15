const nombres = ["Andres", "Diego", "Platzi", "Ramiro", "Silvia"];

for (let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

//* PAR INPAR

for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? console.log(i + "Es par") : console.log(i + "No es par");
}

const estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
  console.log(`Hola, ${estudiante}`);
}
//* FOR
for (let i = 0; i < estudiantes.length; i++) {
  saludarEstudiantes(estudiantes[i]);
} 
//* FOR/OF
for (let estudiante of estudiantes) {
    saludarEstudiantes(estudiante)
}
//* WHILE
while(estudiantes.length > 0) {
    let estudiante = estudiantes.shift()
    saludarEstudiantes(estudiante);
}