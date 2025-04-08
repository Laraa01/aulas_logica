const prompt = require ('prompt-sync') ()

let numero = Number(prompt("Digite um numero"))
let dobro = numero * 2
let triplo = numero * 3
let aocubo = numero ** 3
console.log(`O dobro do ${numero} é igual a ${dobro}, o triplo é ${triplo} e elevado ao cubo é ${aocubo}`)