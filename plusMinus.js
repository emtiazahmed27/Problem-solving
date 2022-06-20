
// an array is given to you. what you have to do is to calculate the ratio
// of positive, negative and zero's.
// note: you've to show 6 digits after floating point

// function plusMinus(arr) {
//     let posCount=0;
//     let negCount=0;
//     let zeroCount=0;
//     let posRatio;
//     let negRatio;
//     let zeroRatio;
//     for(let i=0; i<arr.length;i++){
//         if(arr[i]>0) posCount++;
//         else if(arr[i]<0) negCount++;
//         else zeroCount++;
//     }
//     posRatio=posCount/arr.length;
//     negRatio=negCount/arr.length;
//     zeroRatio=zeroCount/arr.length;
    
//     console.log(posRatio.toPrecision(6));
//     console.log(negRatio.toPrecision(6)); ;
//     console.log(zeroRatio.toPrecision(6));
// }

// plusMinus([-4, 3, -9, 0, 4, 1]);


// function birthdayCakeCandles(candles) {
//     let arr=[];
//     for(let i=0; i<candles.length;i++){
//         if(candles.lastIndexOf(candles[i])==candles.indexOf(candles[i])){}
//         else arr.push(candles[i]);
//     }
//     console.log(arr.length);
//     console.log(arr.sort());
    
// }
// birthdayCakeCandles([8,5,5,8,3,9,0,8,9,7,9,4,7,8,9,1,2,7,3,8,9,7]);

// function birthdayCakeCandles(candles) {
    
//     let tallestCount = 1;
//     let i = 0;
//     candles.sort((a, b) => b - a);

//     console.log(candles);
//     while (i < candles.length) {
//       if (candles[i] === candles[i + 1]) {
//           tallestCount++
//           i++;
//       } else {
//           break;
//       }
//     }
//     console.log(tallestCount);
//   }
//   birthdayCakeCandles([8,5,5,8,3,9,0,8,9,7,9,4,7,8,9,1,2,7,3,8,9,7])

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