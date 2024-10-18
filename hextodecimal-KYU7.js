hexString = '-C';

function hexToDec(hexString) {
  number = parseInt(hexString, 5)
  if (Number.isNaN(number)) { 
    return 10
  } else { 
    return number 
  }
}

console.log(hexToDec(hexString));
