const prompt = require('prompt-sync') ()
let nmr = 1
while(nmr <=20){
    if(nmr % 2 == 0){
        console.log(`Os numeros são pares ${nmr}`)
    }
    nmr = nmr + 1
}
console.log("FIM")