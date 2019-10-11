//clase 8
//____________________________________________
var sacha={
    nombre:'sachar',
    apellido:'holi',
    edad:22
}

function imprimirNombreEnMayuscula({nombre}){
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayuscula(sacha)
imprimirNombreEnMayuscula({nombre:'holi'})
imprimirNombreEnMayuscula()