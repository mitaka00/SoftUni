function solve(input) {
    let firstDiagonal=0;
    let secondDiagonal=0;
    for (let row = 0; row < input.length; row++) {
        firstDiagonal+=input[row][row];
        secondDiagonal+=input[row][input.length-row-1]
    }

    console.log(firstDiagonal,secondDiagonal)
}