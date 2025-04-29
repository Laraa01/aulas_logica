let saldo = 0
//criar a função depositar
function depositar(valorDepositado){
saldo += valorDepositado
}

 //criar função sacar
 function sacar(Valorsaque){
    saldo -= Valorsaque
 }

 //função mostrar saldo
 function MostrarSaldo(){
    console.log(`Seu saldo: ${saldo}`)
 }
//Menu interativo
function caixaEletronico(){
    const prompt = require('prompt-sync')()
    let opcao = 0

    while(opcao != 4){
        console.log('=== Caixa Eletonico ===')
        console.log('[1] - Depositar')
        console.log('[2] - Sacar')
        console.log('[3] - Mostrar Saldo')
        console.log('[4] - Sair')

        opcao = Number(prompt("Escolha uma opção: "))
        switch(opcao){
            case 1:
                let valorDepositado = Number(prompt("Digite o valor a ser depositado: "))
                depositar(valorDepositado)
                break;
            case 2:
                let Valorsaque = Number(prompt("Digite o valor a ser sacado: "))
                sacar(Valorsaque)
                break;
            case 3:
                MostrarSaldo();
                break;
                case 4:
                    console.log("Obrigado por usar o banco Barreto")
                    break;
                default:
                    console.log('Opção Invalida')
        }
    }
}

caixaEletronico()