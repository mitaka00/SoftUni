function solve(input) {
    let pattern=/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g;

    input=input.replace(pattern,function (match,group1,group2) {
        return Number(group1)*Number(group2);
    });

    console.log(input);
}
solve('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).')