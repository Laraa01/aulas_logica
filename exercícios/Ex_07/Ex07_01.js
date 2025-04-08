const prompt = require ('prompt-sync') ()
let filmes = ['Moana: Um mar de aventuras', 'As Branquelas', 'It: A coisa', 'Invocação do mal', 'Barbie e o Portal secreto', 'Megan', 'O pequeno Demônio']
console.log(filmes)
console.log(filmes[0])
console.log(filmes[3])

//filmes[3]
//console.log(filmes)
filmes[filmes.lenght -1] = (`O pequeno Demônio`)
console.log(filmes)

filmes.push('Donzelas')
console.log(filmes)

filmes.splice(5, 0, 'Enrolados')
console.log(filmes)

filmes.shift()
console.log(filmes)

filmes.pop()
console.log(filmes)

console.log(filmes.slice(0, 3))

console.log(filmes.slice(-4))

console.log(filmes.length)
filmes.reverse()

console.log(filmes)