function solve(rows,cols) {
    let matrix = fillZeros(rows, cols)
    fillMatrix(matrix, 0, 0, 1)
    printMatrix(matrix)

    function fillMatrix(matrix, currentRow, currentCol, counter) {
        if (matrix[currentRow][currentCol] !== 0) {
            return matrix
        }

        // fill Top Row rightwards
        for (let col = currentCol; col < rows - currentRow; col++) {
            matrix[currentRow][col] = counter++
        }

        // fill Right colum downwards
        for (let row = 1 + currentRow; row < cols - currentCol; row++) {
            matrix[row][rows - 1 - currentRow] = counter++
        }

        // fill Bottom leftwards
        for (let col = cols - 2 - currentCol; col >= currentCol; col--) {
            matrix[rows - 1 - currentRow][col] = counter++
        }

        // fill Left column upwards
        for (let row = rows - 2 - currentRow; row > currentRow; row--) {
            matrix[row][currentCol] = counter++
        }

        fillMatrix(matrix, ++currentRow, ++currentCol, counter)
    }
    function printMatrix(matrix) {
        console.log(matrix.map(el => el.join(" ")).join('\n'))
    }
    function fillZeros(rows, cols) {
        let matrix = [];
        for (let i = 0; i < rows; i++) {
            matrix.push('0'.repeat(cols).split('').map(Number))
        }
        return matrix
    }
}

solve(5,5)