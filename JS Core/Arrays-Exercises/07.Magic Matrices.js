function solve(input) {
    let sum=input[0].reduce((a,b)=>a+b,0);

    for (let row = 0; row < input.length; row++) {
        let colSum=0;

        if(sum!==input[row].reduce((a,b)=>a+b,0)){
            console.log('false');
            return;
        }
        for (let col = 0; col < input.length; col++) {
            colSum+=input[col][row];
        }
        if(sum!==colSum){
            console.log('false');
            return
        }
    }

    console.log('true')
}
solve([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]]
);