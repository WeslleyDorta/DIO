//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

const valorInicial = parseFloat(prompt("Informe um valor inicial"));
const taxaJuros = parseFloat(prompt("Informe a taxa de juros"));
const periodo = parseInt(prompt("Informe o periodo em anos"));



//TODO: Iterar, baseado no período em anos, para calculo do valorFinal com os juros.
const valorFinal = valorInicial * Math.pow(1 + taxaJuros, periodo);
//valorFinal = valorInicial * (1 + taxaJuros)^periodo

console.log('Valor final do investimento: R$', valorFinal.toFixed(2));

// Você pode criar uma função em JavaScript para calcular o valor final de um investimento com juros compostos usando a fórmula:

// sql

// Valor Final = Valor Inicial * (1 + Taxa de Juros) ^ Período

// Aqui está uma implementação da função que segue essas instruções:

// javascript

// function calcularValorFinal(valorInicial, taxaJuros, periodo) {
//     if (periodo <= 0 || valorInicial <= 0 || taxaJuros < 0) {
//         return "Entrada inválida. Certifique-se de que todos os valores sejam positivos e que o período seja maior que zero.";
//     }

//     const valorFinal = valorInicial * Math.pow(1 + taxaJuros, periodo);
    
//     // Arredonde o valor final para duas casas decimais
//     const valorFinalArredondado = Math.round(valorFinal * 100) / 100;
    
//     return valorFinalArredondado;
// }

// // Exemplo de uso:
// const valor_inicial = 1000; // Valor Inicial
// const taxa_juros = 0.05;   // Taxa de Juros de 5%
// const periodo = 5;         // Período de 5 anos

// const valor_final = calcularValorFinal(valor_inicial, taxa_juros, periodo);
// console.log(`O valor final do investimento após ${periodo} anos é: R$ ${valor_final}`);

// Esta função calcularValorFinal recebe o valor inicial, a taxa de juros e o período como argumentos e retorna o valor final do investimento após o período determinado, com arredondamento para duas casas decimais. Certifique-se de fornecer valores válidos e positivos para evitar resultados incorretos.
// User
// Math.pow
// ChatGPT

// Math.pow é uma função embutida em JavaScript que é usada para calcular uma base elevada a uma potência. Ela é usada para realizar operações de exponenciação. A função Math.pow aceita dois argumentos: a base e o expoente. A base é o número que será elevado à potência do expoente.

// Aqui está a sintaxe da função Math.pow:

// javascript

// Math.pow(base, expoente)

//     base: O número que você deseja elevar à potência.
//     expoente: O valor pelo qual você deseja elevar a base.

// A função retorna o resultado da operação de exponenciação, ou seja, base elevado a expoente. Veja um exemplo:

// javascript

// const resultado = Math.pow(2, 3); // 2 elevado a 3
// console.log(resultado); // Saída: 8

// Neste exemplo, Math.pow(2, 3) calcula 2 elevado à potência de 3, o que resulta em 8.

// Você também pode usar a notação de operador ** para calcular exponenciação a partir do ECMAScript 2016 (ES6) em diante. O exemplo acima também pode ser escrito como:

// javascript

// const resultado = 2 ** 3; // 2 elevado a 3
// console.log(resultado); // Saída: 8

// Ambas as abordagens realizam a mesma operação de exponenciação.