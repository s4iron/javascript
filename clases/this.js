//clase 25
//que es this
function persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido =  apellido 
    this.altura = altura
    return this
}

persona.prototype.saludar = function(){
    console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
}

persona.prototype.soyAlto = function(){
    debugger
    return this.altura > 1.8//this de una arrow function apunta al this que esta afuerta de la arrow
}

var sacha = new persona('erik', 'hernandez',1.95)

//agregar altura y funcion soy alto de acuerdo a si mide mas de 1.8