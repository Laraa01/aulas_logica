const prompt = require('prompt-sync') ()

let idade = Number(prompt("Digite a idade"))
if(idade >= 18 && idade <= 70){console.log("Voto Obrigatório")}
else{
    if(idade < 16){console.log("Você não pode votar!")
    }else{
if(idade >= 16 || idade > 70){console.log("Voto facultativo")}
}
}

//switch case
let n1 = Number(prompt("Digite um numero: "))
let n2 = Number(prompt("Digite um numero: "))
let op = (prompt("Escolha a operação ( +, -, *, /, **): "))
switch(op){ case '+': 
    //caso variavel op for verdadeira, testará cada condição
    //caso a condição seja igual a um dos "cases" executará o bloco em questão, usamos break para interromper
    console.log(`Resultado: ${n1 + n2}`)
 break
 case '-':
    console.log(`resultado é igual ${n1 - n2}`)
 break
 case '*':
    console.log(`resultado é igual ${n1 * n2}`)
 break
 case '/':
    console.log(`resultado é igual ${n1 / n2}`)
break
case '**':
    console.log(`resultado é igual ${n1 ** n2}`)
break
default:
    console.log(`operação inválida}`)
}
//verificar qual letra é
let letra = prompt('Digite uma letra').toUpperCase()
//Quando usamos switch(variavel), o switch compara exatamente o valor da variavel com os cases definidos
switch( letra ){
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log(`Vogal`)
        break
    default:
        console.log(`Consoante`)
}

//Converter a nota em número para letra
let nota = parseInt(prompt("Digite a nota do aluno"))
switch(true)
//O switch (true), verifica quais expressões dentro do case retornam true(verdade), ou seja comparamos as expressões bolleanas 
{
    case nota >= 90:
    console.log("Nota A")
    break
    case nota >= 80:
    console.log("Nota B")
    break
    case nota >= 70:
    console.log("Nota C")
    break
    case nota >= 60:
    console.log("Nota D")
    break
    default:
    console.log("Nota E")
}