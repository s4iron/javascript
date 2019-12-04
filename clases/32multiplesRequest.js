const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'

const opts = {crossDomain:true}//dominio externo

const peopleResponse = function (persona){//people == data
    console.log(`hola yo soy , ${persona.name}`)
}
function optenerPersonaje(id){
    const url = `${API_URL}${PEOPLE_URL.replace(':id',id)}` 
    $.get(url,opts,peopleResponse)
}
optenerPersonaje(1);
optenerPersonaje(2);
optenerPersonaje(3);