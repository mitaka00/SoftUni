function solve(input){
    let heroes=[];

    for (let line of input) {
        let tokens=line.split(' / ');

        let name=tokens[0];
        let level=Number(tokens[1]);
        let items=[];
        if(tokens.length>2) {
            items = tokens[2].split(', ');
        }

        let heroesInfo={
            name:name,
            level:level,
            items:items
        };
        heroes.push(heroesInfo)
    }

    console.log(JSON.stringify(heroes))
}