const prompt = require ('prompt-sync') ()
let carros = "Gol;Corsa;Palio;Monza;Fusaca;"
let listaCarros = carros.split(';')
listaCarros.pop()
for(let[posicao, carro] of listaCarros.entries()){
    console.log(`Posição ${posicao}: ${carro}`)
}