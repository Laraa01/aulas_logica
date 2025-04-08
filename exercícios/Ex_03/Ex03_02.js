const prompt = require ('prompt-sync') ()
let ano = Number(prompt("Digite um ano"))
let anoNasc = Number(prompt("Digite um numero"))
let idade = ano - anoNasc

if(idade <= 10){
    console.log("A pessoa é criança")}
else if(idade >= 11 && idade <= 17){
    console.log("A pessoa é adolescente")}
else if(idade >= 18 && idade <= 59){
    console.log("A pessoa é adulta")}
    else{
    console.log("A pessoa é idosa")
}
