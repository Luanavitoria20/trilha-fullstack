/* O que é uma função?
Uma função é um bloco de código que você pode executar quando precisar, sem ter que escrever tudo novamente.
Por exemplo, em vez de escrever uma mensagem várias vezes, você cria uma função e a chama sempre que quiser. */



console.log("==================================");
console.log("       AULA 06 - FUNÇÕES");
console.log("==================================");

// 1. Criando uma função simples
console.log("\n=== 1. MINHA PRIMEIRA FUNÇÃO ===");

function saudacao() {
  console.log("Olá! Seja bem-vindo(a) à programação!");
}

// Chamando a função
saudacao();
saudacao();

// 2. Função com parâmetro
console.log("\n=== 2. SAUDAÇÃO PERSONALIZADA ===");

function cumprimentar(nome) {
  console.log(`Olá, ${nome}! Bons estudos!`);
}

cumprimentar("Luana");
cumprimentar("Maria");
cumprimentar("João");

// 3. Função com dois parâmetros
console.log("\n=== 3. SOMANDO DOIS NÚMEROS ===");

function somar(numero1, numero2) {
  console.log("Resultado:", numero1 + numero2);
}

somar(10, 5);
somar(20, 30);
somar(7, 3);

// 4. Função que retorna um resultado
console.log("\n=== 4. USANDO RETURN ===");

function multiplicar(numero1, numero2) {
  return numero1 * numero2;
}

const resultado = multiplicar(5, 4);

console.log("Resultado da multiplicação:", resultado);

// 5. Verificando a idade
console.log("\n=== 5. VERIFICANDO A IDADE ===");

function verificarIdade(idade) {
  if (idade >= 18) {
    return "Maior de idade";
  } else {
    return "Menor de idade";
  }
}

console.log(verificarIdade(20));
console.log(verificarIdade(15));

// 6. Calculando a média
console.log("\n=== 6. CALCULANDO A MÉDIA ===");

function calcularMedia(nota1, nota2) {
  const media = (nota1 + nota2) / 2;
  return media;
}

const mediaAluno = calcularMedia(8, 6);

console.log("Média do aluno:", mediaAluno);

if (mediaAluno >= 7) {
  console.log("Aluno aprovado!");
} else {
  console.log("Aluno precisa estudar mais.");
}

// 7. Função com array
console.log("\n=== 7. LISTANDO LINGUAGENS ===");

function listarLinguagens(lista) {
  for (const linguagem of lista) {
    console.log(linguagem);
  }
}

const linguagens = [
  "JavaScript",
  "Python",
  "TypeScript",
  "Java"
];

listarLinguagens(linguagens);

// 8. Função para calcular o dobro
console.log("\n=== 8. CALCULANDO O DOBRO ===");

function calcularDobro(numero) {
  return numero * 2;
}

console.log("Dobro de 5:", calcularDobro(5));
console.log("Dobro de 10:", calcularDobro(10));
console.log("Dobro de 25:", calcularDobro(25));

// 9. Função para verificar número par
console.log("\n=== 9. NÚMERO PAR OU ÍMPAR ===");

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log("Número 8:", verificarParOuImpar(8));
console.log("Número 13:", verificarParOuImpar(13));

// 10. Final da aula
console.log("\n==================================");
console.log("       FIM DA AULA 06!");
console.log("==================================");
