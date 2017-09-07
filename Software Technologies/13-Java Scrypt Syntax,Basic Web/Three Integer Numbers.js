function threeIntNumbers([str]) {
    let nums=str.split(" ");
    let num1=Number(nums[0]);
    let num3=Number(nums[1]);
    let num2=Number(nums[2]);

    if(num1+num2===num3)
    {
        if(num1<num2)
        {
            console.log(num1 + " + "  + num2 + " = "  + num3);
        }
        else
        {
            console.log(num2 + " + "  + num1 + " = "  + num3);
        }
    }
    else if(num3+num2===num1)
    {
        if(num3<num2)
        {
            console.log(num3 + " + "  + num2 + " = "  + num1);
        }
        else
        {
            console.log(num2 + " + "  + num3 + " = "  + num1);
        }
    }
    else if(num1+num3===num2)
    {
        if(num1<num3)
        {
            console.log(num1 + " + "  + num3 + " = "  + num2);
        }
        else
        {
            console.log(num3 + " + "  + num1 + " = "  + num2);
        }
    }
    else
    {
        console.log("No");
    }
}
