const prompt = require('prompt-sync') ()
let inicio = Number(prompt("Digite o valor do início"))
let fim = Number(prompt("Digite o valor do fim"))
let passo = Number(prompt("Digite o valor do passo"))

for(inicio; inicio < fim; inicio += passo){
    console.log(`Valor inical: ${inicio}`)
    console.log(`Valor final: ${fim}`)
    console.log(`Valor de passo: ${passo}`)
    console.log(`=============================`)
}