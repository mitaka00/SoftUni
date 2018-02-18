function solve(num){
    for (let i = 1; i <= num; i++) {
        print(num)
    }
    function print(i){
        console.log('* '.repeat(i).trim())
    }
}
solve(5)