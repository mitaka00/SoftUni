function solve(input){
    let result=input.toString();
    let sum=0;
    let count=0;

    while(input>=1){
        sum+=input%10;
        count++;
        input=Math.floor(input/10);
    }


    while(sum/count<=5){
        sum+=9;
        count++;
        result+='9';
    }

    console.log(result)
}
solve(101);