function lastIndexOf(arry,val){
  let indx = -1;
  for (let i = 0 ; i < arry.length ; i++){
    if (arry[i ]=== val){
      indx = i;
    }
  }
  return indx
}

	
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1))
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2))
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3))
console.log(lastIndexOf([ 5, 5, 5 ], 5))