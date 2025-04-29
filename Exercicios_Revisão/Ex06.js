const prompt = require('prompt-sync')()
let pesohomem = 72.7
let pesomulher = 62.1
let altura = Number(prompt("Digite um numero"))
calcular = (`${ (pesohomem * altura) - 58}`)
calcular1 = (`${(pesomulher * altura) - 44.7}`)

console.log(`o peso do homem é ${calcular} e da mulher é ${calcular1}`)
