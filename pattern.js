
//Function shows a pattern if numbeer is divisible by 5
function pattern(a){
    let arr=[];
    let count=0;
    for(let i=0; i<=a; i++){
        if(i%5==0){
            count++;
            arr.push("*".repeat(count));
        }
        else arr.push(i);
    }
    console.log(arr);
}
pattern(20);