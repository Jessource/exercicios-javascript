
/*
Exercício: Autonomia
Os engenheiros de uma montadora estão projetando o computador de bordo de um
carro. Eles precisam de uma função que possa calcular a autonomia atual do automóvel,
em outras palavras, quantos quilômetros ele consegue andar com a quantidade de
combustível atual. A autonomia pode ser obtida multiplicando a quantidade de
combustível pelo rendimento. Será que você consegue ajudá-los?
Escreva uma função chamada autonomia:
Essa função deve receber dois parâmetros:
● O primeiro, que represente a quantidade de combustível que está no tanque
● O segundo, que represente o rendimento do automóvel
A função deve retornar a autonomia do automóvel.

Segue a resolução abaixo:



*/
function autonomia (qtdCombustivel,rendimento){
  var resultado= qtdCombustivel*rendimento
  console.log("o automóvel vai ter a autonomia de pecorrer "+resultado+"km")
  
}
autonomia(10,5);