

// myFun(1) -> i love it 
// myFun(2) -> i love that i hate it
// myFun(3) -> i love that i hate that i love it
// myFun(4) -> i love that i hate that i love that i hate it

function mySong(n){
    let str= 'i love it';
    let arr =str.split(' ');
    let str2='i hate it';
    let arr2=str2.split(' ');
    let output=[];

    for(let i=1;i<=n;i++){
        if (i==1)       output.push(arr.join(' '));
        else if(i%2==0) output.push(arr2.join(' '))
        else            output.push(arr.join(' '));
    }

    output.join(' ');
    let x=output[0];
    let finstr='';
    for(let j=0; j<output.length;j++){
        finstr+=(output[j].replace("it","that "));
        if(j==output.length-1) {
            finstr+=x;
        };
    }
    console.log(finstr);
}
mySong(4);

