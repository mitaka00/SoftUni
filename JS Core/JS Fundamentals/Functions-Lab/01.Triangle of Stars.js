function solve(num){
    for (let i = 1; i <= num; i++) {
        print(i)
    }
    for (let i = num-1; i >=1; i--) {
        print(i)
    }
    function print(i){
        console.log('*'.repeat(i))
    }
}
solve(5)