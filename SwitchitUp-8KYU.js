// var number = 1

// function switchItUp(number){
//   var strings = ['zero','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
//   return strings[number]
// }

// console.log(switchItUp(number));


// Switch Case implementation 

var number = 7

function switchItUp(number) { 
  switch (number) { 
    case 0: return 'Zero';
    case 1: return 'One';
    case 2: return 'Two';
    case 3: return 'Three';
    case 4: return 'Four';
    case 5: return 'Five';
    case 6: return 'Six';
    case 7: return 'Seven';
    case 8: return 'Nine';
  }
  return number
}


console.log(switchItUp(number));