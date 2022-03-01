
/*
Exercício: sobrenome da família
Temos uma lista com nomes de todos os integrantes da família mas esqueceram de
colocar o sobrenome!
Seu desafio será imprimir nome junto com o sobrenome “Macedo” para cada integrante
da família. Mas temos uma exceção, temos um integrante com sobrenome diferente, se
tiver algum “Pedro”, coloque o sobrenome “Sousa”.
Dica: Utilize for e continue para criar a solução. Acrescente um espaço antes do
sobrenome, por exemplo: “ Sousa”.
*/


var listaNomes = ["Marcello", "Jessica", "Pedro"];
for( var i=0; i<listaNomes.length;i++){
  if(listaNomes[i]=='Pedro'){
  console.log(listaNomes[i] +" Souza")
  continue
  }
  console.log(listaNomes[i] +" Macedo")
}


