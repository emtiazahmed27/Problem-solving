function findMin(...arguments) {
    let min=Infinity;
    for (let i = 0; i < arguments.length; i++) 
      if(arguments[i]<min) min =arguments[i];     
    console.log(min);
}
findMin(121782616,251,21);