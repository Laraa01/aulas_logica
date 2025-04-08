const prompt = require ('prompt-sync') ()

let numerointeiro = parseInt(prompt("Digite um número inteiro"))

if(numerointeiro < 0){
    console.log(`O numero ${numerointeiro} é negativo`)
}else{console.log(`O numero ${numerointeiro} é positivo`)
}