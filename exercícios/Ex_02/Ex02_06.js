const prompt = require ('prompt-sync') ()
let numero = parseInt(prompt("Digite o numero"))
let numero2 = parseInt(prompt("Digite numero"))

if ( numero == numero2){
    console.log("Números iguais")
}else{ console.log(`Números diferentes`)}
