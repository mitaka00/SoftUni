function solve(matrix) {
    let firstSum=0;
    let secondSum=0;

    for (let row = 0; row < matrix.length; row++) {
        matrix[row]=matrix[row].split(' ').map(Number);
    }

    for (let i = 0; i < matrix.length; i++) {
        firstSum+=matrix[i][i];
    }
    for (let i = 0; i < matrix.length; i++) {
        secondSum+=matrix[i][matrix.length-1-i];
    }


    if(firstSum===secondSum){
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(row!==col && (col!==matrix[row].length-1-row)){
                    matrix[row][col]=secondSum
                }
            }
        }


        printElements(matrix)
    } else{
        printElements(matrix)
    }

    function printElements(matrix) {
        for (let row of matrix) {
            console.log(row.join(' '))
        }
    }
}
solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)