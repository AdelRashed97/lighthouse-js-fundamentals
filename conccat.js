function concat (arry1,arry2){
  let arry = arry1;
  for (let i = 0; i < arry2.length ; i++){
   arry.push(arry2[i]); 
  }
  return arry;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ])) //"=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ])) //"=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ])),// "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], [])) //, "=?", [ 5, 10 ]);