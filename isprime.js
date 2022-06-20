
// // primeNumber or not (fermat's theorem)
// function isPrime(num){
//   let a=Math.pow(2,num-1);
//   if(num<2) return false;
//    else if(a%num==1){
//     return true;
//    } 
//    else{ 
//     return false;  
//     }
// }
// console.log(isPrime(1));
// console.log(isPrime(7));
// console.log(isPrime(2));

// function isPrime(num){
//     if(num<1) return false;
//     else if(num%2==0||num%3==0||num%5||num%7) return false;
//     else return true;
// }
// console.log(isPrime(-1));
// console.log(isPrime(5099));
// console.log(isPrime(2));


// generate-prime

// function isPrime(num) {
//   for(var i = 2; i < num; i++)
//     if(num % i == 0) return false;
//   return num ;
// }
// function primes(n){
//   var array_of_primes=[];
// for(var i = 2; i < n; i++){
//     if(isPrime(i)) array_of_primes.push(i);
//      }
//    return array_of_primes;
// }
// console.log(primes(10000));



function isPrime(num) {
    var sqrtnum=Math.floor(Math.sqrt(num));
      var prime = num >= 2;
      for(var i=2; i<sqrtnum+1; i++) { // sqrtnum+1
          if(num % i == 0) {
              prime = false;
              break;
          }
      }
      return prime;
  }
console.log(isPrime(-1));
console.log(isPrime(5099));
console.log(isPrime(2));
