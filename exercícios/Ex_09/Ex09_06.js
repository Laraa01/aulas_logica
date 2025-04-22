function senha(num){
    let senha = 0
for(let i = 0; i < num; i++){
    let nmrSorteado = Math.floor(Math.random() * 100 + 1)
    senha += String(nmrSorteado)
}
console.log(senha)
}
senha(5)