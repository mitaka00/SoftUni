function LargestThreeNumbers(input) {
    input=input.map(Number).sort((a,b)=> b-a);

    let count=Math.min(3,input.length);

    for(let i=0;i<count;i++){
        console.log(input[i]);
    }
}
