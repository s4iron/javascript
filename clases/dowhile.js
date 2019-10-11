//clase 17
var contador= 0
const llueve =() => Math.random() < 0.25 
do{
    contador+=1
}while(!llueve())
if(contador > 1){
    console.log(`fui a ver si llovia ${contador} veces`)
}
else{
    console.log('fui a ver si llovia una vez')
}