function findMin(...arguments) {
    let min=Infinity;
    for (let i = 0; i < arguments.length; i++) 
      if(arguments[i]<min) min =arguments[i];     
    console.log(min);
}
findMin(12,12342,21,5,123,435,6,2);

