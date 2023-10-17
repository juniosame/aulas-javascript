"use strict";

/* Sobre Funções

Funções são blocos de código que podem ser executados e reaproveitados em praticamente qualquer lugar de uma aplicação/site.

Usar funções também é benéfico do ponto de vista de organização de código.

O JS já possui centenas de funções prontas:
- log()
- alert()
- prompt()
- toFixed(2)
- etc...*/

//  Como escrever funções no JS?

// - Forma 1: função anônima
const exemplo1 = function(){
    console.log("Funções anonima");
};

//  - Forma 2: funções nomeada/declarada
function exemplo2(){
    console.log("Função nomeada/declarada");
};

// - Forma 3: arrow function
const exemplo3 = () => {
    console.log("Arrow Function");
};

// Chamada de Função para execução
exemplo1();
exemplo2();
exemplo3();


/* Exemplos diversos */


/* Função com parâmetros e retorno de dados/resultados */
function somar(valor1, valor2){
    return valor1 + valor2;

}


/* Chamamos a função diversas vezes e passando valores diferentes com parâmetros. */
console.log(somar(10,20));
console.log(somar(15,50));
console.log(somar(30,47.8));


/* Formatação de valores em Reais */


let preco = 1000;
let desconto = preco * 0.10; // 10%
let precoFinal = preco - desconto;




// console.log(`Preço: ${preco.toLocaleString("pt-br", {
//     style: "currency",
//     currency: "BRL"
// })}`);
// console.log(`Desconto: ${desconto.toLocaleString("pt-br", {
//     style: "currency",
//     currency: "BRL"
// })}`);
// console.log(`Preço Final: ${precoFinal.toLocaleString("pt-br", {
//     style: "currency",
//     currency: "BRL"
// })}`);


// REFATORANDO

// function formatarPreco(valor) {
//     return valor.toLocaleString("pt-br", {
//         style: "currency",
//         currency: "BRL"
//     })
    
// }

// console.log(`Preço: ${formatarPreco(preco)}`
// );

// console.log(`Desconto: ${formatarPreco(desconto)}`
// );

// console.log(`Preço Final: ${formatarPreco(precoFinal)}`
// );

function formatarPreco(valor){
    let opcoes = {
        style: "currency",
        currency: "BRL"
    };

    return valor.toLocaleString("pt-br", opcoes);
}


console.log(`Preço: ${formatarPreco(preco)}`
);

console.log(`Desconto: ${formatarPreco(desconto)}`
);

console.log(`Preço Final: ${formatarPreco(precoFinal)}`
);