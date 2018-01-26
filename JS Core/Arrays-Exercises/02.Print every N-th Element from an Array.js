function solve(input) {
    let step=Number(input.pop());

    for (let i = 0; i < input.length; i+=step) {
        console.log(input[i])
    }
}