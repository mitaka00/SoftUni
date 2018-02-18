function solve(num) {
    if(num===1 || num===0 || num<0){
        console.log('false');
        return;
    }
    for(let i=2;i<=num/2;i++){
        if(num%i===0){
            console.log('false');
            return;
        }
    }

    console.log('true');
}
solve(5);