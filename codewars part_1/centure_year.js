function century(year) {
    if (year%100==0){
      return (year-year%100)/100
     }
    else if (year%100>0){
      return  (year-year%100)/100+1
    }
    else {
      return 0
    }
  }
  console.log(century(0))
// let a=101
// let b=(a-a%100)/100+1
 //console.log(b)
 //let c=2000
 //let d=c%100
// console.log(d)