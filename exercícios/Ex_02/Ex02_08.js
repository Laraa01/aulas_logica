const prompt = require ('prompt-sync') ()

let vendas = Number(prompt("Digite o total de venda no mes"))
let comissao

if( vendas > 5000) { 
   comissao = vendas * 0.05
}else{
    comissao = vendas * 0.03
}
console.log(`Valor da comissão: R$${comissao.toFixed(2)}`)