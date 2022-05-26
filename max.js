
//Function Shows max number of Your Input
function findMax(...arguments) {
  let max=-Infinity;
  for (let i = 0; i < arguments.length; i++) 
    if (arguments[i] > max) max = arguments[i];
 console.log(max);
}
findMax(121782616,251,21);


