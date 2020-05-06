
for (var x = 100; x <= 200; x++) {
    let div3 = x % 3 === 0; // check if number is a multiple of 3
    let div4 = x % 4 === 0 ; // check if number is a multiple of 4
    
    if ( div3 && div4){
         // print if number is multiple of 3 and 4
        console.log("LoopyLighthouse");
    }
    
    else if ( div3 ){
         // print if number is  only multiple of 3
        console.log("Loopy");
    }
    
    else if ( div4){
         // print if number is  only multiple of 4
        console.log("Lighthouse");
    }
    
    else {
        
        console.log(x); // print  number if neither multiple of 3 nor 4
    }
    
    
}