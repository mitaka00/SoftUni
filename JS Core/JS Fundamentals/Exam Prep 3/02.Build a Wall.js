function solve(input) {
    let price=0;
    let totalCubicYards=[];
    input=input.map(Number)

    while(true) {
        let sum=0;

        for (let index in input) {
            if(input[index] <30){
                sum+=195;
            }

            input[index]+=1
        }

        if(sum===0){
            break;
        }

        totalCubicYards.push(sum)
    }

    let totalSum=0;
    for (let el of totalCubicYards) {
        totalSum+=el;
    }

    console.log(totalCubicYards.join(', '))
    console.log(totalSum*1900 + ' pesos')
}
solve([17, 22, 17, 19, 17])