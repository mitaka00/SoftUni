function solve(input){
    let v1=Number(input[0]);
    let v2=Number(input[1]);
    let t=Number(input[2])/3600;

    console.log(Math.abs(v1*t - v2*t)*1000);
}