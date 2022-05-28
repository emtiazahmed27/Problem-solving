
//function that shows first name only
function firsttName(str){
    str=str.toLowerCase();
    let arr=str.split();
    let res_str=[];
    for(i=0;i<arr.length;i++){
        if (arr[i] !==" "){
            res_str.push(arr[i]);
        }
        else{
            break;
        }
    }
   return (res_str.toString());
}
console.log(firsttName('Murgi Kabir'));

// function firstName(str){
//     str=str.toLowerCase();
//     console.log((str.slice(0,str.indexOf(" "))));
// }
// firstName('Murgi Kabir');