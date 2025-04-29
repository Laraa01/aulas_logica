//Escreva uma função que recebe um nome e o adicione a uma lista global. Em seguida,
//escreva outra função que remova um elemento dessa lista global.
let lista = []
function addnome(nome){
lista.push(nome)
}
function removernome(){
    lista.pop()
}
             //IndexOf
//function removerpornome(nome){
 //   let posicao = lista.indexOf(nome)
    //Quando o IndexOf não encontra ele entrega o -1
   // if(posicao != -1){
    //    lista.splice(posicao, 1)
  //  }}

addnome('Pacheco')
addnome('Livia')
addnome('Barbie')
addnome('Nick')
console.log(lista)
addnome('Ana')
console.log(lista)


