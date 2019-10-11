//clase 19
var sacha={
    nombre:'sacha',
    edad:15,
    sexo:'mujer'
}
var dario={
    nombre:'dario',
    edad:19,
    sexo:'hombre'
}
var martin={
    nombre:'martin',
    edad:25,
    sexo:'joto'
}
var alan={
    nombre:'alan',
    edad:35,
    sexo:'hombre'
}
var personas = [sacha, alan, martin, dario]

console.log(personas)
for(var i=0;i<personas.length;i++){
    var persona =personas[i]
    console.log(`${persona.nombre} tiene ${persona.edad} a;os y es ${persona.sexo}`)
}
