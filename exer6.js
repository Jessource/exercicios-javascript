function menorNumero(a,b){
  if(a>b ){
    return b
  }else if(b>a){
    return a
  }else{
    return(a || b)
    
  }
}
console.log(menorNumero(2,5))