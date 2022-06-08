

function moveZeros(arr) {
    let result=[];
    let count=0
    for (let i=0; i<arr.length; i++){
        if(arr[i]!==0) result.push(arr[i]);
        else {
            count++;
        }
    }
    for(let j=0; j<count; j++){
        result.push(0);
    }
    return result;
  }
  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
