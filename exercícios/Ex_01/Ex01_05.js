const prompt = require ('prompt-sync') ()
let metros = Number(prompt("Digite um numero"))

let coverCM = metros * 100
let milimetros = metros * 1000
let KM = metros / 1000
console.log(`A conversão de ${metros}metros para cm é ${coverCM}, para milímetros é ${milimetros} e para km é igual a ${KM}`)