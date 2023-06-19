/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */

let isNumeroPrimo = true;
let number = 47;
let i = number - 1;

while (i != 1) {
    if (number % i == 0) {
        isNumeroPrimo = false;
    }

    i--;
}

if (isNumeroPrimo) {
    console.log("Este é um número primo.");
} else {
    console.log("Este não é um número primo.");s
}