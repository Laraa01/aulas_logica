const prompt = require('prompt-sync') ()

//criando nossa primeira função
function Cabecalho(texto){
    console.log('----------------------------------')
    console.log(texto)
    console.log('----------------------------------')
}
//criando outra função de saudação
function Saudacao(){
    let nome = prompt('Digite se nome')
    console.log(`${nome} tenha um bom dia`)
}
//Chamando a função
//Passando o parametro junto com a função
Cabecalho( 'SESI|SENAI' )
//Posso declarar uma variavel e passa-la como parametro para função
let escola = 'Sesi 025'
Cabecalho(escola)
Saudacao()
//criei a função soma que ira receber dois valores como parametros
//a partir desses valores, realizara o calculo mostrando o resultado
function Soma(n1, n2){
    let resultado = n1 + n2
    console.log(resultado)
}
Soma(5, 6)
Soma(8, 9)
Soma(8, 18)

//Exercício:
function Parimpar(n1){
    let resultado = n1 % 2
    if(resultado == 0){
        console.log(`O ${n1} é par`)
    }else{console.log(`O número ${n1} é impar`)
}
}
Parimpar(15)
Parimpar(10)
//Função com retorno do resultado
//O calculo é realizado e é retornado para achamada da função
function media(n1, n2){
    let resultado = (n1 + n2) / 2
    return(resultado)
}
console.log(media(27, 3))
//armazenei o retorno da função em uma variavel
let valor = media(12, 12)
//utilizei o retorno da função para escrever na tela
console.log(valor)
//utilizei a variavel que recebeu o retorno da função para chamar a função par ou impar passando o valor como parametro
Parimpar(valor)