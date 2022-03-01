/*
Exercício: transformaParaMaiusculo
Algumas vezes precisamos padronizar as informações antes de guardá-las no nosso
sistema.
Escreva uma função transformaParaMaiusculo(palavras). Essa função recebe como
parâmetro um array de palavras. Ela deve retornar um array com a versão MAIÚSCULA
de todas as palavras contidas no array passado como parâmetro.
Dica: lembre da função .toUpperCase()
Segue a resolução abaixo:
*/

function transformaParaMaiusculo(palavras){
  var resultado =[]

  for(var i = 0; i<palavras.length; i++){
    resultado.push(palavras[i].toUpperCase())
    

  }
  return resultado
}


palavrass = ['ana','bia']
console.log(transformaParaMaiusculo(palavrass))
