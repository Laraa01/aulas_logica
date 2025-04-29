//Crie um algoritmo que receba em variável global o valor atual do dólar e do euro, crie uma
//função que receba o valor a ser convertido e imprima a conversão em dólar e em euro

var dolar = 5.65
var euro = 6.44
function Valor(real){
valordolar = real / dolar
valoreuro = real / euro

console.log(`Conversão de dolar U$${valordolar.toFixed(2)}`)
console.log(`Conversão de euro $${valoreuro.toFixed(2)}`)
}
Valor(50)
Valor(100)