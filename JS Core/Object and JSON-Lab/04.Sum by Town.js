function solve(input) {
    let dict={};

    for (let i = 0; i < input.length; i+=2) {
        if(!dict.hasOwnProperty(input[i])){
            dict[input[i]]=0;
        }

        dict[input[i]]+=Number(input[i+1])
    }

    console.log(JSON.stringify(dict))
}