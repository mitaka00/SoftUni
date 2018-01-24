function solve(input){
    let x1=input[0];
    let y1=input[1];
    let x2=input[2];
    let y2=input[3];

    let distanceBtwPoints=Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2));
    let distanceBtwStart1=Math.sqrt(Math.pow(x1,2) + Math.pow(y1,2));
    let distanceBtwStart2=Math.sqrt(Math.pow(x2,2) + Math.pow(y2,2));

    printResult(distanceBtwStart1,x1,y1,0,0);
    printResult(distanceBtwStart2,x2,y2,0,0);
    printResult(distanceBtwPoints,x1,y1,x2,y2);

    function printResult(distance,x1,y1,x2,y2) {
        if(distance===Math.round(distance)){
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
        } else{
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
        }
    }
}