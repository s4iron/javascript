//clase 15
var sacha ={
    edad : 23,
    nombre:'erik',
    peso:85
}
console.log(`al inicio del a;o ${sacha.nombre} pesa ${sacha.peso} kilos`)

const MODIFICACION_PESO=0.2
const DIAS_DEL_ANO=1000
const aumentarPeso = (persona)=>{
    persona.peso+=MODIFICACION_PESO
}

const disminuirPeso = persona=> persona.peso-=MODIFICACION_PESO

for(var i = 1;i<=DIAS_DEL_ANO;i++){
    var random = Math.random()
    if (random <= 0.25){
        //aumenta de peso
        aumentarPeso(sacha)
    }else if(random <= 0.5){//disminuye de peso
        disminuirPeso(sacha)
    }
}

console.log(`al final del a;o ${sacha.nombre} pesa ${sacha.peso.toFixed(2)} kilos`)
