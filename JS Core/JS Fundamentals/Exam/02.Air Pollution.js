function solve(array,forces) {
    let pollutedAreas=[];
    let newArray=[];

    for (let row = 0; row < 5; row++) {
        let tokens=array[row].split(' ').map(Number);
        newArray[row]=[];

        for (let col = 0; col < 5; col++) {
            newArray[row].push(tokens[col])
        }
    }
    
    for (let line of forces) {
        let tokens=line.split(' ');
        let force=tokens[0];
        let value=Number(tokens[1]);


        if(force==='breeze'){
            for (let col = 0; col < 5; col++) {
                if(newArray[value][col]>15) {
                    newArray[value][col] = newArray[value][col] - 15;
                } else {
                    newArray[value][col]=0;
                }
            }
        }

        if(force==='gale'){
            for (let row = 0; row < 5; row++) {
                if(newArray[row][value]>=20) {
                    newArray[row][value] -= 20;
                } else{
                    newArray[row][value]=0;
                }
            }
        }

        if(force==='smog'){
            for (let row = 0; row < 5; row++) {
                for (let col = 0; col < 5; col++) {
                    newArray[row][col]+=value;
                }
            }
        }

    }

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            if(newArray[row][col]>=50){
                pollutedAreas.push(`[${row}-${col}]`)
            }
        }
    }


    if(pollutedAreas.length===0){
        console.log(`No polluted areas`)
    } else{
        console.log(`Polluted areas: ${pollutedAreas.join(', ')}`)
    }
}
solve(
    [
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]
)