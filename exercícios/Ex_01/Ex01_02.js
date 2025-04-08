const prompt = require("prompt-sync") ()

let numero = Number(prompt('Digite um numero'))
let sucessor = numero + 1
let antecessor = numero - 1
console.log(`O antecessor do ${numero} é igual a ${antecessor} e o sucessor ${sucessor}`)