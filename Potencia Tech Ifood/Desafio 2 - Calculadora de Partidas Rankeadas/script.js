function calcularSaldo() {
    const vitorias = parseInt(document.getElementById("vitorias").value);
    const derrotas = parseInt(document.getElementById("derrotas").value);
    const saldo = vitorias - derrotas;
    var saldoElement = document.getElementById("saldo");
    saldoElement.style.color = "black";
    

    if (saldo <= 10) {
                saldoElement.textContent = "O herói tem saldo de " + saldo + " está no nível Ferro";
            } else if (saldo >= 11 && saldo <= 20) {
                saldodoElement.textContent = "O herói tem saldo de " + saldo + " está no nível Bronze";
            } else if (saldo >= 21 && saldo <= 50) {
                saldoElement.textContent = "O herói tem saldo de " + saldo + " está no nível Prata";
            } else if (saldo >= 51 && saldo <= 80) {
                saldoElement.textContent = "O herói tem saldo de " + saldo + " está no nível Ouro";
            } else if (saldo >= 81 && saldo <= 90) {
                saldoElement.textContent = "O herói tem saldo de " + saldo + " está no nível Platina";
            } else if (saldo >= 91 && saldo <= 100) {
                saldoElement.textContent = "O herói tem saldo de " + saldo + " está no nível Ascendente";
            } else if (saldo >= 101) {
                saldoElement.textContent = "O herói tem saldo de " + saldo + " está no nível Imortal";
            } else {
                saldoElement.textContent = "Valor inválido.";
                 saldoElement.style.color = "red";
            }
}




    
 



