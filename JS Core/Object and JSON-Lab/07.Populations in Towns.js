function solve(input) {
    let towns={};

    for (let townInfo of input) {
        let tokens=townInfo.split(' <-> ');
        let town=tokens[0];
        let population=Number(tokens[1]);

        if(!towns.hasOwnProperty(town)){
            towns[town]=0;
        }

        towns[town]+=population;
    }

    for (let town in towns) {
        console.log(`${town} : ${towns[town]}`)
    }
}
solve(['Sofia <-> 1200000',
        'Montana <-> 20000',
        'New York <-> 10000000',
        'Washington <-> 2345000',
        'Las Vegas <-> 1000000'
])