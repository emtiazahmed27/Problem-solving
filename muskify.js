
// write a function maskify, which changes all but the last four characters into '#'.
// sample input: skipper
// sample output: ###pper
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
