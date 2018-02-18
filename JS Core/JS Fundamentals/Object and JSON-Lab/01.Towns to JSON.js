function solve(input){
    let result=[];
    for (let i = 1; i < input.length; i++) {
        let tokens=input[i].split(/\s*\|\s*/).filter(x=>x);

        let name=tokens[0];
        let latitude=Number(tokens[1]);
        let longitude=Number(tokens[2]);

        let townInfo={
            Town:name,
            Latitude:latitude,
            Longitude:longitude
        };

        result.push(townInfo)
    }

    console.log(JSON.stringify(result))
}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
)