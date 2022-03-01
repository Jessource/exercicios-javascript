function calcularIdade(dataNascimento){
  var arrayDatanascimento=dataNascimento.split("/")
  var idade= new Date(arrayDatanascimento[2], arrayDatanascimento[1]-1, arrayDatanascimento[0])
  return Math.floor((Date.now()-idade)/(31557600000))
}
function deixaEntrar(data,censura){
  var idade = calcularIdade(data)
  console.log(idade)
  if(idade>=censura){
    return true
  }else{
    return false
  }
}
var podeEntrar=deixaEntrar('27/02/1999',18)

console.log(podeEntrar)