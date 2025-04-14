let frutas = ['Maça', 'Banana', 'Uva', 'Abacaxi']
//A variavel x serve para iterar os valores até o limite da lista
//O nome não é obrigatoriamnete ser o nome i, x ou contador, pode ser qualque nome de variavel
for(let x = 0; x < frutas.length; x++){
    //O lenght identifica o tamanho total da lista
    console.log(`A fruta é ${frutas[x]}`)
}

let listaNomes = ['Bill Gates', 'Rafinha', 'Raul Seixas', 'Esteves', 'Vieira']
//Para cada nome da lista nomes, escreva um nome
for(let nome of listaNomes){
    console.log(nome)
}

//Verifique se é uma consoante
const prompt = require('prompt-sync') ()
let vogais = ['a', 'e', 'i', 'o', 'u']
let consoante = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v',
    'w', 'x', 'y', 'z']
let letra = prompt('Digite uma letra: ')
//Se letra estiver incluso na lista de vogais, identifico que é uma vogal
if(vogais.includes(letra.toLowerCase())){
    console.log('É uma vogal')
}else if(consoante.includes(letra.toLowerCase())){
    console.log('Consoante');
}else{console.log('Não é uma letra')}

//Obtendo a posição do item
for(let[pos, frutas] of frutas.entries()){
    //entries retorna o par de cada elemento do vetor, ou seja, a posição e a fruta
    console.log(`Posição ${pos} e fruta ${frutas}`)
}

//separando os itens em uma lista

let produtos = 'Celular, Notebook, TV, Tablet, Headset'
//O split divide string e forma uma lista a partir do limite no caso abaixo uma virgula
let listaprodutos = produtos.split(',')
for(let produto of listaprodutos){
    console.log(produto)
}

//Percorrendo uma string como uma lista(lista de caracteres)
let palavra = 'SENAI'
for(let letra of palavra){
    console.log(letra)
}
