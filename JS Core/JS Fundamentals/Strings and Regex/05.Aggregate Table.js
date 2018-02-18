function solve(input) {
    let cities=[];
    let sum=0;

    for (let i = 0; i < input.length; i++) {
        let tokens=input[i].split('|').filter(x=>x);

        let town=tokens[0].trim();
        let num=Number(tokens[1].trim());

        cities.push(town);
        sum+=num;
    }

    console.log(cities.join(', '));
    console.log(sum)
}