// Trolls are attacking your comment section!
// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
// Your task is to write a function that takes a string and return a new string with all vowels removed.
// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
// Note: for this kata y isn't considered a vowel.

// function disemvowel(str) {
//     return str;
//   }


function disemvowel(str) {
    let arr=str.split("");
    let res=[];
    let str2;
    for(let i=0; i<arr.length; i++){
        if(arr[i]=="a"||arr[i]=="A"||arr[i]=="E"||arr[i]=="e"||arr[i]=="I"||arr[i]=="i"||arr[i]=="O"||arr[i]=="o"||arr[i]=="U"||arr[i]=="u"){
        
        }
        else{
            res.push(arr[i]);
        }
    }
    str2=res.join("");
    return str2;
}
console.log(disemvowel("This website is for losers LOL!"));



// let str="emtiaz ahmed";
// let arr=str.split("");
// let res=[];
// let str2;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]=="a"||arr[i]=="A"||arr[i]=="E"||arr[i]=="e"||arr[i]=="I"||arr[i]=="i"||arr[i]=="O"||arr[i]=="o"||arr[i]=="U"||arr[i]=="u"){
//         i++;
//     }
//     else{
//         res.push(arr[i]);
//     }
    
// }
// str2=res.join("");
// console.log(str2);