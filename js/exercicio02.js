"use strict";
let alunos = [
    {
        nome: "Jõao",
        id: 1
    },

    {
        nome: "Maria",
        id: 2
    },

    {
        nome: "José",
        id: 3
    },
]

let i = 0;

while(i < alunos.length){
    console.log(`Aluno: ${alunos[i].nome}`);
    i++;
}