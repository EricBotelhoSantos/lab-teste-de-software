// calculadora.js — Exemplo da Aula 5 (Teste de Software)
// Soma e subtração PRONTAS. Multiplicação e divisão são o DESAFIO EM SALA.

function somar(a, b) {
  return a + b;
}

function subtrair(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    throw new Error('Não é possível dividir por zero!');
  }
  return a / b;
}
// ============================================================
// EM SALA, FAZER JUNTOS:
// 1. Descomente o corpo de multiplicar e faça o teste passar.
// 2. Descomente o corpo de dividir e faça os testes passarem.
// ============================================================


module.exports = {somar, subtrair, multiplicar, dividir};
