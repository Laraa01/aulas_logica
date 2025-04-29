const prompt = require('prompt-sync')()
let letra = prompt("digite uma letra")
if(letra == 'F'){
    console.log(`Sexo Feminino`)
}else if(letra == 'M'){
    console.log(`Sexo Masculino`)
}else{
    console.log(`Sexo Invalido`)
}