function add(num1,num2) {
let arr1=Array.from(''+num1).map(Number)
let arr2=Array.from(''+num2).map(Number)
let index=arr1.length-arr2.length
let sumArray=[]
let arrAddZero=[]
for (let i=0;i<arr1.length || i<arr2.length;i++){
if (index>0){
 arrAddZero=new Array(index).fill(0).concat(arr2)
 sumArray.push(arrAddZero[i]+arr1[i])
}
else if (index<0){   
   arrAddZero=new Array(Math.abs(index)).fill(0).concat(arr1)
   sumArray.push(arrAddZero[i]+arr2[i])
  
}
else if (index==0){
    sumArray.push(arr1[i]+arr2[i])  
}
}
return Number(sumArray.join("")) 
}
 console.log(add(49999, 49999))   
    //n.push(arr[i]+d[i])
   // n=n.map(el=>(el===null||(typeof el=="number" && isNaN(el))) ? 0 : el)
 

   
    

