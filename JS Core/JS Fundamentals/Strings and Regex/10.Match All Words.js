function solve(input) {
    let result=input.split(/\W+/).filter(x=>x);

    console.log(result.join('|'))
}