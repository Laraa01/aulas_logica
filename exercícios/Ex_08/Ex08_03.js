let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'JUlho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
let letra = 'J'
for(let mes of meses){
    if(mes.includes(letra)){
        console.log(mes)
    }
}