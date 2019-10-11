yue={
    edad:15,
    nombre:'yue'
}
function cumpleanos(persona){
    return{
        ...persona,
        edad:persona.edad+1
    }
}
