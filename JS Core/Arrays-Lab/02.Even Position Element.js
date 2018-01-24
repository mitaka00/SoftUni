function solve(input) {
    let result=[];
    for (let i = 0; i < input.length; i++) {
        if(i%2===0){
            result.push(input[i]);
        }
    }

    console.log(result.join(' '))
}