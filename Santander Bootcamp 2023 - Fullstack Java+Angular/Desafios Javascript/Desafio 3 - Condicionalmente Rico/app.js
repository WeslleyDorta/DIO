//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

// Entrada de dados
let saldoTotal = parseInt(prompt("Digite o saldo total"));
let valorSaque = parseInt(prompt("Digite o valor do saque"));

//TODO: Criar as condições necessárias para impressão da saída, vide tabela de exemplos.
if (saldoTotal >= valorSaque) {
  // Realizar o saque subtraindo o valor do saldo total
  const saldoDisponivel = saldoTotal - valorSaque;
  
  // Exibir mensagem de saque realizado com sucesso e o novo saldo
  console.log(`Saque realizado com sucesso! Novo saldo: ${saldoDisponivel}`);
} else {
  // Exibir mensagem de saldo insuficiente
  console.log("Saldo insuficiente. Saque não realizado!");
}



// Neste código, nós:

//     Solicitamos ao cliente o saldo total da conta e o valor do saque usando prompt.
//     Verificamos se o saldo total é maior ou igual ao valor do saque usando uma instrução if.
//     Se o saldo for suficiente, subtraímos o valor do saque do saldo total para realizar o saque.
//     Exibimos uma mensagem de sucesso com o novo saldo.
//     Caso contrário, exibimos uma mensagem de saldo insuficiente.

// Esse código simula o processo de saque em um caixa eletrônico de acordo com as regras especificadas.