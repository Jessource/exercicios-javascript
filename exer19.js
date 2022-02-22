function gerarDezenas(){
  var array = []
 for( var i= 0; i<=5;i++){
  var dezenaAleatorio= Math.floor(Math.random()*60);
  array.push(dezenaAleatorio)
 }
  
 return array;
}

console.log(gerarDezenas());