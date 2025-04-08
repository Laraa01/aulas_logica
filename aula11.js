// Trabalhando com laços de repeticão (While)
//Executar o laço x vezes

let contador = 1

//irá repetir enquanto a condição for verdadeira, ou seja será verdade enquanto o contador for menos ou igual a 5
while(contador <= 5){
    console.log(`O contador é ${contador}`)
    //incrementando a variavel ou seja adicionando valor a ela para que continue o processo até que a condição seja atingida
    contador = contador + 1;
}
console.log("FIM")
const prompt = require('prompt-sync') ()
let senha_senai = '12345'
while(true){
    let senha = prompt("Digite a senha")
    if(senha_senai == senha){
        console.log('você hackeou a senha')
    break;
}else if( senha == `Desisto`){
    break;
}
}

//Exercício
let soma = 0
let qtd = 0
while(true){
    let valor = Number(prompt('Digite o valor do produto(0 para encerrar):'))
    if(valor == 0){
        break;
    }else{
        soma = soma + valor;
        qtd++
    }

}
console.log(`Foram informados ${qtd}`)
//tofixed para colocar somente dois numeros depois da virgula
console.log(`valor total dos produtos ${soma.toFixed(2)}`)

//ALTERAR
let soma2 = 0
let qtd2 = 0
let encerrar = ""
while(encerrar != "SUB-TOTAL"){
    let valor = Number(prompt('Digite o valor do produto(0 para encerrar):'))
        soma2 = soma2 + valor;
        qtd2++
        encerrar = prompt(`deseja continuar: (digite SUB-TOTAL)`)


}
console.log(`Foram informados ${qtd2}`)
//tofixed para colocar somente dois numeros depois da virgula
console.log(`valor total dos produtos ${soma2.toFixed(2)}`)

 //Atividade
 console.log("##############################")
 console.log("🤔  JOGO DA ADVINHAÇÃO  🤔")
 console.log("##############################")

 let nrSORTEADO = Math.floor(Math.random() * 100 + 1)//gera um numero aleatorio
 console.log(nrSORTEADO)
 let acertou = false
 
 while(!acertou){
    const chute = parseInt(prompt('💕 Digite um numero entre 1 e 100 para advinhar'))
    if(chute > nrSORTEADO)
        {console.log(`Você chutou ${chute}, tente um número menor`)}
    else if(chute < nrSORTEADO)
        {console.log(`Você chutou ${chute}, tente um número maior`)}
    else if(chute == nrSORTEADO)
        {console.log(`Você chutou ${chute}, 🦋 Parabéns você acertou!`)
    acertou = true}
 }
 console.log("FIM")