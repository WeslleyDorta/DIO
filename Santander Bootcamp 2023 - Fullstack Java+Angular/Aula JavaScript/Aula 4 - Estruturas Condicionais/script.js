var jogador1 = 0;
var jogador2 = 1;
var placar;


// Aninhamente de IFs
/*if (jogador1 != -1 ) {
    if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto!');
    } else if(jogador2 > 0) {
        console.log('Jogador 2 marcou ponto');
    } else {
        console.log('Ninguem marcou ponto');
    }
} */

//if ternario
/*jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :
console.log('Jogadores Invalidos');
    if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto!');
    } else if(jogador2 > 0) {
        console.log('Jogador 2 marcou ponto');
    } else {
        console.log('Ninguem marcou ponto');
    } */

//Switch Case
/*jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :
console.log('Jogadores Invalidos');

// Usando o IF
if (jogador1 > 0 && jogador1 == 0) {
        console.log('Jogador 1 marcou ponto!');
} 

// Usando o Else if
else if(jogador2 > 0 && jogador1 == 0) {
        console.log('Jogador 2 marcou ponto');
} 

//Usando o Else
else {
        console.log('Ninguem marcou ponto');
    }

switch(Placar) {
    case placar = jogador1 > jogador2:
        console.log('jogador1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador2 ganhou');
        break;
        default:
        console.log('Ninguem ganhou');
}*/

//Laços de repetição
let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5', ];

let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', }

// for: executa uma instrução até que ela seja falsa
/*for (let indice = 0; indice < array.length; indice++) {
    console.log(indice)
}*/

//for in: executa repetição a partir de uma propriedade
/*for (let i in array) {
    console.log(i)
}

// com object
for (i in object) {
    console.log(i)
}*/

// for/of - Executa repetição a partir de valor
// com array
/*for (i of array) {
    console.log(i)
}

// com object
for (i of object.propriedade1) {
    console.log(i)
} */

//while
var a = 0;

while (a < 10) {
    a++;
    console.log(a)
}

//do while

do {
    a++;
    console.log(a);
} while (a < 10)
