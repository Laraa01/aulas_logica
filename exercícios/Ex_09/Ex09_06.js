function senha(num){
    let caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let senha = ''
for(let i = 0; i < num; i++){
    let nmrSorteado = Math.floor(Math.random() * caracteres.length)
    senha += caracteres[nmrSorteado]
}
return senha
}
console.log('Senha de 6 caracteres: ', senha(6))
console.log('Senha de 8 caracteres: ', senha(8))
console.log('Senha de 10 caracteres: ', senha(10))