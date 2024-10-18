// m = 2;
// n = 4;

// function generatePairs(m, n) {
//   const result = [];
//   for(let a = m; a <= n; a++) { 
//     for (let b = a; b <= n; b++) { 
//       result.push([a,b]);
//     }
//   }
//   return result
// }








m = 2;
n = 4;

function generatePairs(m, n) {
  const result = [];
  for( a = m; a <= n; a++){ 
    for( b = a; b <= n; b++){
      result.push([a,b])
    }
  }
  return result   
  }




  console.log(generatePairs(m,n))