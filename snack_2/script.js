/*A partire da un array di stringhe,
crea un secondo array formattando le stringhe del primo array 
in minuscolo e con l’iniziale maiuscola.*/
let names = ['grogu', 'MANDO', 'Luke']

let correct_names = []

names.forEach(element => {
    correct_names.push(element.charAt(0).toLocaleUpperCase() + element.slice(1).toLocaleLowerCase())
});

console.log(correct_names);