function digits(n) {
  if (n>=0){
    let str=String(n)
    let number_index=Number(str.length)
    return number_index
  }else{
    return "number greater than or equal to 0"
  }
  }
  console.log(digits(0))
  
