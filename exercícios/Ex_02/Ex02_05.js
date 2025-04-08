const prompt = require ('prompt-sync') ()

let ano = parseInt(prompt("Digite o ano de nascimento"))

if(ano <= 2007){console.log(`A pessoa que nasceu em ${ano} é maior de idade`)
}else{
    console.log(`A pessoas que nasceu em ${ano} é menor de idade`)}