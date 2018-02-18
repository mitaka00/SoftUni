function solve(numbers) {
    let num1=numbers[0];
    let num2=numbers[1];
    let num3=numbers[2];

    if(num1>=num2 && num1>=num3){
        console.log(num1)
    }
    else {
        if (num2 >= num1 && num2 >= num3) {
            console.log(num2);
        }
        else {
            if (num3 >= num1 && num3 >= num2) {
                console.log(num3)
            }
        }
    }

}
solve([5, -2, 7]);