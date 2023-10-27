//O que são vetores e Arrays

//Como declarar um array
/*let array = ['string', 1, true]
console.log(array); */

//Pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
//console.log(array[2]);

//forEach - Faz uma repetição para cada item ou indice dentro do array
//array.forEach(function(item, index){console.log(item, index)});

//push - Joga algum dado novo para dentro do Array
//array.push('novo item');
//console.log(array)

//pop - Remove o item no final do array
//array.pop();
//console.log(array);

//shift - Remove item no inicio do array
//array.shift();
//console.log(array);

//unshift - Add item no inicio do array
//array.unshift('Novo item');
//console.log(array);

//indexOf - Retirna o indice de um valor
//console.log(array.indexOf(true)); //retorna o valor de indice 2

//splice - Remove ou substitui um item pelo indice
//array.splice(0, 3);
//console.log(array)

//slice - Retorna uma parte de um array existente
//let novoArray = array.slice(0, 3);
//console.log(novoArray);

let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}};

/*console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno); */

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);