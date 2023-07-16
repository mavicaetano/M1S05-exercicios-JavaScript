/**
 * [M1S05] Ex 8 - Teste de funções da calculadora
 *
 * Escreve uma função chamada `calculadora` que recebe três parâmetros: dois números e uma função de operação
 * matemática. A função `calculadora` executa a operação matemática nos dois números fornecidos e retorna o resultado.
 * Testa a função utilizando diferentes operações como adição, subtração, multiplicação e divisão.
 */

function calculadora(num1, num2, operacao) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      return 'Os valores informados devem ser números válidos.';
    }
  
    if (typeof operacao !== 'function') {
      return 'A operação fornecida não é uma função válida.';
    }
  
    return operacao(num1, num2);
  }
  
  function adicao(a, b) {
    return a + b;
  }
  
  function subtracao(a, b) {
    return a - b;
  }
  
  function multiplicacao(a, b) {
    return a * b;
  }
  
  function divisao(a, b) {
    return a / b;
  }
  
  console.log(calculadora(5, 3, adicao));
  console.log(calculadora(10, 4, subtracao));
  console.log(calculadora(6, 2, multiplicacao));
  console.log(calculadora(15, 3, divisao));
  console.log(calculadora(8, 'a', adicao));
  console.log(calculadora(5, 2, 'subtracao'));