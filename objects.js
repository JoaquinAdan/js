const miAuto = {
    mark: "Toyota",
    model: "Corolla",
    year: 2020,
    detalleDelAuto: function () {
        console.log(`Auto ${this.mark}, ${this.model} ${this.year}`)
    }
}
// miAuto.detalleDelAuto()

//* Funcion constructura

function auto(mark, model, year) {
    this.mark = mark;
    this.model = model;
    this.year = year;

}
const autoNuevo = new auto("Tesla", "Model 3", 2020)
const autoNuevo2 = new auto("Tesla", "Model X", 2018)
const autoNuevo3 = new auto("Toyota", "Corola", 2021)

function crearAuto(mark, model, year) {
    const autoGenerado = new auto(mark, model, year)
    console.log(autoGenerado)
}

crearAuto("Peugeot", "206", 2015)
crearAuto("Gol", "Tren", 2012)

//------------------------//

let autos = [];
for(let i = 0 ; i < 30 ; i++){
  let mark = prompt("Ingresa la marca del auto");
  let model = prompt("Ingresa el modelo del auto");
  let year = prompt("Ingresa el año del auto");
  autos.push(new auto (mark, model, year));
}

for(let i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
}