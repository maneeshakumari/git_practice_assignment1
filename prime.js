function checkprime(num){


//now code is correct
function checkPrime(num){
    let count=0;
    for(let i=1;i<=num;i++){
        if(num%i===0){
          count++;
        
        }
    }
    	   
  if(count==2){
    console.log("true");
  }else{
    console.log("false");
  }
}
checkPrime(13);

