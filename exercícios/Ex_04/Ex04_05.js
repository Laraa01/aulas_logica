const prompt = require ('prompt-sync') ()
let nota = Number(prompt("Digite uma nota"))
let nota2 = Number(prompt("Digite uma nota"))
let media = (nota + nota2) / 2
console.log(`A média entre ${nota + nota2} / ${2} é igual: ${media}`)
switch(true){
    case media > 7:
        console.log("Aprovado")
        break
    case media <= 7 && media > 5:
        console.log("Recuperação")
        break
    case media < 5 :
        console.log("Reprovado")
    break
    default:
        console.log("Valor inválido")
}