
// //Finding factorial of a number
// function fact(num){
//     let facto=1;
//     for(let i=1; i<=num;i++){
//         facto*=i;
//     }
//     return facto;
// }
// console.log(fact(0));

// program to find the factorial of a number
// function factorial(x) {
//     if (x == 0) return 1;
//     else        return x * factorial(x - 1);
// }
// console.log(factorial(5));



// let arr=[0,null,undefined,"",2,3];
// let sum=0;
// for(let i=0; i<arr.length;i++){
//     if(arr[i]==0) console.log("false");
// //     else if(arr[i]==parseInt(arr[i])) console.log(sum=arr[i]+1);
// //     else console.log("false");
// }

//thruthy function
function myFun(arr){
    let sum=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]==0) console.log("false");
        else if(arr[i]==parseInt(arr[i])) console.log(sum=arr[i]+1);
        else console.log("false");
    }
}
myFun([0,null,undefined,"",2,3]);
// myFun([0,null,undefined,"",2,3,4,"emtiaz"])