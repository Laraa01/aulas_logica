const prompt = require ('prompt-sync') ()
//Declarando um novo 
//reconheço que é um vetor pelo uso dos colchetes
let listavazia = []
console.log(listavazia)
//Declarar uma lista de números
let numeros = [1,2,3,4,5,6]
console.log(numeros)
console.log(numeros[2])

// declaração de uma lista de strings
let nomes = ["Ana", "João", "Maria"];
console.log(nomes)

// declaração mista
let listamista = [1, "dois", true, 2.5]
console.log(listamista)

let listaComlista = [
    ["coca-cola", "Cachorro quente"],
    [5.0, 10.0]]
console.log(listaComlista)

//Aletrando valores da lista
let frutas = ['Maça', 'Pera', 'Uva', 'Abacaxi']
console.log(frutas)
//a função push adiciona um novo elemento no vetor
frutas.push('Laranja')
console.log(frutas)
//o spread adiciona um novo elemento no vetor 
frutas = [...frutas, 'Banana']
console.log(frutas)
//a função splice adiciona um novo item em uma posição específica a partir de um valor no indíce
frutas.splice(2, 0, 'Morango')
console.log(frutas)
//excluindo item na lista
frutas.splice(3, 1) //excluindo pelo indice
console.log(frutas)
frutas.shift() //excluindo o primeiro item da lista
frutas.pop() //excluindo o ultimo item da lista
console.log(frutas)
//acessar os itens da lista
console.log(frutas[3]); //acesso a partir de uma posição especifica
console.log(frutas.slice(0,4))// posição 0 ate 4
console.log(frutas.slice(1))// a partir da posição 1
console.log(frutas.slice(-1)) // mostra os itens do fim ao inicio
console.log(frutas.length)// total de itens na lista

//Ordenar itens na lista
console.log(frutas)
frutas.sort()//oredenar a lista de forma crescente
console.log(frutas)
frutas.reverse()//ordenando de forma decrescente
console.log(frutas)