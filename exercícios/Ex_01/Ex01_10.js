const prompt = require ('prompt-sync') ()

let dias = parseInt(prompt('Digite a quantidade de dias que o carro foi alugado'))
let KmPercorrido = parseFloat(prompt("Digite  a qtd de km percorrido"))
let custoPordia = 60
let custoPorKM = 0.15
let custototal = (dias * custoPordia) + (KmPercorrido * custoPorKM)

console.log(`Custo da viagem: ${custototal.toFixed(2)}`)