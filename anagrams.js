
// Creeate a Function that returns Anagrams.
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

function anagrams(word, words) {
    var result = [];
    var test = word.split("").sort().join("");
    
    for (var i=0;i<words.length;i++){
      if(words[i].split("").sort().join("") == test) result.push(words[i]);
    }
    return result;
}
console.log(anagrams("abba",['aabb', 'abcd', 'bbaa', 'dada']));
console.log(anagrams("dabba",['aabb', 'abcd', 'bbaa', 'dada']));