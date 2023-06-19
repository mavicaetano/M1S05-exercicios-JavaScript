/**
 * [M1S05] Ex 5 - Verificar palavras em um array
 *
 * Escreve um programa que percorre um array de palavras e exibe todas as palavras que possuem
 * mais de 5 caracteres. Utiliza a estrutura de repetição for of para percorrer o array.
 */

const arrayPalavras = ["gato", "Maria", "café", "JavaScript", "SENAI", "GitHub", "DEVinHouse"];
let arrayMaisDeCinco = [];

for (let nomes of arrayPalavras){
    if (nomes.length>5){
    arrayMaisDeCinco.push(nomes);
    }
}

console.log(arrayMaisDeCinco);