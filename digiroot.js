
// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

// function digital_roots(n){
//     let str;
//     let sum=0;
//     str=n.toString().split("").map(Number);
//     for(let i=0; i<str.length; i++){
//         sum=sum+str[i];
//     }
//     return sum>9? digital_roots(sum):sum;
// }
// console.log(digital_roots(121313132211));


function digital_roots(n){
    let rem;
    let res=[];
    let sum=0;
    while(n!=0){
        rem=n%10;
        res.push(rem);
        n=Math.floor(n/10);
    }
    for(let i=0;i<res.length;i++){
        sum=sum+res[i];
    }
    if(sum>9){
        return digital_roots(sum);
    } 
    else return sum;
}
console.log(digital_roots(132189));
console.log(digital_roots(493193));