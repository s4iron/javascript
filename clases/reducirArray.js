//clase 22
var sacha={
    nombre:'sacha',
    edad:15,
    sexo:'mujer',
    altura:1.50,
    libros:123
}
var dario={
    nombre:'dario',
    edad:19,
    sexo:'hombre',
    altura:1.70,
    libros:321
}
var martin={
    nombre:'martin',
    edad:25,
    sexo:'joto',
    altura:1.80,
    libros:34
}
var alan={
    nombre:'alan',
    edad:35,
    altura:1.90,
    sexo:'hombre',
    libros:56
}

var personas = [sacha, alan, martin, dario]
//contador de libros en total
/*
var acum = 0

for(var i =0;i<personas.length;i++){
    acum=acum +personas[i].libros
}
console.log(`En total hay ${acum} libros`)
*/

/*const reducer = (acum,personas)=>{
    return acum + personas.libros
}*/

const reducer = (acum,personas)=> acum + personas.libros //const reducer = (acum,{ libros })=> acum + libros

var totalLibros =personas.reduce(reducer, 0)//funcion y acomulador (parametros)

console.log(`En total hay ${totalLibros} libros`)