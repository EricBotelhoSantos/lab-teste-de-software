const {celsiusParaFahrenheit, fahrenheitParaCelsius} = require('./conversor.js');

describe ('Conversor - Celsius para Fahrenheit / Fahrenheit para Celsius', () => {
    test('Conversor = C = 0, F = 32', () => {
        expect(celsiusParaFahrenheit(0)).toBe(32);
    })

    test('Conversor = C = 100, F = 212', () => {
        expect(celsiusParaFahrenheit(100)).toBe(212);
    })

    test('Conversor = F = 32, C = 0', () => {
        expect(fahrenheitParaCelsius(32)).toBeCloseTo(0);
    })

    test('Conversor ida e volta = C = 25 / F = 77 / C = 25', () => {
        expect(celsiusParaFahrenheit(25)).toBe(77);
        expect(fahrenheitParaCelsius(77)).toBeCloseTo(25);
    })
})