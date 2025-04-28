//Escreva uma função que utilize uma variável global para contar o número de vezes que foi
//chamada. A função deve retornar o número atual de chamadas.
let i = 0
function Contador(){
    i++
}
Contador()
Contador()
Contador()
console.log(`A chamada se repete ${i}x`)
