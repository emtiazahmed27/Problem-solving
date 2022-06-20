
//You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.
// Example
// [8,5,5,8,3,9,0,8,9,7,9,4,7,8,9,1,2,7,3,8,9,7]
// The maximum height candles are 9 units high. There are 5 of them, so return 5.

function birthdayCakeCandles(arr){
    let i=0;
    let count=1;
    arr.sort((a,b)=>b-a);
    while (i<arr.length){
        if(arr[i]==arr[i+1]){
            count++;
            i++;
        }
        else break;
    }
    return count;
}
console.log(birthdayCakeCandles([8,5,5,8,3,9,0,8,9,7,9,4,7,8,9,1,2,7,3,8,9,7]));