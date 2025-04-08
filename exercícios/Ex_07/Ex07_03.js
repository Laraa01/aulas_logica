const prompt = require ('prompt-sync') ()
let comidas = [];

for(let i = 0; i < 6; i++){
    let comida = prompt(`Digite o número da comida ${i + 1}`)
    comidas.push(comida)
}
console.log(comidas)
//exiba a primeira comida
console.log(comidas[0])

console.log(comidas[1])

console.log(comidas[2])

console.log(comidas[3])

console.log(comidas[4])

console.log(comidas[5])

console.log(comidas[6])
console.log(comidas)