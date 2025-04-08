const prompt = require ('prompt-sync') ()
let ano = Number(prompt("Digite um ano"))
let anoNasc = Number(prompt("Digite um numero"))
let idade = ano - anoNasc

switch(true){
    case idade <= 10:
    console.log("Você é uma criança")
    break
    case idade >= 11 && idade <= 17:
    console.log("Você é adolscente")
    break
    case idade >= 18 && idade <= 59:
    console.log("Você é um adulto")
    break
    case idade >=60:
    console.log("Você é um idoso")
    break
    default:
    console.log("Idade inválida")
}