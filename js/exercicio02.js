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

console.log("-------------------------------------");

let quantidadeAlunos = alunos.length;

for(let z = 0; z < quantidadeAlunos; z++){
    console.log(alunos[z].nome);
}


console.log("-------------------------------------");

let f = 0;
while(f < quantidadeAlunos){
    console.log(alunos[f].nome);
    f++;
}