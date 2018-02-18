function solve(fooods,commands){
    let meals=[];
    let eatenCount=0;

    for (let meal of fooods) {
        meals.push(meal)
    }

    for (let command of commands) {
        if(command==='Serve' && meals.length>0){
            console.log(`${meals[meals.length-1]} served!`);
            meals.pop();
        }

        if(command==='Eat' && meals.length>0){
            console.log(`${meals[0]} eaten`);
            meals.shift();
            eatenCount++;
        }

        if(/Add [a-z]+/.test(command)){
            let tokens=command.split(' ');
            meals.unshift(tokens[1])
        }

        if(/Consume [0-9]+ [0-9]+/.test(command)){
            let tokens=command.split(' ');
            if(Number(tokens[1])<meals.length && Number(tokens[2])+Number(tokens[1])<meals.length) {
                console.log('Burp!');
                meals.splice(Number(tokens[1]), Number(tokens[2]) - Number(tokens[1]) + 1)
                eatenCount += Number(tokens[2]) - Number(tokens[1]) + 1;
            }
        }

        if(/Shift [0-9]+ [0-9]+/.test(command) && meals.length>2){
            let tokens=command.split(' ');
            let firstMeal=meals[tokens[1]];
            let secondMeal=meals[tokens[2]];

            if(Number(tokens[1])<meals.length && Number(tokens[2])<meals.length) {
                meals[tokens[1]] = secondMeal;
                meals[tokens[2]]=firstMeal;
            }
        }

        if(command==='End'){
            if(meals.length===0){
                console.log('The food is gone')
            } else{
                console.log(`Meals left: ${meals.join(', ')}`)
            }

            console.log(`Meals eaten: ${eatenCount}`)
            return;
        }
    }
}
solve(['bacon', 'veggies', 'chicken'],
['Consume 2 9',
'Eat',
'End'])