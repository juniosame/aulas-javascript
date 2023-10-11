/* Comandos Repetição
Instruções para realizar ações
por uma quantidade específica de vezes.

Comandos tradicionais:
- While         -> ENQUANTO
- do/while      -> FAÇA/ENQUANTO
- for           -> PARA

Obs.: normalmente o loop é controlado através de uma variável contadora.
*/

// let contador = 1;
// while( contador <= 5){
//     console.log(`Valor de contador: ${contador}`);
//     contador++; // ++ incremento
// }


/* ----------------------------------------------------- */


// EXEMPLO DO/WHILE (FAÇA/ENQAUNTO)


// let i = 1;
// do {
//     console.log(`Contador vale: ${i}`);
//     i++;
// } while(i <= 3)

/* Obs.: normalmente variáveis de controle de repetição são chamadas de i,j ou k.
*/


/* ----------------------------------------------------- */


// EXEMPLO FOR (PARA)

/* 
let i = 1  // Delacaração da variavel
i <= 10  // Condição
i++  // Atualização
*/
for(let i = 1; i <= 10; i++){
    console.log(`i vale ${i}`);
}