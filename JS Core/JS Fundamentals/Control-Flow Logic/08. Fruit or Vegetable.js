function solve(food) {
    let fruits=['banana','apple','kiwi','cherry','lemon','grapes','peach'];
    let vegetables=['tomato','cucumber','pepper','onion','garlic','parsley'];

    for(let fruit of fruits){
        if(food===fruit){
            console.log('fruit');

            return;
        }
    }

    for(let vegetable of vegetables){
        if(food===vegetable){
            console.log('vegetable');

            return;
        }
    }

    console.log('unknown');
}

solve('banana')