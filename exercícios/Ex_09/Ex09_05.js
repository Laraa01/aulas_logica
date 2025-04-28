function calcular(n1, n2, operador){
    if(operador === '+'){
        console.log(`${n1} + ${n2} = ${n1 + n2}`)

}else if(operador === '-'){
        console.log(`${n1} - ${n2} = ${n1 - n2}`)

}else if(operador === '*'){
    console.log(`${n1} * ${n2} = ${n1 * n2}`)}

else if(operador === '/'){
    console.log(`${n1} / ${n2} = ${n1 / n2}`)}

else if(operador === '**'){

     console.log(`${n1} ** ${n2} = ${n1 ** n2}`)}
else{

    console.log("Operador inválido")
return
}
}
calcular(5, 7, '+')
calcular(5, 3, "-")
calcular(5, 6, "*")
calcular(5, 2, "/")
calcular(5, 8, "**")
calcular(5, 3, ";")
