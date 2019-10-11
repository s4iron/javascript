var angel = {
    nombre: 'Angel',
    apellido: 'Sulbaran',
    edad: 23,
    peso: 70

}

var pepe = {
    nombre: 'Pepe',
    apellido: 'Trueno',
    edad: 13
}

console.log(`anualmente al inicio ${angel.nombre} pesa ${angel.peso}kg`)

const INCREMENTO_DE_PESO = 0.3

const aumentarDePeso = persona => persona.peso += INCREMENTO_DE_PESO
const adelgazar = persona => persona.peso -= INCREMENTO_DE_PESO
const comeMucho = () => Math.random() < 0.3
const realizaDeporte = () => Math.random() < 0.4
var dias = 0

const META = angel.peso - 3

while (angel.peso > META) {
    //debugger
    if(comeMucho()) {
        aumentarDePeso(angel)
    }
    if(realizaDeporte()) {
        adelgazar(angel)
    }
    dias += 1
}

console.log(`pasaron ${dias} dias hasta que ${angel.nombre} adelgazo 3kg`)