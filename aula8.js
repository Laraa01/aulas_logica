const prompt = require('prompt-sync') ()

let altura = Number(prompt("Digite sua altura"))
let peso = Number(prompt("Digite sua peso"))
let imc = peso / (altura ** 2)

if( imc < 18.5){
    console.log(`Abaixo do peso idela`)
}else if (imc >= 18.5 && imc < 25){
    console.log(`Peso ideal`)
}else if (imc >= 25 && imc < 30){console.log
    (`Sobrepeso`)
}else{console.log(`Obesidade`)}

// verificar se o tiangulo é equilatero ou escaleno
// receber lado 1
let lado1 = Number(prompt('digite o valor do lado um'))
let lado2 = Number(prompt('digite o valor do lado dois'))
let lado3 = Number(prompt('digite o valor do lado três'))
// verificar se o triangulo é equilatero caso tenha todos os 
// lados iguais
let eq = (lado1 == lado2) && (lado2 == lado3)
let es = (lado1 != lado2) && (lado2 != lado3) && (lado1 != lado3)

console.log('Triangulo equilatero?', eq, `Triangulo escaleno`, es)

//Exercícios
let Lado4 = Number(prompt('Digite o lado'))
let Lado5 = Number(prompt('Digite o lado'))
let Lado6 = Number(prompt('Digite o lado'))

if((Lado4 == Lado5) && (Lado5 == Lado6)){
    console.log("Triangulo equilatero")
}else{
    console.log("Triangulo escaleno")
}

let Lado7 = Number(prompt('Digite o lado'))
let Lado8 = Number(prompt('Digite o lado'))
let Lado9 = Number(prompt('Digite o lado'))
if((Lado7 == Lado8) && (Lado8 == Lado9)){
    console.log("Triangulo equilatero")
}else if((Lado7 != Lado8) && (Lado8 != Lado9) && (Lado7 != Lado9)){
    console.log("Triangulo escaleno")
}else{console.log("Triangulo Isoceles")
}

//descobrir a quantidade de horas trabalhadas
let horas = Number(prompt("total de horas trabalhadas"))
let vendas = Number(prompt("total de vendas"))
//validar se alguma condição foi recebida (mais de 5000 em vendas ou mais de 40 horas trabalhadas)
if(vendas > 5000 || horas > 40){
    console.log("Tem direito ao bonus")
}else{
    console.log("Não tem direito ao bonus")
}

//crie um algoritmo que receba um caractere e verifique se ele é uma vogal ou consoante
let letra = Number(prompt("digite um caractere"))
if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
    console.log(`Vogais`)
}else{
    console.log(`consoante`)
}