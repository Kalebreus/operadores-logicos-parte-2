# Operadores lógicos — Parte 2

Continuação dos estudos de JavaScript: operadores E (`&&`), OU (`||`) e NÃO (`!`).

Na [Parte 1](https://github.com/Kalebreus/operadores-logicos-parte-1), o foco foram os operadores de comparação. Agora, o objetivo é combinar condições e inverter seu resultado.

## E — &&

Com condições booleanas, o operador E retorna `true` quando **todas** as condições são verdadeiras.

```javascript
const idade = 20;
const documentoValido = true;

console.log(idade >= 18 && documentoValido); // true
```

Podemos encadear mais de duas condições:

```javascript
const usuarioAutenticado = true;
const contaAtiva = true;
const emailConfirmado = false;

console.log(usuarioAutenticado && contaAtiva && emailConfirmado); // false
```

## OU — ||

Com condições booleanas, o operador OU retorna `true` quando **pelo menos uma** condição é verdadeira. Ele também retorna `true` quando mais de uma é verdadeira.

```javascript
const temIngresso = false;
const estaNaLista = true;

console.log(temIngresso || estaNaLista); // true
```

Também podemos encadear várias condições, como `temIngresso || estaNaLista || temConvite`.

## NÃO — !

O operador NÃO inverte um valor booleano:

```javascript
const bloqueado = false;

console.log(!bloqueado); // true
console.log(!true);     // false
console.log(!false);    // true
```

Para valores de outros tipos, `!` primeiro considera sua conversão para booleano e então inverte o resultado. Por exemplo, `!0` retorna `true` e `!'Ana'` retorna `false`. O resultado de `!` sempre é um booleano.

## Tabelas-verdade

As tabelas abaixo usam apenas valores booleanos.

| A | B | A && B | A \|\| B |
| --- | --- | --- | --- |
| `true` | `true` | `true` | `true` |
| `true` | `false` | `false` | `true` |
| `false` | `true` | `false` | `true` |
| `false` | `false` | `false` | `false` |

| A | !A |
| --- | --- |
| `true` | `false` |
| `false` | `true` |

## Como a avaliação acontece

As condições não são executadas simultaneamente. `&&` e `||` avaliam seus operandos da esquerda para a direita e podem encerrar a avaliação antes do fim. Esse comportamento se chama **curto-circuito**.

- `&&` para ao encontrar o primeiro valor considerado falso.
- `||` para ao encontrar o primeiro valor considerado verdadeiro.

Por isso, em `false && verificarPermissao()`, a função não é chamada. Em `true || verificarPermissao()`, ela também não é chamada: o primeiro valor já determina o resultado.

## Retorno de valores que não são booleanos

Em JavaScript, alguns valores são considerados falsos em condições: `false`, `0`, `-0`, `0n`, `''`, `null`, `undefined` e `NaN`. Eles são chamados de **falsy**. Valores como `'Ana'`, `1`, `[]` e `{}` são considerados verdadeiros, ou **truthy**.

`&&` e `||` retornam um dos operandos, sem necessariamente convertê-lo em booleano:

- `&&` retorna o primeiro operando falsy; se não houver nenhum, retorna o último operando.
- `||` retorna o primeiro operando truthy; se não houver nenhum, retorna o último operando.

```javascript
console.log('Ana' && 'ativo'); // ativo
console.log('' || 'Visitante'); // Visitante
console.log(0 && 'ativo');     // 0
console.log(false || 0);       // 0
```

Isso complementa as regras das tabelas-verdade: ao trabalhar somente com booleanos, o resultado também é booleano.

## Combinando os operadores

Use parênteses para deixar clara a condição que deseja agrupar:

```javascript
const usuarioAutenticado = true;
const administrador = false;
const editor = true;

const podeEditar = usuarioAutenticado && (administrador || editor);
console.log(podeEditar); // true
```

Nesse exemplo, é necessário estar autenticado e ter pelo menos um dos dois perfis.

## Como executar

Os exemplos de [exemplos.js](./exemplos.js) foram elaborados a partir do conteúdo da aula, incluindo complementos sobre curto-circuito e retorno dos operandos.

Com uma versão atual do Node.js instalada, execute na pasta do repositório:

```bash
node exemplos.js
```

## Para praticar

- No exemplo de E, altere `documentoValido` para `false` e preveja o resultado.
- No exemplo de OU, atribua `false` às duas variáveis e depois `true` às duas. Compare os resultados.
- Inverta o valor de `bloqueado` e observe o resultado de `!bloqueado`.
- No exemplo de perfis, altere `usuarioAutenticado` para `false` e observe se `podeEditar` muda.
- Troque o nome vazio em `nomeInformado` por seu nome e veja o que `||` retorna.
