// var lists = [
//   [7,1], [7,6,5,4,3,2], [3,3,4]
// ]

// function matryoshka(lists) {
//     return lists.map((list) => ({
//       max: Math.max(...list),
//       min: Math.min(...list),
//     }))
//     .sort((a, b) => a.min-b.min)
//     // console.log(matryoshka(lists);)
//     // .every(({min, max}, idx, array) => (
//     //   idx === 0 || (min > array[idx -1].min && max < array[idx -1].max)
//     // ));
// }


var lists = [
  [8,1], [7,6,5,4,3,2], [6,4]
]

function matryoshka(lists) { 
  return lists.map((list) => ({
    max: Math.max(...list), 
    min: Math.min(...list),
  }))
  .sort((a,b) => a.min - b.min)
  .every(({min, max}, idx, array) => ( 
    idx === 0 || (min > array[idx - 1].min && max < array[idx - 1].max)
  ))
}

console.log(matryoshka(lists))