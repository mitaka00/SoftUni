function solve(input) {
    let x1=input[0];
    let y1=input[1];
    let x2=input[2];
    let y2=input[3];
    let x3=input[4];
    let y3=input[5];

    let BtwOneAndTwo=findDistance(x1,y1,x2,y2);
    let BtwOneAndThree=findDistance(x1,y1,x3,y3);
    let BtwTwoAndThree=findDistance(x2,y2,x3,y3);

    if(BtwOneAndTwo<=BtwOneAndThree && BtwTwoAndThree<=BtwOneAndThree){
        console.log(`1->2->3: ${BtwTwoAndThree+BtwOneAndTwo}`)
    } else if(BtwOneAndThree<=BtwOneAndTwo && BtwTwoAndThree<=BtwOneAndTwo){
        console.log(`1->3->2: ${BtwOneAndThree+BtwTwoAndThree}`)
    } else{
        console.log(`2->1->3: ${BtwOneAndTwo+BtwOneAndThree}`)
    }

    function findDistance(x1,y1,x2,y2) {
        return Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y1-y2,2));
    }
}
solve([0, 0, 2, 0, 4, 0])