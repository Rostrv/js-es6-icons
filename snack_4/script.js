/*Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un’età.
Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome
 e l’indicazione se può guidare, in base all’età.*/

const users = [{
        nome: 'Homer',
        cognome: 'Simpson',
        eta: 39,
    },
    {
        nome: 'Marge',
        cognome: 'Simpson',
        eta: 39,
    },
    {
        nome: 'Bart',
        cognome: 'Simpson',
        eta: 10,
    },
    {
        nome: 'Lisa',
        cognome: 'Simpson',
        eta: 8,
    },
    {
        nome: 'Maggie',
        cognome: 'Simpson',
        eta: 1,
    },
    {
        nome: 'Abram',
        cognome: 'Simpson',
        eta: 82,
    }
]

const guida = users.map(user => {

    if (user.eta < 18) {
        return (`${user.nome} ${user.cognome} ha ${user.eta} anni, non può guidare`)

    } else {
        return (`${user.nome} ${user.cognome} ha ${user.eta} anni, può guidare`)
    }
});
console.log(guida);