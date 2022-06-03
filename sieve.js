
//print prime to range
let range=1000;
let isPrime= new Array(range+1).fill(true);
for(let i=2; i*i<=range;i++){
    if(isPrime[i]){
        for(let j=i*2; j<=range; j+=i) isPrime[j]=false;
    }
}
for(let i=2; i<range; i++){
    if(isPrime[i]) console.log(i);
}