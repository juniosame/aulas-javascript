console.log("Exemplo 2");

/* Estruturas de dados 

- Arrays (Vetores/Matrizes);
Lista de dados indexados, sequencias acessíveis por um índice numérico.



- Objetos
Lista de dados não indexados e formados por propriedades
e valores. */

// Arrays (os indices sempre começam do zero)
let cursos = ["Node.js", "React", "SQL", "UX/UI Design"];

console.log(cursos); // Saída direta/estruturada (APENAS NO CONSOLE)
console.log(cursos[2]); //SQL





/*
Exercício 

1) Crie uma constante chamada "dados" e coloque nela os dados de uma pessoa: nome, sobrenome, idade, telefone e cidade.
*/

const dados = ["José", "Pereira", 25, "11 0 1234-5678", "São Paulo"]

/* 
2) Mostre no console uma mensagem contendo somente o nome e a idade da pessoa. Exemplo: "Fulano tem 25 anos."
*/

console.log(`${dados[0]} tem ${dados[2]} anos.`);


console.log("--------------------------");


// Objeto
let carro = {
    marca: "Fiat",
    modelo: "Uno com escada",
    portas: 2,
    cor: "branco",
    opcionais: ["Ar Condicionado", "Vidros elétricos", "Alarme"]
};

console.log(carro);
console.log(carro.modelo);

console.log(`Carros da ${carro.marca} tem a cor ${carro.cor}`);

console.log(`Este carro tem ${carro.opcionais[0]} e ${carro.opcionais[2]}`);