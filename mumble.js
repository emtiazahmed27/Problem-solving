// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
    var letters = s.split(''), words = [];
  
    for(var i = 0; i < letters.length; i++) {
      words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
  
    return words.join('-');
  }
  console.log(accum("abcd"));