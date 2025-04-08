// Estruturas condicionais e operadores relacionais
let a = 2
let b = 3

console.log(a == b)// relação de igualdade
console.log(a != b)// relação de diferença
console.log(a > b)// maior
console.log(a >= b)// maior ou igua
console.log(a < b)// menor
console.log(a <= b)// menor ou igual

//Estrutura condicionais
let tenhoIngresso = true
if(tenhoIngresso == true){
    console.log('Posso entrar!')}

const prompt = require("prompt-sync") ()
//Validando maioridade
//recber o valor da idade
let idade = Number(prompt('Qual sua idade?'))
if(idade >= 18){console.log('Maior idade')}

//Estrutura condicionais
tenhoIngresso = false
if(tenhoIngresso == true){
    console.log('Posso entrar!')}
    else{
        console.log('estou barrado no baile')}

    idade = Number(prompt('Digite a idade'))
    if(idade >=18){console.log('Você é maior de idade')
    }else{
console.log('Você é menor de idade')}
