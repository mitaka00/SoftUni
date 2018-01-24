function solve(input) {
    let k=input.shift();
    let startElements=input.slice(0,k);
    let lastElements=input.slice(input.length-k,input.length);

    console.log(startElements.join(' '));
    console.log(lastElements.join(' '));
}
solve([2,
    7, 8, 9]
)