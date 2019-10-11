//clase 13
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
function MayorDeEdad(persona){
    return persona.edad >= MAYORIA_DE_EDAD
}