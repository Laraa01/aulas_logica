const prompt = require ('prompt-sync') ()
let clima = Number(prompt("Digite o clima"))
if(clima <= 15){console.log("O clima está frio")
}else if(clima > 15 && clima <= 25){
console.log("O clima está agradável")}
else if(clima >= 26 && clima <= 35)
{console.log("O clima está quente")}
else if(clima > 35){console.log("O clima está muito quente")}
