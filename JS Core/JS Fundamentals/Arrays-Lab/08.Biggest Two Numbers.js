function solve(input) {
    let max=Number.NEGATIVE_INFINITY;
    for (let row = 0; row < input.length; row++) {
        for (let col = 0; col < input[row].length; col++) {
            if(max<input[row][col]){
                max=input[row][col];
            }
        }
    }

    console.log(max)
}