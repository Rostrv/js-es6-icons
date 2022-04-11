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