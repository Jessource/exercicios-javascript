
function exibirLucroTotal(lucro){
  var soma = 0
  for(var i =0;i<lucro.length;i++){
    soma += lucro[i]
  }
  return soma;

}
var listaTotal = [10, 10, 10];
var lucroTotal = exibirLucroTotal(listaTotal);
console.log(lucroTotal); 


function exibirProdutos(produtos){
  for(var i = 0; i<produtos.length;i++){
    console.log(produtos[i])
  }

}
var listaProdutos=['leite','cafe','tomate']
var exibir=exibirProdutos(listaProdutos)
console.log(exibir)