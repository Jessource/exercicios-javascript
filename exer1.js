function banco(diaSemana){
  if(diaSemana != "sabado" && diaSemana != "domingo") {
    console.log("Você pode ir ao banco");
  } else {
    console.log("O banco está fechado, tente outro dia");
  }
}

banco("terca");
banco("sabado");
banco("quarta");
