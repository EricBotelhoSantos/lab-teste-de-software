# Exemplo — Aula 5: Jest na prática (calculadora + conversor)

Pasta de apoio do professor. **Não precisa exibir em sala** — o código
aparece nos slides; aqui está a versão completa e executável.

## Arquivos

| Arquivo               | O quê                                                        |
| --------------------- | ------------------------------------------------------------ |
| `conversor.js`        | Soma, subtração, multiplicação e divisão (versão completa)   |
| `conversor.test.js`   | Suite Jest da conversor (4 testes)                         |
| `package.json`        | Scripts `test`, `test:watch` e `test:coverage`               |

## Como rodar (professor)

```bash
cd 2026-2/unifametro-ts/aula5/exemplo
npm install        # instala o Jest
npm test           # roda tudo (4 testes)
npm run test:coverage   # mostra cobertura
```