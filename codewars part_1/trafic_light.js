function updateLight(current) {
    const arr=["green","yellow","red"]
  for (let i=0;i<arr.length;i++){  
   if (current===arr[i]){
    return arr[i+1]
   }
   else if(current===arr[arr.length-1]){
    return arr[i]
  } 
    
  }
  }
  console.log(updateLight("yellow"))
 