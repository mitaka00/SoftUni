function solve(input) {
    let n=Number(input.shift());
    let result='';

    let code=[];
    for (let i = 0; i < n; i++) {
        code.push(input[i].split(' ').map(Number))
    }

    let matrix=[];
    for (let i = n; i < input.length; i++) {
        matrix.push(input[i].split(' ').map(Number))
    }

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[0].length; col++) {
            let currentNum=matrix[row][col];
            let modifier=code[row%code.length][col%code[0].length];

            result+=String.fromCharCode(((currentNum+modifier)%27)+64)

        }
    }

    console.log(result.replace(/@/g,' '))
}
solve([
     '2',
        '59 36',
        '82 52',
        '4 18 25 19 8',
        '4 2 8 2 18',
        '23 14 22 0 22',
        '2 17 13 19 20',
        '0 9 0 22 22'

])