function solve(input) {
    for (let element of input.sort((a,b)=>a.localeCompare(b)).sort((a,b)=>a.length-b.length)) {
        console.log(element)
    }
}