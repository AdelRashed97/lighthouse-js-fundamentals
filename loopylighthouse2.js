function  loopyLighthouse(range , multiples , words){
  
  if (range[0] <= range[1]) {
    for (let i = range[0] ; i <= range[1] ; i++){
      let divx = i % multiples[0] === 0;
      let divy = i % multiples[1] === 0;

      if ( divx && divy){
        // print if number is multiple of 3 and 4
        console.log(words[0] + words[1]);
      }
    
      else if ( divx ){
         
        console.log(words[0]);
      }
    
      else if ( divy){
         
        console.log(words[1]);
      }
    
      else {
        
        console.log(i); // print  number if neither multiple of 3 nor 4
      }
    
        
    }
    
  
  }
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);