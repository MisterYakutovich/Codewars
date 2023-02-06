function mergeArrays(arr1, arr2) {
  let arr=arr1.concat(arr2)
 // let arr3=arr.filter((item,index)=>{
   // return arr.indexOf(item)===index
//  })
//  return arr3
  
  
 return [...new Set(arr)].sort((a,b)=>a-b)
}

console.log(mergeArrays([1,3,5,7,9], [10,8,6,4,2]))