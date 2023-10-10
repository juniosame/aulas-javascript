/*
Estruturas de Controle Condicional
Comandos que permitem analisar uma ou mais condições.
E a partir do resultado desta análise (verdadeiro ou falso), o programa pode executar ações diferentes. 

Comandos mais comuns: if (se), else (senão), else if (senão se)
*/

let usuario = prompt("Qual seu nome?");
let idade = prompt("Quantos anos você tem?");

let mensagem; //Omdefomoda/Undefined


// Verficar a idade e determinar se é menor ou maior
// if(idade >= 18){
//     mensagem = "Maior"
// } 
// else {
//     mensagem = "Menor"
// }


// Apresentando os resultados APÓS a condicional
// console.log(`${usuario} é ${mensagem} de idade!`);
// alert(`${usuario} é ${mensagem} de idade!`);


// Condicional Sucessiva

if(idade >= 60) {
    mensagem = "Idoso(a)";
} else if(idade >= 18){
    mensagem = "Adulto(a)";
} else {
    mensagem = "Menor";
}

console.log(`${usuario} você tem ${idade} anos e é considerado ${mensagem},`);

alert(`${usuario} você tem ${idade} anos e é considerado ${mensagem},`);