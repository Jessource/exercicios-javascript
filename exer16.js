function maisBaratosQueValor(valor, precos) {
  var valoresMaisBaixos = [];

  for(var i = 0; i < precos.length; i++) {
    if (valor > precos[i]) {
      valoresMaisBaixos.push(precos[i]);
    }
  }

  return valoresMaisBaixos;
}

function maisCarosQue(valor, precos) {
  var valoresMaisAltos = [];

  for(var i = 0; i < precos.length; i++) {
    if (valor < precos[i]) {
      valoresMaisAltos.push(precos[i]);
    }
  }

  return valoresMaisAltos;
}

function precosEntre(valorMenor, valorMaior, precos){
 
  var valoresEntre = [];
  for(var i = 0; i < precos.length; i++) {
    if(valorMenor < precos[i] && valorMaior > precos[i]) {
      valoresEntre.push(precos[i]);
    }
  }

  return valoresEntre;
}

var valores = [1.89, 2, 2.5, 3.2, 4, 4.15, 10.5, 2.8, 2.1, 2, 3.99];
console.log(precosEntre(2, 4, valores));