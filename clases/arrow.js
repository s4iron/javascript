//clase 14
var sacha ={
    edad : 23,
    nombre:'erik'
}
function esMayorDeEdad(persona){
    if(MayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)    
    }else{
        console.log(`${persona.nombre} es menor de edad`)
    }
}
const MAYORIA_DE_EDAD = 18
/*
var MayorDeEdad =  function (persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}*/

//Escrito como arrow function
//const MayorDeEdad = persona => persona.edad >= MAYORIA_DE_EDAD

//destructurado como objeto
const MayorDeEdad = ({edad}) => edad >= MAYORIA_DE_EDAD

/*function permitirAcceso(persona){
    if(!MayorDeEdad(persona)){
        console.log('no pasa')
    }
}*/

//en arrow function
const permitirPasar = (persona)=>{
    if(!MayorDeEdad(persona)){
        console.log('no pasa')
    }
}