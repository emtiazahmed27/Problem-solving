
// sum of all digits in a number
function sumofDigits(n) {
    let rem;
    let res=[];
    let sum=0;
    let finsum=0;
    while(n!=0){
        rem=n%10;
        res.push(rem);
        n=Math.floor(n/10);
    }
    for(let i=0;i<res.length;i++){
        sum=sum+res[i];
    }
    console.log(sum);
  }
sumofDigits(132189);

// let n=132189;
// var digits = n.toString().split("");
// console.log(digits);
