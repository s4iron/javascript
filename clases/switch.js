//clase 18
var signo = prompt('Cual es tu Signo')
if(signo === 'acuario'){
    console.log('este es acuario')
}
switch(signo){
    case 'acuario':
        console.log('switch acuario')
    break
    case 'Picis':
        console.log('switch Picis')
    break
    case 'geminis':
        console.log('switch geminis')
    break
    default:
        console.log('signo erroneo')
    break
}