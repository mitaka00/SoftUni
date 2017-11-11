function KVP(numbers) {
    let finalKey=numbers[numbers.length-1];
    let container={};

    for(let i=0;i<numbers.length-1;i++){
        let currentArr=numbers[i].split(" ");

        let key=currentArr[0];
        let value=currentArr[1];

        if(container[key]){
            container[key].push(value);
        }
        else{
            container[key]=[value];
        }
    }
    //console.log(container[finalKey] ? container[finalKey].join("\n") : "None");

    if(container[finalKey]==undefined){
        console.log("None");
    }
    else {
        for (let element of container[finalKey]) {
            console.log(element);
        }
    }
}
