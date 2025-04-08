const prompt = require ('prompt-sync') ()
let dia = Number(prompt("Digite um numero"))
switch(true){
    case dia == 1:
    console.log("Domingo")
    break
    case dia == 2:
    console.log("Segunda-Feira")
    break
    case dia == 3:
    console.log("Terça-Feira")
    break
    case dia == 4:
    console.log("Quarta-Feira")
    break
    case dia == 5:
    console.log("Quinta-Feira")
    break
    case dia == 6:
    console.log("Sexta-Feira")
    break
    case dia == 7:
    console.log("Sabado")
    break
    default:
    console.log("Operação Errada")
}