function solve(input){
    let names=[];
    let sum=0;

    for (let i = 0; i < input.length; i++) {
        if(i%2===0){
            names.push(input[i]);
        } else{
            sum+=Number(input[i])
        }
    }

    console.log(`You purchased ${names.join(', ')} for a total sum of ${sum}`);
}