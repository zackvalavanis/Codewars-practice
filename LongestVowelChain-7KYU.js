var vowel = ['a', 'e', 'i', 'o', 'u'];
var s = 'raabaanso'

function solve(s){
  let longest = '';
  let current = '';

  for (let char of s){ 
    if(vowel.includes(char)) { 
      current += char
        if (current.length > longest.length){ 
          longest = current;
        }
      } else { 
      current = '';
    }
  }
  return longest;
}
console.log(solve(s));