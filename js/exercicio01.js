/* Habilitando o modo estrito do JS */
"use strict";


let nota1 = 5;
let nota2 = 5;
let media = (nota1 + nota2)/2;
let resultado;

if(media >= 7){
    resultado = "Aprovado"
}

else if(media >= 5){
    resultado = "Recuperação"
}

else {
    resultado = "Reprovado"
}

console.log(`Sua Média foi ${media} e você está ${resultado}`);
