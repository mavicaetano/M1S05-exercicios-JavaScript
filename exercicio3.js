/**
 * [M1S05] Ex 3 - Verificar número primo
 *
 * Escreve um programa que atribui um valor a uma variável `número` e verifica se ele
 * é um número primo. Um número primo é aquele que é divisível apenas por 1 e por ele mesmo.
 * Utiliza uma estrutura de repetição (do while) para verificar as divisões.
 */

function numeroPrimo(number) {
    let i = number-1;
    
    while (i!=1) {
        if (number%i==0) {
            return "Este não é um número primo."
        }

        i--;
    }
    
    return "Este é um número primo."
}

console.log(numeroPrimo(33));