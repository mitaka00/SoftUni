function solve(input){
    let numbers=[]
    for (let line of input) {
        if(typeof(line)==='number'){
            numbers.push(line)
        } else{
            if(numbers.length<2){
                console.log('Error: not enough operands!');
                return;
            }

            let firstNum=numbers.pop();
            let secondNum=numbers.pop();

            switch(line){
                case '+':numbers.push(firstNum+secondNum);
                    break;
                case '-':numbers.push(secondNum-firstNum);
                    break;
                case '*':numbers.push(firstNum*secondNum);
                    break;
                case '/':numbers.push(secondNum/firstNum);
                    break;
            }
        }
    }
    if(numbers.length!==1){
        console.log('Error: too many operands!')
    } else{
        console.log(numbers.pop())
    }
}
solve([
        5,
        '3',
        '4',
        '*',
        '-'
])