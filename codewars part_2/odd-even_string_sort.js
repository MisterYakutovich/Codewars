function sortMyString(s) {
   let result=s.split("")
   let arr= result.filter((i,index)=>index%2==0).join("")
   let arr1=result.filter((i,index)=>index%2!=0).join("")
   let arr2=" "
    return arr+arr2+arr1
}
console.log(sortMyString("YCOLUE'VREER"))