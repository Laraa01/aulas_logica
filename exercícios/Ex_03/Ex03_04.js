const prompt = require ('prompt-sync') ()
let nota1 = Number(prompt("Digite a nota"))
let nota2 = Number(prompt("Digite a nota"))
let soma = nota1 + nota2
let media = soma / 2

if(media >= 7){console.log("Aprovado")}
else if(media < 7 && media > 5){
    console.log("Recuperação")}
else if(media < 5){console.log("Reprovado")}