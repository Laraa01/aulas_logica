const prompt = require ('prompt-sync') ()

let numero = Number(prompt("Digite um numero"))
let numero2 = Number(prompt("Digite um numero"))
if(numero >= numero2){
    console.log(`O numero ${numero} é maior que ${numero2}`)
}else{
    console.log(`O numero ${numero2} é menor que ${numero}`)
}