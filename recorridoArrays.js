let articles = [
  { name: "Bici", cost: 3000 },
  { name: "Tv", cost: 2500 },
  { name: "Libro", cost: 320 },
  { name: "Celular", cost: 10000 },
  { name: "Laptop", cost: 20000 },
  { name: "Teclado", cost: 2500 },
  { name: "Audiofonos", cost: 1600 },
];

//! Devuelve por lo que hayas filtrado
const articlesFilered = articles.filter(function (article) {
  return article.cost <= 3000;
});

//! retorna un objeto de lo que le pongas
const articlesName = articles.map(function (article) {
  return article.name;
});

//! te devuelve la propiedad que buscas array
const findArticles = articles.find(function (article) {
  return article.name == "Laptop";
});

//! retorna cada uno de los que se le pida
articles.forEach(function (article) {
  // console.log(article.name)
});

//! retorná true o false dependiendo de la validacion
const cheapArticles = articles.some(function (article) {
    return article.cost <= 1800
});

console.log(findArticles);

//! Array de números

let numArray = [1,2,3,4,5]

function newNum(){
  numArray.push(6,7)
}

newNum()

//! --- SHIFT ---

//Creamos el array
let array = [1,2,3,4,5]
// console.log(array)

// Aplicamos .shift()
let shiftArray = array.shift()

//Revisamos. El output debe de ser [2,3,4,5]
// console.log(array)

// --- POP ---

//Creamos el array
let array2 = [1,2,3,4,5]
// console.log(array2)

// Aplicamos .shift()
let shiftArray2 = array2.pop()

//Revisamos. El output debe de ser [1,2,3,4]
// console.log(array2)