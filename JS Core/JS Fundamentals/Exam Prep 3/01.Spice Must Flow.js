function solve(input){
    let days=0;
    let extract=0;
    while (input>=100){
        days++;
        extract+=(input-26);
        input-=10;
    }

    if(extract>=26){
        extract-=26;
    }
    console.log(days)
    console.log(extract)
}
solve(111)