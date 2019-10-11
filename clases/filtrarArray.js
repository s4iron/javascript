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

const esAlta = persona =>{
    return persona.altura > 1.7
}

//var personasAltas = personas.filter(esAlta)//filter permite condicionar un array
var personasAltas = personas.filter(function (persona){
    return persona.altura>1.8
})
console.log(personasAltas)

const esBaja = persona=>{
    return persona.altura <1.8
}
var personasBajas = personas.filter(esBaja)
console.log(`son enanitas ${personasBajas[1].nombre}`)