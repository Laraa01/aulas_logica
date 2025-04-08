const prompt = require ('prompt-sync') ()
let preco = Number(prompt('digite ompreço do produto'))
let precoCOmDesconto = preco * 5 / 100
console.log(`Preço sem desconto ${preco.toFixed(2)}`)
console.log(`Preço com desconto ${precoCOmDesconto.toFixed(2)}`)