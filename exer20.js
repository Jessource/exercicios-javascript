/*
Exercício: Máximo e Mínimo
Escreva uma função maxmin (a, b, c, d, e) que receba cinco números como parâmetros.
Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros
da função maxmin e o segundo elemento é o maior dos parâmetros da função maxmin.
Segue a resolução abaixo:
*/

function maximomin(a,b,c,d,e) {
  var valorMin = Math.min(a,b,c,d,e)
  var valorMax = Math.max(a,b,c,d,e)

  return [valorMin,valorMax]
}


console.log(maximomin(10,5,12,3,2))