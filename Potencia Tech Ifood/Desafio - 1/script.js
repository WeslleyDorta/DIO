function calcularNivel() {
    var nameP = document.getElementById("nameP").value;
    var xp = parseInt(document.getElementById("xp").value);
    var resultadoElement = document.getElementById("resultado");
    resultadoElement.style.color = "black";

    if (xp <= 1000) {
        resultadoElement.textContent = "O herói " + nameP + " está no nível Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        resultadoElement.textContent = "O herói " + nameP + " está no nível Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        resultadoElement.textContent = "O herói " + nameP + " está no nível Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        resultadoElement.textContent = "O herói " + nameP + " está no nível Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        resultadoElement.textContent = "O herói " + nameP + " está no nível Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        resultadoElement.textContent = "O herói " + nameP + " está no nível Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        resultadoElement.textContent = "O herói " + nameP + " está no nível Imortal";
    } else if (xp >= 10001) {
        resultadoElement.textContent = "O herói " + nameP + " está no nível Radiante";
    } else {
        resultadoElement.textContent = "Valor de XP inválido.";
        resultadoElement.style.color = "red";
    }
}
    
 



