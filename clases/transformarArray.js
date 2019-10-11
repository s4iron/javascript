//clase 21
//clase 20
//clase 19
var sacha={
    nombre:'sacha',
    edad:15,
    sexo:'mujer',
    altura:1.50
}
var dario={
    nombre:'dario',
    edad:19,
    sexo:'hombre',
    altura:1.70
}
var martin={
    nombre:'martin',
    edad:25,
    sexo:'joto',
    altura:1.80
}
var alan={
    nombre:'alan',
    edad:35,
    altura:1.90,
    sexo:'hombre'
}
var personas = [sacha, alan, martin, dario]

/*const pasarAlturaACms =(persona) =>{
    return {
        ...persona,
        altura:persona.altura *100
    }
}*/
// tambien se puede escribir ese retorno de la siguiente manera
const pasarAlturaACms =(persona) =>({//el parentesis indica que solo es retorno
        ...persona,
        altura:persona.altura *100
})
//map ejecuta la funcion en cada uno de los componentes del array
var personasCms = personas.map(pasarAlturaACms)

console.log(personasCms)
