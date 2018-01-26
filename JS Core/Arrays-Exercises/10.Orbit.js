function solve(arr) {
    let [rows, cols, targetRow, targetCol] = arr;
    let matrix = fillZeros(rows, cols);

    let num = 1;
    matrix[targetRow][targetCol] = num;
    let waveCount = 1;

    while (!isFilled(matrix)) {
        num++;

        let topX = Math.max(0, targetRow - waveCount);
        let topY = Math.max(0, targetCol - waveCount);
        let bottomX = Math.min(matrix.length - 1, targetRow + waveCount);
        let bottomY = Math.min(matrix[0].length - 1, targetCol + waveCount);

        for (let row = topX; row <= bottomX; row++) {
            for (let col = topY; col <= bottomY; col++) {
                if (matrix[row][col] === 0) {
                    matrix[row][col] = num
                }
            }
        }
        waveCount++
    }

    printMatrix(matrix);

    function isFilled(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (matrix[row][col] === 0) {
                    return false
                }
            }
        }

        return true
    }
    function fillZeros(rows, cols) {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix.push('0'.repeat(cols).split('').map(Number))
        }
        return matrix
    }
    function printMatrix(matrix) {
        console.log(matrix.map(el => el.join(" ")).join('\n'))
    }
}
solve([4, 4, 0, 0]);