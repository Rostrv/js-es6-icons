/*Crea un array di oggetti che rappresentano degli animali.
Ogni animale ha un nome, una famiglia e una classe.*/

const animals = [{
        nome: "leone",
        famiglia: "felidi",
        classe: "mammiferi"
    },
    {
        nome: "cane",
        famiglia: "canidi",
        classe: "mammiferi"
    },
    {
        nome: "gallina",
        famiglia: "fasianidi",
        classe: "uccelli"
    },
    {
        nome: "montone",
        famiglia: "equinidi",
        classe: "mammiferi"
    },
    {
        nome: "cavallo",
        famiglia: "equinidi",
        classe: "mammiferi"
    },
    {
        nome: "civetta",
        famiglia: "fasianidi",
        classe: "uccelli"
    },
    {
        nome: "elefante",
        famiglia: "canidi",
        classe: "mammiferi"
    },
    {
        nome: "gazza",
        famiglia: "fasianidi",
        classe: "uccelli"
    },
]

const mammiferi = animals.filter(mammifero => mammifero.classe === "mammiferi")
console.log(mammiferi);