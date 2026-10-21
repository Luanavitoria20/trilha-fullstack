//O que é um Array?-> Um array é uma lista que permite guardar vários valores em uma única variável.
//Por exemplo, imagine que você quer guardar os nomes de cinco linguagens de programação.
//Sem array, você poderia precisar de cinco variáveis diferentes. Com um array, pode organizar tudo em uma lista só!//

console.log("==================================");
console.log("       AULA 05 - ARRAYS");
console.log("==================================");

// 1. Criando um array
console.log("\n=== 1. MINHAS LINGUAGENS FAVORITAS ===");

const linguagens = [
  "JavaScript",
  "Python",
  "TypeScript",
  "Java",
  "PHP"
];

console.log(linguagens);

// 2. Acessando elementos pelo índice
console.log("\n=== 2. ACESSANDO ELEMENTOS ===");

console.log("Primeira linguagem:", linguagens[0]);
console.log("Segunda linguagem:", linguagens[1]);
console.log("Última linguagem:", linguagens[4]);

// 3. Adicionando e removendo elementos
console.log("\n=== 3. ADICIONANDO E REMOVENDO ===");

const tecnologias = ["HTML", "CSS", "JavaScript"];

console.log("Lista original:", tecnologias);

tecnologias.push("Node.js");
console.log("Depois do push:", tecnologias);

tecnologias.pop();
console.log("Depois do pop:", tecnologias);

// 4. Descobrindo o tamanho do array
console.log("\n=== 4. TAMANHO DO ARRAY ===");

console.log("Quantidade de linguagens:", linguagens.length);

// 5. Percorrendo um array com for
console.log("\n=== 5. MINHAS SÉRIES FAVORITAS ===");

const series = [
  "Supernatural",
  "The Rookie",
  "9-1-1",
  "Chicago PD"
];

for (let i = 0; i < series.length; i++) {
  console.log(series[i]);
}

// 6. Percorrendo um array com for...of
console.log("\n=== 6. LISTA DE FILMES ===");

const filmes = [
  "Velozes e Furiosos",
  "O Protetor",
  "John Wick"
];

for (const filme of filmes) {
  console.log(filme);
}

// 7. Array de números
console.log("\n=== 7. LISTA DE NÚMEROS ===");

const numeros = [10, 20, 30, 40, 50];

console.log("Números:", numeros);
console.log("Primeiro número:", numeros[0]);
console.log("Quantidade de números:", numeros.length);

// 8. Calculando a soma dos números
console.log("\n=== 8. SOMA DOS NÚMEROS ===");

let soma = 0;

for (const numero of numeros) {
  soma = soma + numero;
}

console.log("Soma total:", soma);

// 9. Verificando se um item existe
console.log("\n=== 9. BUSCANDO UMA LINGUAGEM ===");

const linguagemProcurada = "Python";

if (linguagens.includes(linguagemProcurada)) {
  console.log(linguagemProcurada, "está na lista!");
} else {
  console.log(linguagemProcurada, "não está na lista.");
}

// 10. Final da aula
console.log("\n==================================");
console.log("       FIM DA AULA 05!");
console.log("==================================");
