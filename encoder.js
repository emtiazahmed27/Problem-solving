
// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    let str=word.toLowerCase();
    let outputString='';
    for(let i=0; i<str.length;i++){
        if(str.lastIndexOf(str[i])==str.indexOf(str[i]))    outputString+='(';
        else                                                outputString+=')'; 
    }
    return outputString;
}
console.log(duplicateEncode("Success"));
console.log(duplicateEncode("recede"));
console.log(duplicateEncode("(( @"));