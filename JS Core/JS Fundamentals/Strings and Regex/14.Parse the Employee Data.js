function solve(input) {
    let pattern=/^([A-Z][a-zA-Z]*) - ([1-9][0-9]*) - ([a-zA-Z0-9 -]+)$/;
    let result= [], match;
    for (let person of input) {
        let match=pattern.exec((person))
        if(match){
            let personInfo={
                'name':match[1],
                'salary':match[2],
                'position':match[3]
            };

            result.push(personInfo);
        }
    }

    for (let person of result) {
        console.log(`Name: ${person.name}`);
        console.log(`Position: ${person.position}`);
        console.log(`Salary: ${person.salary}`)
    }
}