//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// "din"      =>  "((("
// "recede"   =>  "()()()"


let str="hello";
let arr=str.split('');
let count=0;
console.log(arr);
for(let i=0; i<arr.length;i++){
    if(arr.lastIndexOf(arr[i]==arr.indexOf(arr[i])))
    console.log(arr[i]+" ->1");
    else {
        count+=1;
        console.log(arr[i]+" ->"+count)};
}
