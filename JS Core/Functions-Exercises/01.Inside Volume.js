function solve(input){
    for(let i=0;i<input.length;i+=3){
        let x=input[i];
        let y=input[i+1];
        let z=input[i+2];

        if(x>=10 && x<=50 && y>=20 && y<=80 && z>=15 && z<=50){
            console.log("inside")
        } else{
            console.log('outside')
        }
    }
}