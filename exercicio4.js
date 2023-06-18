/**
 * [M1S05] Ex 4 - Imprimir sequência de Fibonacci
 *
 * Escreve um programa que imprime a sequência de Fibonacci até o número atribuído na variável
 * `número`. A sequência de Fibonacci é formada pela soma dos dois números anteriores:
 * 0, 1, 1, 2, 3, 5, 8, 13, ...
 * Utiliza uma estrutura de repetição (while) para gerar a sequência.
 */

let atual = 1;
let anterior = -1;
let aux = 0;
let n = 20;
let i = 0 

//f(n-1)+f(n-2)
while (i < n) {
    aux = atual + anterior;
    anterior = atual;
    atual = aux;
    console.log(aux);
    i++
}