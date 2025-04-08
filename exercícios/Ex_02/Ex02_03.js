const prompt = require ('prompt-sync') ()

let numero = Number(prompt("Digite um numero inteiro"))
let valor = numero % 2

if(valor == 0){ 
    console.log (`O ${numero} vai ser par`)
}else{
console.log(`${numero} ímpar`)
}