
//write a function that filters out the element except numbers
function filter_list(l){
    let res=[];
    for(let i=0;i<l.length;i++){
        if(Number.isInteger(l[i])){
            res.push(l[i]);
        } 
    }
    return res;
}
console.log(filter_list([1,2,'emt']));