

function muskify(cc){
    let arr= cc.split("");
    let res=[];
    for(i=0; i<arr.length; i++){
        if(i<=arr.length-5) res.push("#");
        else                res.push(arr[i]);
    }
    res=res.join('');
    res.toString();
    return res;
}
console.log(muskify('skipperrrrrrrrrr'));



// let cc='skipper';
// let arr= cc.split("");
// let res=[];
// for(i=0; i<arr.length; i++){
//     if(i<=arr.length-5){
//         res.push("#");
//     }
//     else{
//          res.push(arr[i]);
//     }
// }
// res=res.join('');
// res.toString();
// console.log(res);

