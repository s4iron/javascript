//clase 27
class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido =  apellido 
        this.altura = altura
        return this
    }
    saludar(){
        console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto(){
        return this.altura > 1.8//this de una arrow function apunta al this que esta afuerta de la arrow
    }
}

class Desarrollador extends Persona{
    constructor(nombre, apellido, altura){
        //el super llama al contructor
        super(nombre,apellido,altura)

    }

    saludar(){
        console.log(`hola me llamo ${this.nombre} y soy Desarrollador`)
    }
}


//var sacha = new persona('erik', 'hernandez',1.95)

//agregar altura y funcion soy alto de acuerdo a si mide mas de 1.8