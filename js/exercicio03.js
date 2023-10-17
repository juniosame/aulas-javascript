"use strict";

/* 1) Crie um arquivo chamado exercicio03.html.
A partir dele, faça um script chamado exercicio03.js (não se esqueça de usar a pasta js).

2) Programe no arquivo JS recursos que permitam converter um valor em dólar (ex: 1000 dólares) para um valor em reais (ex: 5.030 reais).

3) Para esta atividade, você deverá criar uma função chamada converteMoeda e realizar dentro dela a operação de conversão.

Dica: para converter, basta pegar o valor e multiplicar pela cotação do dólar (hoje 17/10/2023, está em R$ 5,03)

4) Após a conversão, mostre o valor original em dólar e o valor convertido para reais.*/


let dolar = 1000;
let cotacao = 5.03;

function converterMoeda(dolar, cotacao){
    return dolar * cotacao;
}

function DolarMoeda(valor){
    let opcoes = {
        style: "currency",
        currency: "BRL"
    };

    return valor.toLocaleString("pt-br", opcoes);
}
console.log(converterMoeda(dolar,cotacao));





console.log(`Preço: ${formatarPreco(preco)}`
);