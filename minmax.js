
//Function Shows MIN&MAX number of Your Input
function findMin(...arguments) {
    let min=Infinity;
    for (let i = 0; i < arguments.length; i++) 
      if(arguments[i]<min) min =arguments[i];     
    console.log(min);
}

function findMax(...arguments) {
    let max=-Infinity;
    for (let i = 0; i < arguments.length; i++) 
      if (arguments[i] > max) max = arguments[i];
   console.log(max);
}


findMax(121782616,251,21);
findMin(121782616,251,21);