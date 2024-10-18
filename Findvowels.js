var vowel = ['a', 'e', 'i', 'o', 'u'];
var s = 'raindal'

function solve(s){
  var letters = s.split("");
  var array = []

  for ( var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    if(vowel.includes(letter)) { 
      array.push(letter);
    }
  }
  return array;
}

console.log(solve(s));