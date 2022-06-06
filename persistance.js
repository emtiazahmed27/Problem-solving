
//  39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
//  999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
//  4 --> 0 (because 4 is already a one-digit number)

function persistence(num) {
    let count=0;
    if (num.toString().length === 1) {
        return 0;
      }
      var mult = 1;
      var splitStr = num.toString().split("");
      count++;
      for (var i = 0; i < splitStr.length; i++) {
        mult *= (splitStr[i]);
      }
      if(mult>10){
          persistence(mult);
      }
      return 1+persistence(mult);
}
console.log(persistence(999));
console.log(persistence(39));