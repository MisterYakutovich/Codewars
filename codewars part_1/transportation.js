function rentalCarCost(day) {       
   // let sum=day*40
    return (day>=3 && day<7 ? (day*40)-20 : 
           day>=7  ? (day*40)-50 : 
           day*40)
   /* if (day>=3 && day<7){
        return (day*40)-20
    }
    if (day>=7){
        return (day*40)-50
    }else{
    return sum
    }*/
  }
  console.log(rentalCarCost(1))