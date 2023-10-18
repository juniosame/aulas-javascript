"use strict";

/* 
Funções de seleção no DOM

-getElementById() // Seleciona UM elemento através de um id.


-querySelector() // Seleciona UM elemento através de um seletor.

-querySelectorAll() // Seleciona VÁRIOS elementos através de um/vários seletores.

*/


// Exemplos

const subtitulo = document.getElementById("subtitulo-dom")
console.log(subtitulo);

const desenho = document.querySelector("figure")
console.log(desenho);

const descricao = document.querySelector("#descricao")
console.log(descricao);

const variosElementos = document.querySelectorAll("h3, a")
console.log(variosElementos);
console.log(variosElementos[1]);



console.log("----------------------------------------------");

// Modificando o DOM
const titulo = document.querySelector("h1")
titulo.textContent = "Olá JavaScript!"; // Content via JS
titulo.style.textAlign = "center"; // CSS inline via JS
titulo.classList.add("destaque"); // Classe CSS via JS

/* Selecionando os links contidos na lista */
const linksReferencia = document.querySelectorAll("ul li a");
console.log(linksReferencia);

let quantidadeDeLinks = linksReferencia.length;

for(let i = 0; i < quantidadeDeLinks; i++){
    linksReferencia[i].setAttribute("target", "_blank");
}