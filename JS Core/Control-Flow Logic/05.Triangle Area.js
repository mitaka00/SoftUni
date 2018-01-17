function solve(num1,num2,num3) {
    let p=(num1+num2+num3)/2;
    let area=Math.sqrt(p*(p-num1)*(p-num2)*(p-num3));

    console.log(area);
}
solve(2,3.5,4);