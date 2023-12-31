/**
 * [M1S05] Ex 7 - Manipulação de arrays
 *
 * Escreve um programa que contém três funções para manipular arrays, utilizando os métodos
 * push, pop e slice:
 *   A. `adicionarElemento`: recebe um array e um elemento, e adiciona o elemento ao final do array.
 *      Em seguida, retorna o array atualizado.
 *   B. `removerUltimoElemento`: recebe um array, remove o último elemento do array e retorna o elemento removido.
 *   C. `removerElementosIntervalo`: recebe um array, um índice inicial e um índice final. A função deve
 *      remover os elementos do array compreendidos entre os índices inicial e final. Em seguida, retorna o
 *      array atualizado.
 */

function adicionarElemento(array, elemento) {
    array.push(elemento);
    return array;
  }
  
  function removerUltimoElemento(array) {
    var elementoRemovido = array.pop();
    return elementoRemovido;
  }
  
  function removerElementosIntervalo(array, indiceInicial, indiceFinal) {
    array.splice(indiceInicial, indiceFinal - indiceInicial + 1);
    return array;
  }
  
  var meuArray = [1, 2, 3, 4, 5];
  
  console.log(adicionarElemento(meuArray, 6));
  
  console.log(removerUltimoElemento(meuArray));
  
  console.log(removerElementosIntervalo(meuArray, 1, 3));