# Lab de Teste de Software — Jest na prática

Projeto prático da disciplina de Teste de Software, com duas suítes de testes
unitários escritas em **Jest**: uma calculadora e um conversor de temperaturas.

## Estrutura

```
lab-teste-de-software/
├── Dia1/
│   ├── calculadora.js        # Implementação da calculadora
│   ├── calculadora.test.js   # 13 testes
│   └── README.md
├── Dia 2/
│   ├── conversor.js          # Implementação do conversor de temperatura
│   ├── conversor.test.js     # 4 testes
│   └── README.md
├── coverage/                 # Relatório de cobertura gerado pelo Jest
└── package.json
```

## Requisitos

- Node.js (v12+)
- Jest `^30.5.2` (instalado via `npm install`)

## Como rodar

```bash
npm install        # instala as dependências
npm test           # roda todas as suítes (17 testes)
npm run test-cov   # roda com relatório de cobertura
```

Também é possível rodar suítes isoladas:

```bash
npx jest Dia1
npx jest "Dia 2"
npx jest calculadora    # roda só a suite da calculadora
npx jest conversor      # roda só a suite do conversor
```

## Resultado da execução

```
Test Suites: 2 passed, 2 total
Tests:       17 passed, 17 total
Snapshots:   0 total
Time:        0.234 s
```

### Cobertura de código

| Arquivo            | % Stmts | % Branch | % Funcs | % Lines |
| ------------------ | ------- | -------- | ------- | ------- |
| `calculadora.js`   | 100     | 100      | 100     | 100     |
| `conversor.js`     | 100     | 100      | 100     | 100     |
| **Todos os arquivos** | **100** | **100** | **100** | **100** |

---

## Dia 1 — Calculadora (`Dia1/`)

Módulo: `calculadora.js`

| Função       | Comportamento                                            |
| ------------ | -------------------------------------------------------- |
| `somar(a, b)`      | Retorna `a + b`                                   |
| `subtrair(a, b)`   | Retorna `a - b`                                   |
| `multiplicar(a, b)`| Retorna `a * b`                                   |
| `dividir(a, b)`    | Retorna `a / b`; lança `Error('Não é possível dividir por zero!')` quando `b === 0` |

### Testes — `Dia1/calculadora.test.js` (13 testes)

Suite: **"Calculadora — soma e subtração"**

| # | Teste | Entrada | Esperado | Matcher |
| - | ----- | ------- | -------- | ------- |
| 1 | Soma 2 + 3 = 5 | `somar(2, 3)` | `5` | `toBe` |
| 2 | Soma de negativos: -1 + (-1) = -2 | `somar(-1, -1)` | `-2` | `toBe` |
| 3 | Subtrai 5 - 3 = 2 | `subtrair(5, 3)` | `2` | `toBe` |
| 4 | Subtração resulta em negativo: 3 - 5 = -2 | `subtrair(3, 5)` | `-2` | `toBe` |
| 5 | Subtração com decimais: 5.2 - 3.5 = 1.7 | `subtrair(5.2, 3.5)` | `1.7` | `toBeCloseTo` |
| 6 | Multiplicação: 5 * 5 = 25 | `multiplicar(5, 5)` | `25` | `toBe` |
| 7 | Multiplicação de negativos: -9 * -11 = 99 | `multiplicar(-9, -11)` | `99` | `toBe` |
| 8 | Multiplicação com decimais: 10.6 * 4.9 ≈ 51.94 | `multiplicar(10.6, 4.9)` | `51.94` | `toBeCloseTo` |
| 9 | Divisão: 10 / 2 = 5 | `dividir(10, 2)` | `5` | `toBe` |
| 10 | Divisão com resultado negativo: 40 / -9 ≈ -4.4 | `dividir(40, -9)` | `-4.4` (1 casa decimal) | `toBeCloseTo` |
| 11 | Divisão fracionária: 6 / 30 = 0.2 | `dividir(6, 30)` | `0.2` | `toBeCloseTo` |
| 12 | Divisão negativa fracionária: 9 / -64 ≈ -0.14 | `dividir(9, -64)` | `-0.14` | `toBeCloseTo` |
| 13 | Divisão por zero lança erro | `dividir(54, 0)` | `Error('Não é possível dividir por zero!')` | `toThrow` |

### Destaques técnicos

- **`toBe`** usado para comparações exatas (inteiros) — compara por
  `Object.is`, ou seja, igualdade estrita do valor.
- **`toBeCloseTo`** usado para resultados com ponto flutuante
  (`5.2 - 3.5`, `10.6 * 4.9`, `40 / -9`), evitando falsos negativos
  causados pela imprecisão de `Number` em JS.
- **`toBeCloseTo(valor, casas)`** — no teste 10 a precisão é explícita
  (`1` casa decimal), nos demais usa a precisão padrão (2 casas).
- **`toThrow`** com função anônima `() => dividir(54, 0)`: o Jest só
  detecta exceção se a função chamada dentro do matcher lançar o erro.
  O `throw` acontece no primeiro `if` de `dividir`, antes do cálculo —
  portanto o teste valida o caminho de erro (branch) da função.

---

## Dia 2 — Conversor de temperaturas (`Dia 2/`)

Módulo: `conversor.js`

| Função | Fórmula | Comportamento |
| ------ | ------- | ------------- |
| `celsiusParaFahrenheit(c)` | `(c * 9/5) + 32` | Converte °C → °F |
| `fahrenheitParaCelsius(f)` | `(f - 32) * 5/9` | Converte °F → °C |

### Testes — `Dia 2/conversor.test.js` (4 testes)

Suite: **"Conversor - Celsius para Fahrenheit / Fahrenheit para Celsius"**

| # | Teste | Entrada | Esperado | Matcher |
| - | ----- | ------- | -------- | ------- |
| 1 | Ponto de congelamento: 0 °C → 32 °F | `celsiusParaFahrenheit(0)` | `32` | `toBe` |
| 2 | Ponto de ebulição: 100 °C → 212 °F | `celsiusParaFahrenheit(100)` | `212` | `toBe` |
| 3 | 32 °F → 0 °C | `fahrenheitParaCelsius(32)` | `0` | `toBeCloseTo` |
| 4 | Round-trip (ida e volta): 25 °C → 77 °F → 25 °C | `celsiusParaFahrenheit(25)` e `fahrenheitParaCelsius(77)` | `77` e `25` | `toBe` / `toBeCloseTo` |

### Destaques técnicos

- **Casos-limite físicos**: os pontos de congelamento (0 °C / 32 °F) e
  ebulição (100 °C / 212 °F) são os valores de referência da escala.
- **Teste de round-trip (ida e volta)**: valida a inversibilidade das
  duas funções — converter C → F → C deve retornar o valor original.
  É um padrão clássico para testar pares de conversão simétricas.
- **`toBeCloseTo`** é usado nas conversões de volta, porque `5/9` e `9/5`
  introduzem erros de arredondamento em ponto flutuante.

---

## Conceitos Jest cobertos neste projeto

| Conceito | Onde é usado |
| -------- | ------------ |
| `describe` | Agrupa os testes em suites (`Calculadora...`, `Conversor...`) |
| `test` / `it` | Define um caso de teste individual |
| `expect().toBe()` | Asserção estrita de igualdade |
| `expect().toBeCloseTo()` | igualdade aproximada para pontos flutuantes |
| `expect().toThrow()` | validação de erro lançado (`throw new Error`) |
| Matchers de precisão | `toBeCloseTo(valor, numCasas)` no teste da divisão |
| Cobertura de código | `npx jest --coverage` (relatório em `coverage/`) |
| Mocks / spies | não utilizados neste projeto |

## Scripts disponíveis

| Script | Comando | Descrição |
| ------ | ------- | --------- |
| `npm test` | `npx jest` | Executa todas as suítes |
| `npm run test-cov` | `npx jest --coverage` | Executa e gera relatório de cobertura |

## Status atual

- **17/17 testes passando** (2 suítes)
- **100% de cobertura** de statements, branches, funções e linhas
