const API_URL = 'https://swapi.co/api/'
const PEOPLE_URL = 'people/:id'
const lukerUrl = `${API_URL}${PEOPLE_URL.replace(':id',1)}` 
const opts = {crossDomain:true}//dominio externo
const onResponse = function (people){
    console.log(`hola yo soy, ${people.name}`)
    console.log(arguments)
    console.log(arguments.name)

}
$.get(lukerUrl,opts,onResponse)