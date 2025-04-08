const prompt = require ('prompt-sync') ()
let reais = Number(prompt("Digitequanto de dinheiro você tem na carteira"))
let cotacao = Number(prompt("Digite a cotação em dolares"))
let dolares = reais / cotacao

console.log(`Tenho R$${reais} na minha carteira que equivale á : $${dolares.toFixed(2)} `)