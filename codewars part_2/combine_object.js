
function combine() {
    let allM=[];
    let all={};
    for(key in arguments){
      for(i of Object.entries(arguments[key])){
          allM.push(i);
        }
    }
    
    let keyAr='';
    for(i of allM){
      if(keyAr.indexOf(i[0]) >0){
        all[i[0]]=all[i[0]]+i[1];
      }else{
        all[i[0]]=i[1];
        
      }
      keyAr += ` ${i[0]}`;
      
    }
    return all
}