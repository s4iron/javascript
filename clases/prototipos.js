//clase 23
//CONSTRUCTORES
function persona(nombre, apellido, altura){
    this.nombre = nombre
    this.apellido =  apellido 
    this.altura = altura
    return this
}

persona.prototype.medir = function(){
    var queSoy
    if(this.altura >1.8){
        queSoy='alto'
    }else{
        queSoy='enano'
    }
    return queSoy
}

persona.prototype.saludar= function(){
    console.log(`hola me llamo ${this.nombre} ${this.apellido} y soy ${this.medir()}`)
}
var sacha = new persona('erik', 'hernandez',1.74)

sacha.saludar()

sacha.medir()
//agregar altura y funcion soy alto de acuerdo a si mide mas de 1.8