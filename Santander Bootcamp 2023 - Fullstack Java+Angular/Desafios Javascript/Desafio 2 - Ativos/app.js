//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.const ativos = [];

// Entrada da quantidade de ativos
const quantidadeAtivos = parseInt(prompt("Informe a quantidade de ativos"));

//Entrada dos tipos de ativos
const ativos = [ ];
for (let i = 0; i < quantidadeAtivos; i++) {
  const codigoAtivo = prompt();
  ativos.push(codigoAtivo);
}

//TODO: Ordenar os ativos em ordem alfabética.
ativos.sort();
//TODO: Imprimir a lista de ativos ordenada, conforme a tabela de exemplos.
console.log(ativos.join("\n"))
// Neste código, usamos o método sort() para ordenar o array palavras em ordem alfabética. Em seguida, usamos o console.log para imprimir as palavras em linhas separadas. Para fazer isso, utilizamos o método join("\n"), que une os elementos do array em uma única string, separando-os por quebras de linha ("\n").