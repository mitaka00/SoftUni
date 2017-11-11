function multiplyDevideNumber(nums) {
    let num1=Number(nums[0]);
    let num2=Number(nums[1]);

    if(num1<=num2) {
        return num1 * num2;
    }
    else
    {
     return num1/num2;
    }
}


