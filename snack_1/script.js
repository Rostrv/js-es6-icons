/* 
Descrizione:
Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array.
*/

const auto = [{
        marca: 'bmw',
        modello: '320d',
        alimentazione: 'diesel'
    },
    {
        marca: 'dodge',
        modello: 'charger',
        alimentazione: 'benzina'
    },
    {
        marca: 'mazda',
        modello: 'mx-5',
        alimentazione: 'benzina'
    },
    {
        marca: 'subaru',
        modello: 'impreza',
        alimentazione: 'benzina'
    },
    {
        marca: 'renault',
        modello: 'clio',
        alimentazione: 'diesel'
    },
    {
        marca: 'tesla',
        modello: 'model3',
        alimentazione: 'elettrico'
    },
    {
        marca: 'fiat',
        modello: 'panda',
        alimentazione: 'metano'
    },
    {
        marca: 'maserati',
        modello: 'ghibli',
        alimentazione: 'diesel'
    },
    {
        marca: 'audi',
        modello: 'e-tron',
        alimentazione: 'elettrico'
    },
    {
        marca: 'seat',
        modello: 'leon',
        alimentazione: 'gpl'
    }
]

let benzina = auto.filter(auto => auto.alimentazione === 'benzina')

let diesel = auto.filter(auto => {
    return auto.alimentazione === 'diesel'
})

let altro = auto.filter(auto => auto.alimentazione !== 'benzina' && auto.alimentazione !== 'diesel')
console.log(benzina);
console.log(diesel);
console.log(altro);