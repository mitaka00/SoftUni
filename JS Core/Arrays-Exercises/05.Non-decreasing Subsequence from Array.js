function solve(input) {
    let result=[];
    result[0]=input[0];
    for (let i = 1; i < input.length; i++) {
        if(result[result.length-1]<=input[i]){
            result.push(input[i])
        }
    }

    for (let element of result) {
        console.log(element)
    }
}