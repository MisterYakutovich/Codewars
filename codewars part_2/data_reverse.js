function dataReverse(data) {
    let size=8
    let subarray = []; 
    for (let i=0;i <Math.ceil(data.length/size);i++){
       subarray[i] = data.slice((i*size), (i*size) + size);
    }
   let revers = subarray.reverse()
   let result =[].concat(...revers)
   return result
  }
  console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]))