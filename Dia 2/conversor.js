function celsiusParaFahrenheit(c) {
    return (c * (9/5)) + 32;
}

function fahrenheitParaCelsius(f) {
    return (f - 32) * (5 / 9);
}

module.exports = {celsiusParaFahrenheit, fahrenheitParaCelsius};