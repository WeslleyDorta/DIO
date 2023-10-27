// // Solicita ao usuário o saldo atual, o valor do depósito e o valor da retirada
// const saldoAtual = parseFloat(prompt("Informe o saldo atual da conta bancária:"));
// const valorDeposito = parseFloat(prompt("Informe o valor do depósito:"));
// const valorRetirada = parseFloat(prompt("Informe o valor da retirada:"));

// // Calcula o saldo atualizado
// const saldoAtualizado = saldoAtual + valorDeposito - valorRetirada;

// // Exibe o saldo atualizado com uma casa decimal
// console.log("Saldo atualizado: " + saldoAtualizado.toFixed(1));

// const saldoAtual = parseFloat(prompt("Informe o saldo atual da conta bancária:"));
// const valorDeposito = parseFloat(prompt("Informe o valor do depósito:"));
// const valorRetirada = parseFloat(prompt("Informe o valor da retirada:"));

// const saldoAtualizado = saldoAtual + valorDeposito - valorRetirada;

// console.log("Saldo atualizado na conta: " + saldoAtualizado.toFixed(1));

// Neste código, usamos parseFloat para converter as entradas do usuário em números decimais. Em seguida, calculamos o saldo atualizado subtraindo o valor de retirada do valor de depósito e adicionando-o ao saldo atual. Por fim, usamos toFixed(1) para exibir o saldo atualizado com uma casa decimal, como especificado.

// Lembre-se de que este é apenas um exemplo básico e pode ser expandido ou incorporado em um sistema mais completo conforme necessário. Além disso, em uma aplicação real, seria importante adicionar validação de entrada e tratamento de erros para garantir que as entradas sejam numéricas e que o saldo não se torne negativo, se isso não for permitido.

    // Função para calcular o saldo
    function calcularSaldo() {
        const saldoAtual = parseFloat(document.getElementById("saldoAtual").value);
        const valorDeposito = parseFloat(document.getElementById("valorDeposito").value);
        const valorRetirada = parseFloat(document.getElementById("valorRetirada").value);

        const saldoAtualizado = saldoAtual + valorDeposito - valorRetirada;
        const resultadoElement = document.getElementById("resultado");

        resultadoElement.innerHTML = "Saldo atualizado na conta: " + saldoAtualizado.toFixed(1);
    }