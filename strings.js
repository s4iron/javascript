var nombre = 'sacha', apellido =' hernandez'
var nombreEnMayuscula = nombre.toUpperCase()+apellido.toUpperCase()
console.log(nombreEnMayuscula)
var firstLetter = nombre.charAt('10')//busca caracter en posicion
var cantidadLetras = nombre.length//cuenta caracteres
var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`//dentro de las {}se puede colocar codigo js
var str = nombre.substr(1,4) //acceder a un substring