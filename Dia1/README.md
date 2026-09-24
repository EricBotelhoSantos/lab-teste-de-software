# Exemplo — Aula 5: Jest na prática (calculadora + conversor)

Pasta de apoio do professor. **Não precisa exibir em sala** — o código
aparece nos slides; aqui está a versão completa e executável.

## Arquivos

| Arquivo               | O quê                                                        |
| --------------------- | ------------------------------------------------------------ |
| `calculadora.js`      | Soma, subtração, multiplicação e divisão (versão completa)   |
| `calculadora.test.js` | Suite Jest da calculadora (8 testes)                         |
| `package.json`        | Scripts `test`, `test:watch` e `test:coverage`               |

## Como rodar (professor)

```bash
cd 2026-2/unifametro-ts/aula5/exemplo
npm install        # instala o Jest
npm test           # roda tudo (14 testes)
npm run test:coverage   # mostra cobertura
```

## Dinâmica em sala

1. Mostrar `calculadora.js` com `multiplicar`/`dividir` ainda em `TODO`
   (versão dos slides) e os 4 testes de soma/subtração passando.
2. Implementar `multiplicar` ao vivo → rodar `npx jest` → verde.
3. Implementar `dividir` (com `throw` para `b === 0`) → rodar → verde.
4. Apresentar o exercício do `conversor.ts` (tarefa de casa, ver `pratica/`).

## Nota sobre o `.ts`

O `conversor.ts` usa JavaScript puro de propósito: assim o Jest padrão
executa o arquivo sem `ts-jest`/Babel. Os alunos fazem o mesmo em casa.
