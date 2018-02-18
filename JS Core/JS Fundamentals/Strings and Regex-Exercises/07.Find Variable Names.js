function solve(input) {
    let pattern=/\b_([a-zA-Z0-9]+)\b/g;
    let result=[],match;

    while(match=pattern.exec(input)){
        result.push(match[1]);
    }

    console.log(result.join(','))
}
solve('Calculate the _area of the _perfectRectangle object.')