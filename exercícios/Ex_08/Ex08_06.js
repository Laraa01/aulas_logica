const prompt = require('prompt-sync') ()
let vogais = ['a', 'e', 'i', 'o', 'u']
let palavra = prompt("Digite uma palavra: ")
let qtdvogais = 0
for(let letra of palavra){
    if(vogais.includes(letra)){
        qtdvogais++
    }
}
console.log(`${palavra} tem ${qtdvogais} vogais`)