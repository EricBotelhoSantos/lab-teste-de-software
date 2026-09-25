// calculadora.test.js — Suite de testes da calculadora (Jest)
// Rode com: npx jest  |  npm test  |  npx jest --coverage

const { somar, subtrair, multiplicar, dividir} = require('./calculadora');

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

  test('multipliquei 5 * 5 = 25', () => {
    expect(multiplicar(5, 5)).toBe(25);
  });

  test('multipliquei -9 * -11 = 99', () => {
    expect(multiplicar(-9, -11)).toBe(99);
  });

  test('multipliquei 10.6 * 4.9 = 51.94', () => {
    expect(multiplicar(10.6, 4.9)).toBeCloseTo(51.94);
  });

  test('dividi 10 / 2 = 5', () => {
    expect(dividir(10, 2)).toBe(5);
  });

  test('dividi 40 / -9 = -4.4', () => {
    expect(dividir(40, -9)).toBeCloseTo(-4.4, 1);
  });

  test('dividi 6 / 30 = 0.2', () => {
    expect(dividir(6, 30)).toBeCloseTo(0.2);
  });

  test('dividi 9 / -64 = -0.14', () => {
    expect(dividir(9, -64)).toBeCloseTo(-0.14);
  });

  test('dividi 54 / 0 = Não é possível dividir por zero!', () => {
    expect(() => dividir(54, 0)).toThrow('Não é possível dividir por zero!');
  }); // Nesse teste, ele primeiro passa pela condição de b === 0, se essa condição for verdadeira, é retornado o throw e encerra o teste.
});



