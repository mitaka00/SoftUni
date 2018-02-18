function solve(input) {
    let pattern=/^[a-z[A-Z0-9]+@[a-z]+.[a-z]+$/gi;

    if(pattern.test(input)){
        console.log('Valid')
    } else{
        console.log('Invalid')
    }
}