
//sample input: 12345    3
//sample output: 23451   45123
function rotateLeft(arr){
    let temp;
    for(let i=0;i<arr.length-1;i++){
        temp=arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
    }
    return arr;
}
console.log(rotateLeft([1,2,3,4,5]));