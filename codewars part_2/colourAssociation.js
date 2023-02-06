function colourAssociation(array){
    
   // let obj = Object.fromEntries(array);
   
    return array.map(i=>({[i[0]]:i[1]}))
    
  // let ar= array.reduce((acc,obj)=>{
    //  acc [obj[0]] = obj[1]
     //   return acc
  //  },{})
 //  return ar
  }
  console.log(colourAssociation([["white", "goodness"], ["blue", "tranquility"],["red", "tranquility"]]))
