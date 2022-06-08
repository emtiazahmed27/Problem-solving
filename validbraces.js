

// "(){}[]"   =>  True
// "([{}])"   =>  True
// "(}"       =>  False
// "[(])"     =>  False
// "[({})](]" =>  False
// Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.

function validBraces(braces) {
    let pattern = /\[\]|\(\)|\{\}/;
    while(pattern.test(braces)) {
      braces = braces.replace(pattern, '');
    }
    if (braces === '')  return true;
    else                return false;
  }
  console.log(validBraces('[({})](]'));
  console.log(validBraces("(({{[[]]}}))"));

  