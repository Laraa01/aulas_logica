const prompt = require ('prompt-sync') ()
let nota1 = Number(prompt('Digite um numero'))
let nota2 = Number(prompt('Digite um numero'))
let soma = nota1 + nota2
let divisao = soma / 2
console.log(`A soma das notas vão ser ${soma} e a média ${divisao}`)