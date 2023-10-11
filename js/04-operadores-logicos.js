/* A declaração "use strict" é usada para ativar o modo estrito (strict mode) em JavaScript. Quando ativado, o modo estrito impõe um conjunto de regras mais rigorosas para escrever código, o que ajuda a evitar erros comuns e a melhorar a qualidade do código. Algumas das características e benefícios do modo estrito incluem:

1. Proibição do uso de variáveis não declaradas: No modo estrito, todas as variáveis devem ser declaradas antes de serem usadas. Isso ajuda a evitar a criação acidental de variáveis globais.

2. Proibição de atribuição a propriedades de somente leitura: No modo estrito, tentar atribuir um valor a uma propriedade somente leitura lançará um erro.

3. Proibição de deletar variáveis, funções ou funções nomeadas: No modo estrito, a tentativa de usar o operador "delete" em variáveis, funções ou funções nomeadas lançará um erro.

4. Proibição do uso de palavras reservadas como nomes de variáveis: No modo estrito, o uso de palavras reservadas como nomes de variáveis é proibido.

5. Proibição do uso do objeto global "this" em funções não estritas: No modo estrito, o valor de "this" em uma função não estrita será "undefined", em vez de ser o objeto global.

Essas são apenas algumas das regras impostas pelo modo estrito. Ao usar a declaração "use strict" no início de um arquivo JavaScript ou no início de uma função, você pode aproveitar os benefícios do modo estrito e escrever um código mais seguro e confiável. */

"use strict";

// Requisitos da escola para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Resultados do aluno
let aluno = "Jean";
let mediaFinal = 8;
let faltas = 1;
let resultado;

console.log("---------------------------------------------");


// Operador lógico && (AND - E)

// if(mediaFinal >= mediaMinima && faltas < limiteDeFaltas){
//     resultado = "Aprovado";
// } else {
//     resultado = "Reprovado";
// }

// if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
//     resultado = "Aprovado";
// } else if(faltas > limiteDeFaltas){
//     resultado = "Reprovado por Faltas";
// } else {
//     resultado = "Reprovado"
// }

if(faltas > limiteDeFaltas) {
    resultado = "Reprovado por Faltas"
} else if(mediaFinal >= mediaMinima){
    resultado = "Aprovado";
} else {
    resultado = "reprovado"
}


console.log(`O aluno ${aluno} está ${resultado}`);
console.log(`Média do aluno: ${mediaFinal}`);
console.log(`Faltas do aluno: ${faltas}`);

console.log("---------------------------------------------");

//  Operador lógico || (OR - OU)

let diaDaSemana = "domingo";

if(diaDaSemana == "sábado" || diaDaSemana == "domingo"){
    console.log("Final de Semana 😅");
} else {
    console.log("Vá trabalhar... 🤡")
}

console.log("---------------------------------------------");

//  Operador Lógico ! (NOT - NÃO/NEGAÇÃO)
let blackFriday = true;
if(!blackFriday){
    console.log("Preços normais...");
} else {
    console.log("Preços com desconto...");
}