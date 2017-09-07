function solve(input) {
    let dict={};

    for(let i=0;i<input.length-1;i++){
        let inputParts=input[i].split(" ");
        let key=inputParts[0];
        let value=inputParts[1];

        dict[key]=value;
    }

    let finalKey=input[input.length-1];

    console.log(dict[finalKey] || "None");
}