function solve(input){
    let principalSum=Number(input[0]);
    let interestRateInPercent=Number(input[1])/100;
    let compoundingPeriodInMonths=12/Number(input[2]);
    let totalTimespan=Number(input[3]);

    console.log((principalSum*Math.pow((1+interestRateInPercent/compoundingPeriodInMonths),compoundingPeriodInMonths*totalTimespan)).toFixed(2));
}
