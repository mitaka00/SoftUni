function solve(input) {
    let allDifferentArrays=new Set();

    for (let line of input) {
        let str=JSON.parse(line).map(Number).sort((x,y)=>y-x).join(', ');

        allDifferentArrays.add(str);
    }

    let result=Array.from(allDifferentArrays).sort((x,y)=>x.split(', ').length-y.split(', ').length);

    for (let str of result) {
        console.log(`[${str}]`)
    }

}
solve([
    '[7.14, 8, 8, 80.099]',
    '[7.339, 80.0990, 7.140000, 7.18]',
    '[8, 8, 7.14, 80.099]'
])