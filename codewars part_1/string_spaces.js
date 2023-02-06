//let str = "4444 5445-7854-8765";
//console.log( str.match(/\d{4}\s\d{4}[\s-]\d{4}(\s|-)\d{4}/) );
function noSpace(x){
    let str=x.replace(/[ ]/g,"")
    return str

}
console.log(noSpace("8aaaaa dddd r     "))