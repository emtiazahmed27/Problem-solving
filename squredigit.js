
//write a code that will take a number as input and output will be squre of each.
//sample input 9119
//sample output 811181
function squreDigits(num){
 let str;
 str=num.toString();
 let arr=str.split("");
 let resarr=[];
 for(let i=0;i<arr.length;i++){
   arr[i]*=arr[i];
   resarr.push(arr[i]);
 }
 resarr=resarr.join('');
 return (parseInt(resarr));
}
console.log(squreDigits(9119));
