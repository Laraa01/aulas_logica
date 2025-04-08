const prompt = require('prompt-sync') ()

//operação com variaveis
let nr1 = Number(prompt("Digite um numero?"))
let nr2 = Number(prompt("Digite um numero?"))
let soma = nr1 + nr2
console.log(`A soma entre ${nr1} + ${nr2} é igual: ${soma}`)

let subtracao = nr1 - nr2
console.log(`A subtração entre ${nr1} - ${nr2} é igual: ${subtracao}`)

let multiplicacao = nr1 * nr2
console.log(`A multiplicacao entre ${nr1} * ${nr2} é igual: ${multiplicacao}`)

let divisao = nr1 / nr2
console.log(`A divisao entre ${nr1} / ${nr2} é igual: ${divisao}`)

let exponenciacao = nr1 ** nr2
console.log(`A exponenciacao entre ${nr1} ** ${nr2} é igual: ${exponenciacao}`)

// Calculando novo preço do celular com desconto
let valor = Number(prompt("Digite o preço do celular"))
let desconto = Number(prompt("Digite o preço do desconto"))

valor = valor - desconto;
console.log(`O valor do celular com desconto é R$${valor}`)

// Exercícios
let numero = Number(prompt("Digite um numero"))
let dobro = numero * 2
let metade = numero / 2
console.log(`A metade do numero é ${metade} e o dobro é ${dobro}`)

var horas_por_dia = 8
var dias_totais = 15
var horas_de_trabalho = horas_por_dia * dias_totais
var custo_hora = 100
var custo_total = horas_de_trabalho * custo_hora
console.log(custo_total)