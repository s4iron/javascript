//clase 9
//____________________________________________
var sacha={
    nombre:'sachar',
    apellido:'holi',
    edad:22
}
var dario={
    nombre:'ario',
    apellido:'salazar',
    edad:28
}

function imprimirNombreEnMayuscula(persona){
    var {nombre} = persona // es igual a var nombre = persona.nombre
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayuscula(sacha)
imprimirNombreEnMayuscula({nombre:'holi'})

imprimirNombreYEdad(sacha);

function imprimirNombreYEdad(persona){
    //hola me llamo sacha y tengo 28 años
    //hola me llamo dario y tengo 27 años
    console.log(`Hola me llamo ${persona.nombre} y tengo ${persona.edad}`)
}