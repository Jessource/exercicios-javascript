function estavaPresenteNaAula(nomeDoAluno,nomesDosPresentes){
  var indice = nomesDosPresentes.indexOf(nomeDoAluno);

  if (indice !== -1) {
    return true
  }else{
    return false
  }
}

var res = estavaPresenteNaAula('jessica',['ana','joia','jessica']);

console.log(res)