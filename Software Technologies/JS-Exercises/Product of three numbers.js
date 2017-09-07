function solve(input){
    let firstNum=Number(input[0]);
    let secondNum=Number(input[1]);
    let thirdNum=Number(input[2]);

    let sum=firstNum*secondNum*thirdNum;

    if(sum>=0){
        console.log("Positive")
    }
    else{
        console.log("Negative")
    }
}
