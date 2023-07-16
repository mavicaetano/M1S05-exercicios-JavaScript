/**
 * [M1S05] Ex 6 - Percorrer array de objetos de produtos
 *
 * Escreve um programa que percorre um array de objetos que representam produtos e exibe o nome
 * e o preço de cada produto. Após imprimir essas informações, imprime o total de produtos
 * e o valor total de todos os produtos.
 */

const produtos = [
    { nome: "Camiseta", preco: 29.90 },
    { nome: "Calça", preco: 79.90 },
    { nome: "Casaco", preco: 159.90 },
    { nome: "Tênis", preco: 199.90 }
  ];
  
  let totalProdutos = produtos.length;
  let valorTotal = 0.0;
  
  for (let i = 0; i < produtos.length; i++) {
    const produto = produtos[i];
    console.log("Produto:", produto.nome);
    console.log("Preço:", produto.preco);
    console.log();
  
    valorTotal += produto.preco;
  }
  
  console.log("Total de produtos:", totalProdutos);
  console.log("Valor total: R$", valorTotal);