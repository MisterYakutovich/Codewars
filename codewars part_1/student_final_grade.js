//const n=100
//const arr=Array.from({length:n},(_,index)=>index+1)
//console.log(arr)
function finalGrade (exam, projects) {
    if ((exam>90 && exam<=100) || projects>10){
        return 100
    }
    if (exam>75  && projects>=5){
        return 90
    } if (exam>50  && projects>=2){
        return 75
    }else{
        return 0
    }
    
  }
  console.log(finalGrade(100,0))
 /* const finalGrade = (exam, projects) => {
    return (
      exam > 90 || projects > 10 ? 100 :
      exam > 75 && projects >= 5 ? 90 :
      exam > 50 && projects >= 2 ? 75 : 0
    )
  }*/
 /* function finalGrade (exam, projects) {
    switch (true) {
      case exam > 90 || projects > 10: return 100;
      case exam > 75 && projects >= 5: return 90;
      case exam > 50 && projects >= 2: return 75;
      default: return 0;
    }
  }*/