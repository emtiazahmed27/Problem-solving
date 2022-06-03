function narcissistic(value){
    if(value>0){
    let arr;
    let sum=0;
    arr=value.toString().split('').map(Number);
    for(let i=0;i<arr.length;i++){
        sum=sum+(Math.pow(arr[i],arr.length));
    }
    if(value==sum) return true;
    else           return false;
    }
    else return false;
}
console.log(narcissistic(153));
console.log(narcissistic(154));
console.log(narcissistic("hi there"))

