//clase 27
class Persona{
    constructor(nombre, apellido, altura){
        this.nombre = nombre
        this.apellido =  apellido 
        this.altura = altura
        return this
    }
    saludar(fn){
        console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
        if(fn){//verifica que la funcion se halla ejecutado
            var {nombre, apellido}=this
            fn(nombre,apellido)
        }
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

    saludar(fn){
        console.log(`hola me llamo ${this.nombre} y soy Desarrollador`)
        if(fn){//verifica que la funcion se halla ejecutado
            fn(this.nombre,this.apellido,true)
        }
    }
}

function responderSaludo(nombre, apellido, esDev){
    console.log(`Buen dia ${nombre} ${apellido}`)
    if(esDev){
        console.log(`Ah mira, no sabia que eras dev`)
    }
}
var sacha = new Persona('erik', 'hernandez',1.95)
var char = new Desarrollador('char', 'cano',1.48)

sacha.saludar(responderSaludo)
char.saludar(responderSaludo)