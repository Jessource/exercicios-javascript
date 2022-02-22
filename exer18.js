function transformaParaMaiusculo(palavras){
  var resultado =[]

  for(var i = 0; i<palavras.length; i++){
    resultado.push(palavras[i].toUpperCase())
    

  }
  return resultado
}


palavrass = ['ana','bia']
console.log(transformaParaMaiusculo(palavrass))
