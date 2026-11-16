// Exemplos elaborados a partir do conteúdo da aula.
// Os blocos separam os exemplos para permitir executar tudo no mesmo arquivo.

// 1. E (&&): todas as condições booleanas precisam ser verdadeiras.
{
  const idade = 20;
  const documentoValido = true;

  console.log('Maior de idade com documento válido:', idade >= 18 && documentoValido); // true
}

// 2. E com três condições.
{
  const usuarioAutenticado = true;
  const contaAtiva = true;
  const emailConfirmado = false;

  console.log('Todas as condições atendidas:', usuarioAutenticado && contaAtiva && emailConfirmado); // false
}

// 3. OU (||): basta uma das condições booleanas ser verdadeira.
{
  const temIngresso = false;
  const estaNaLista = true;

  console.log('Tem ingresso ou está na lista:', temIngresso || estaNaLista); // true
  console.log('OU com ambas verdadeiras:', true || true); // true
}

// 4. NÃO (!): o resultado sempre é booleano.
{
  const bloqueado = false;

  console.log('Não está bloqueado:', !bloqueado); // true
  console.log('!true:', !true); // false
  console.log('!false:', !false); // true
  console.log('!0:', !0); // true
  console.log("!'Ana':", !'Ana'); // false
}

// 5. Combinando condições: autenticado E (administrador OU editor).
{
  const usuarioAutenticado = true;
  const administrador = false;
  const editor = true;
  const podeEditar = usuarioAutenticado && (administrador || editor);

  console.log('Pode editar:', podeEditar); // true
}

// 6. && e || podem retornar valores que não são booleanos.
{
  const nomeInformado = '';
  const nomeExibido = nomeInformado || 'Visitante';

  console.log('Nome exibido:', nomeExibido); // Visitante
  console.log("'Ana' && 'ativo':", 'Ana' && 'ativo'); // ativo
  console.log("0 && 'ativo':", 0 && 'ativo'); // 0
  console.log('false || 0:', false || 0); // 0
}

// 7. Curto-circuito: os operandos seguintes podem não ser avaliados.
{
  function verificarPermissao() {
    console.log('Verificação de permissão executada.');
    return true;
  }

  console.log('false && verificarPermissao():', false && verificarPermissao()); // false; não chama a função.
  console.log('true || verificarPermissao():', true || verificarPermissao()); // true; não chama a função.
  console.log('true && verificarPermissao():', true && verificarPermissao()); // Chama a função e retorna true.
}
