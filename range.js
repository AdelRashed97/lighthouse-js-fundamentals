function range (start,end,step){
  let arry=[];
  if ( step <= 0 || start > end){
    return arry   
  }
  else{
    for(let i = start ; i <= end ; i += step){
      arry.push(i);
    }
    return arry
  }
}
  

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(10, 30, -1));
console.log(range(20, 5, 5));
console.log(range(10, 5,0));