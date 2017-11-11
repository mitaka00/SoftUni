function productOf3Numbers(numbers){
    let num1=Number(numbers[0]);
    let num2=Number(numbers[1]);
    let num3=Number(numbers[2]);

    let negativeNums=0;

    if(num1==0 || num2==0 || num3==0){
        return "Positive";
    }
    else {
        if (num1 < 0) {
            negativeNums++;
        }
        if (num2 < 0) {
            negativeNums++;
        }
        if (num3 < 0) {
            negativeNums++;
        }

        if (negativeNums==2 || negativeNums==0) {
            return "Positive";
        }
        else {
            return "Negative"
        }
    }
}
