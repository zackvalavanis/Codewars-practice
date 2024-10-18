var data = [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]

function openOrSenior(data){
  output = [];
  i2 = 0;
  for(let i = 0; i < data.length; i++) { 
      var pairs = data[i]
      var age = pairs[0]
      var handicap = pairs[1]
      if (age >= 55 && handicap > 7 ){ 
        output.push('Senior');
      } else { 
        output.push('Open');
      }
    }
  return output
}

console.log(openOrSenior(data))



