// calculadora.test.js — Suite de testes da calculadora (Jest)
// Rode com: npx jest  |  npm test  |  npx jest --coverage

const { somar, subtrair} = require('./calculadora');

describe('Calculadora — soma e subtração', () => {
  test('soma 2 + 3 = 5', () => {
    expect(somar(2, 3)).toBe(5);
  });

  test('soma valores negativos: -1 + -1 = -2', () => {
    expect(somar(-1, -1)).toBe(-2);
  });

  test('subtrai 5 - 3 = 2', () => {
    expect(subtrair(5, 3)).toBe(2);
  });

  test('subtração pode dar negativo: 3 - 5 = -2', () => {
    expect(subtrair(3, 5)).toBe(-2);
  });

  test('subtrai 3.5 de 5.2 = 1.7', () => {
    expect(subtrair(5.2, 3.5)).toBeCloseTo(1.7);
  });
});



