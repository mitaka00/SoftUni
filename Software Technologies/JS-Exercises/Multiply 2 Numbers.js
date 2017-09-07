function solve(input) {
    let firstNum=Number(input[0]);
    let secondNum=Number(input[1]);

    if(firstNum>secondNum){
        console.log(firstNum/secondNum);
    }
    else{
        console.log(firstNum*secondNum);
    }
}
