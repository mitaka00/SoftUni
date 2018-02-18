function solve(n) {
    let result='';
    let firstSpecialRow=`+${'-'.repeat((2*n-4)/2)}+${'-'.repeat((2*n-4)/2)}+\n`;
    let secondSpecialRow=`|${' '.repeat((2*n-4)/2)}|${' '.repeat((2*n-4)/2)}|\n`;
    if(n===2){
        console.log('+++')
    }else {
        if (n % 2 === 0) {
            result += firstSpecialRow;
            for (let i = 0; i < (n - 4) / 2; i++) {
                result += secondSpecialRow;
            }
            result += firstSpecialRow;
            for (let i = 0; i < (n - 4) / 2; i++) {
                result += secondSpecialRow;
            }
            result += firstSpecialRow
        }
        else {
            result += firstSpecialRow;
            for (let i = 0; i < (n - 3) / 2; i++) {
                result += secondSpecialRow;
            }
            result += firstSpecialRow;
            for (let i = 0; i < (n - 3) / 2; i++) {
                result += secondSpecialRow;
            }
            result += firstSpecialRow
        }
        console.log(result)
    }
}
solve(50)