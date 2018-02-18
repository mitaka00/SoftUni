function solve(input) {
    let numbers=[],match;
    let pattern=/\d+/g;

    for (let string of input) {
        while(match=pattern.exec(string)){
            numbers.push(match);
        }
    }

    console.log(numbers.join(' '))
}

solve(['The300',
    'What is that?',
        'I think it’s the 3rd movie.',
    'Lets watch it at 22:45'
])