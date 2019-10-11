var edad = 23
edad += 5 //suma sobre su misma variable
var peso = 75
peso -= 2 //resta sobre su misma variable
var holi = 0
holi -= peso //resta en holi la variable peso
var char = 300.3
var multiplicacion = char*3//js no trabaja bien con decimales, no es precisa
var multiplicacionCorregida = Math.round(char * 100 * 3) / 100//js no trabaja bien con decimales, no es precisa
var totalStr = multiplicacionCorregida.toFixed(2)//define cuantos decimales tener en cuenta
var total2 = parseFloat(totalStr)//convierte string en decimal
var pizza = 8
var personas = 3
var cantidadPorcionesPorPersona= pizza/personas


