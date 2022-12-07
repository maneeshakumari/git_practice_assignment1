//prime number

//now code is correct
function checkPrime(num){
    for(let i=1;i<=num;i++){
        if(num%i){
            return true;
        }
    }return false;
}
checkPrime(13);