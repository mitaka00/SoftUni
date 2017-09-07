function solve(input) {
    let obj={};

    input.map(a=>a.split(' -> ')).forEach(studentTokens=>{
        let property =studentTokens[0];
        let value=isNaN(studentTokens[1]) ? studentTokens[1] : Number(studentTokens[1]);

        obj[property]=value;
    })

    console.log(JSON.stringify(obj));
}
