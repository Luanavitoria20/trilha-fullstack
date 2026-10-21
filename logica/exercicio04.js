
console.log("==================================");
console.log("   EXERCÍCIOS 06 - FUNÇÕES");
console.log("==================================");

// EXERCÍCIO 1 - SAUDAÇÃO
console.log("\n=== EXERCÍCIO 1: SAUDAÇÃO ===");

function saudar(nome) {
  return `Olá, ${nome}! Bons estudos!`;
}

console.log(saudar("Luana"));
console.log(saudar("Maria"));
console.log(saudar("João"));


// EXERCÍCIO 2 - DOBRO DE UM NÚMERO
console.log("\n=== EXERCÍCIO 2: DOBRO ===");

function calcularDobro(numero) {
  return numero * 2;
}

console.log("Dobro de 5:", calcularDobro(5));
console.log("Dobro de 10:", calcularDobro(10));
console.log("Dobro de 25:", calcularDobro(25));


// EXERCÍCIO 3 - SOMA DE DOIS NÚMEROS
console.log("\n=== EXERCÍCIO 3: SOMA ===");

function somar(numero1, numero2) {
  return numero1 + numero2;
}

console.log("10 + 5 =", somar(10, 5));
console.log("20 + 30 =", somar(20, 30));
console.log("7 + 3 =", somar(7, 3));


// EXERCÍCIO 4 - PAR OU ÍMPAR
console.log("\n=== EXERCÍCIO 4: PAR OU ÍMPAR ===");

function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log("Número 8:", verificarParOuImpar(8));
console.log("Número 13:", verificarParOuImpar(13));
console.log("Número 20:", verificarParOuImpar(20));
console.log("Número 7:", verificarParOuImpar(7));


// FINAL
console.log("\n==================================");
console.log("   FIM DOS EXERCÍCIOS 06!");
console.log("==================================");
