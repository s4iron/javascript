//clase 26
//que es this 

function heredaDe(prototipoHijo,prototipoPadre) {
    var fn = function () {}
    fn.prototype = prototipoPadre.prototype
    prototipoHijo.prototype = new fn
    //asignar funcion contructora
    prototipoHijo.prototype.constructor = prototipoHijo
} 

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

function desarrollador(nombre, apellido){
    this.nombre = nombre
    this.apellido =  apellido
}

heredaDe(desarrollador, persona)

desarrollador.prototype.saludar = function(){
    console.log(`hola me llamo ${this.nombre} y soy Desarrollador`)
}

//var sacha = new persona('erik', 'hernandez',1.95)

//agregar altura y funcion soy alto de acuerdo a si mide mas de 1.8