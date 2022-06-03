

function getSum(a,b){
    let sum=0;
    if(a==b) return (a);
    else if(a>b){
    for( b ;b<=a;b++){
        sum=sum+b;
    }
    return (sum);
    }
    else{
    for(a; a<=b;a++){
        sum=sum+a;
    }
    return (sum);
    }
}
console.log(getSum(1,1));
console.log(getSum(-1, 0));
console.log(getSum(-1, 2));



// function getSum( a,b )
// {    if(a == b) {
//         return a
//     }
//     else if (a < b) {
//         return a + getSum(a+1, b);
//     } else {
//         return a + getSum(a-1, b);
//     };
// }
// console.log(getSum(1,1));