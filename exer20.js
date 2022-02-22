function maximomin(a,b,c,d,e) {
  var valorMin = Math.min(a,b,c,d,e)
  var valorMax = Math.max(a,b,c,d,e)

  return [valorMin,valorMax]
}


console.log(maximomin(10,5,12,3,2))