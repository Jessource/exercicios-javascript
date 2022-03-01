
/*
Exercício: Frutas
Um sacolão montou uma lista com as frutas que eles vendem, e de acordo com a fruta
que o usuário busca eles querem informar se existe a fruta na lista ou não!

Segue a resolução a baixo:
*/
var listaDeFrutas = ['uva','banana','cacau']
var buscar= 'uva'
for( var i=0; i<listaDeFrutas.length;i++){
  if(buscar==listaDeFrutas[i]){
    console.log(" a fruta="+ buscar+" "+ "existe")
  }
}
