/*function solution(str,end){
    const l1 = str.length,
    l2 = end.length;
return str.slice(l1-l2) == end 
}
console.log(solution("jdfkjs","s"))*/
/*function solution(str,end){
    let i=end.length
    let j =str.length
    while ( i>=0) {
        if (end[i] !==str[j]) return false
        i--
        j--
    }
    return true
}
console.log(solution("jdfkjs","j"))*/
function sol(str,end){
    let str2=str.endsWith(end)
    return str2
}
console.log(sol("hjkjkj","j"))
