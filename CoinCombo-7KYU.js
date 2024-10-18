// var cents = 10

// function coinCombo (cents) {
//   var coins = [1, 5, 10, 25]
//   var result = [0, 0, 0, 0]

//   for( let i = coins.length; i >= 0 ; i--) { 
//     while (cents >= coins[i]) { 
//       result[i]++
//       cents-=coins[i]
//     }
//   }
// 	return result;
// }

// console.log(coinCombo(cents))


var cents = 100

function coinCombo (cents) {
  var coins = [1, 5, 10, 25]
  var result = [0, 0, 0, 0]
  for( let i = coins.length; i >= 0; i-- ) { 
    while (cents >= coins[i]){ 
      result[i]++
      cents -= coins[i]
    }
  }
  return result;
} 

console.log(coinCombo(cents))