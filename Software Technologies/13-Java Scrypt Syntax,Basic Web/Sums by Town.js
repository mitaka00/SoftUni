function  sumsByTown(input) {
    let allTowns={};
    for(let json of input) {
        let obj=JSON.parse(json);
        if(!(obj.town in allTowns)){
            allTowns[obj.town]=Number(obj.income);
        }
        else {
            allTowns[obj.town]+=Number(obj.income);
        }
    }

    let towns=Object.keys(allTowns).sort();

    for(town of towns){
        console.log(`${town} -> ${allTowns[town]}`)
    }
}
