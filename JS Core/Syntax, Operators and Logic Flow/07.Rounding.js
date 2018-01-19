function solve(input){
    let number=Number(input[0]);
    let precision=Number(input[1]);

    if(precision>15){
        precision=15;
    }

    number=number.toFixed(precision);
    number=parseFloat(number);

    console.log(number)

}