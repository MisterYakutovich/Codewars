function otherAngle(a, b) {
    return a<=0 || b<=0 || a+b>=180 ? "error" : 180-a-b
   // if (a<=0 || b<=0 || a+b>=180){
      //  return "error"
   // }
   // return 180-a-b
  }
  console.log(otherAngle(1,178))