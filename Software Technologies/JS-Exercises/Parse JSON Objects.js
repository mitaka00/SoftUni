function solve(input) {
    let result=[];

    for(let person of input){
        person=JSON.parse(person);

        result.push(person)
    }

    for(let person of result){
        console.log(`Name: ${person.name}`);
        console.log(`Age: ${person.age}`);
        console.log(`Date: ${person.date}`);
    }
}
