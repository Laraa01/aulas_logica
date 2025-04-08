const prompt = require ('prompt-sync') ()
let salario = Number(prompt("Digite o salario"))
switch (true){
    case salario > 2000:
    salario = salario + (salario * 0.12)
    console.log(`O salario reajustado é ${salario}`)
    break
    case salario > 4000:
        salario = salario + (salario * 0.10)
        console.log(`O salario reajustado é ${salario}`)
        break
        case salario > 4000:
            salario = salario + (salario * 0.08)
            console.log(`O salario reajustado é ${salario}`)
            break
    default:
        console.log(`Operação inválida`)
}