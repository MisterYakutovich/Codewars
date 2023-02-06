function minSum(arr) {
    arr.sort((a,b)=>a-b)
    let sum=[]   
    for (let i=0;i<arr.length/2;i++){  
       let  temp=  arr[i]*arr[arr.length-i-1]
        sum.push(temp)
    }
   return sum.reduce((sum, elem) => sum + elem, 0);
  }
  console.log(minSum([9,2,8,7,5,4,0,6]))