
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people
// that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like
function likes(names) {
    let n= names.length;
    if(n==0)
      return "no one likes this";
    else if(n==1)
      return names[0]+" likes this";
    else if(n==2)
      return names[0]+" and "+names[1]+" like this";
    else if(n==3)
      return names[0]+", "+names[1]+" and "+names[2]+" like this";
    else
      return names[0]+", "+names[1]+" and "+(n-2)+" others like this";
}

console.log(likes([]));                                  //no name given
console.log(likes(['Max', 'Jude', 'Dude', 'Kude']));    //more than 4 names are given
console.log(likes(['Max', 'Jude']));                    //2 names are given