
//primeNumber or not (fermat's theorem)
function isPrime(p){
    let a=Math.pow(2,p-1);
    if(a%p==1) return true;
    else return false;
}
console.log(isPrime(1));
console.log(isPrime(199));
console.log(isPrime(20));



// generate-prime

function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0) return false;
  return num ;
}
function primes(n){
  var array_of_primes=[];
for(var i = 2; i < n; i++){
    if(isPrime(i)) array_of_primes.push(i);
     }
   return array_of_primes;
}
console.log(primes(10000));
