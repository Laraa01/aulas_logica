const prompt = require ('prompt-sync') ()
let mes = Number(prompt("Digite o mes"))
switch(true){
case (mes == `Janeiro`):
        console.log(`31 dias`)
        break
case (mes == `Fevereiro`):
        console.log(`28 dias`)
        break
case(mes == `Março`):
        console.log(`31 dias`)
        break
case(mes == `Abril`):
        console.log(`30 dias`)
        break
case(mes == `Maio`):
        console.log(`31 dias`)
            break
case(mes == `Junho`):
        console.log(`30 dias`)
           break
case(mes == `Julho`):
         console.log(`31 dias`)
           break
case(mes == `Agosto`):
        console.log(`31 dias`)
           break
case(mes == `Setembro`):
         console.log(`30 dias`)
           break
case(mes == `Outubro`):
         console.log(`31 dias`)
           break
case(mes == `Novembro`):
        console.log(`30 dias`)
        break
default: 
(mes == `Dezembro`)
       console.log(`31 dias`)

}
        