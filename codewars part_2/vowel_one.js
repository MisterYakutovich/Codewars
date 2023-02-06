function vowelOne(str){
const vowels = 'aeiou';
 let res = '';
 for(let i = 0; i < str.length; i++){
 const el = str[i];
 if(vowels.includes(el) || vowels.toUpperCase().includes(el)){ 
 res += 1;
 }else{
 res += 0;
 };
 };
 return res;
};



  console.log(vowelOne("123, ArOu"))