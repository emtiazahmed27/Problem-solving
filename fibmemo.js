
//fibonacci (tree recursion/ memoization)
function fib(n, memo={}){
    if(n==0||n==1)  return n;
    if(n in memo)   return memo[ n];
    memo[n]=fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
}
console.log(fib(36));
console.log(fib(0));
console.log(fib(3));