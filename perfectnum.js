//write a programm for perfect number

function perfectNum(num){
    let sum=0;
    for(let i=1;i<num;i++){
        if(num%i==0) sum+=i;
        else         sum+=0;
    }
    if(sum==num) return (num+' num is perfect');
    else         return (num+' num is not perfect');
}
console.log(perfectNum(100));
console.log(perfectNum(	6));
console.log(perfectNum(28));
console.log(perfectNum(	33550336));
console.log(perfectNum(8128));