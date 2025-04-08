const prompt = require('prompt-sync')()

console.log("exercicio aula de lógica")
console.log("Bem-vindo ao curso de JavaSCript")
console.log("Estou aprendendo a usar o console.log")

console.log(15 + 25) // soma
console.log(100 - 45 )// subtração
console.log(12 * 7) // multiplicação
console.log(114 / 12)
console.log( 20 % 3)
console.log(2 ** 5)

//Exercicios de variaveis e entrada de dados
//Atividade 01
let nomeAluno = ("Lara")
let altura = 1.59
let escola = ("Sesi")
let ano = "2° Medio"
console.log(`A aluna ${nomeAluno} tem a altura ${altura}, estuda na escola ${escola} e esta no  ${ano}`)

//Atividade 02
let nomeProfessor = "Edcarlos"
let materia = "matematica"
let anoIngresso = 2020;
console.log(`O professor ${nomeProfessor} que leciona na a materia ${materia} entrou no ano de ${anoIngresso}`)

//Reatribuindo valores as nossas variaveis
nomeAluna = prompt ('Digite o nome do aluno? ')
altura = parseFloat(prompt('Digite a altura? '))
escola = prompt('Digite o nome da escola? ')
ano = parseInt(prompt('Digite o ano da turma? '))
console.log(`A Aluna ${nomeAluna} tem ${altura}, estuda na escoloa ${escola} no ano ${ano}`)

nomeProfessor = prompt('Digite o nome do professor? ')
materia = prompt('Digite a metria? ')
anoIngresso = prompt('Digite o ano de ingresso? ')
console.log(`O professor ${nomeProfessor} que leciona na a materia ${materia} entrou no ano de ${anoIngresso}`)