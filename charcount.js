//character count in a string
function count(str){
    let count={};
    str.split("").forEach(char =>{count[char]=count[char]? (count[char]+1):1});
    return count;
}
console.log(count("hello"));