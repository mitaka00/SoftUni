function solve(a,b,c) {
    let D=b*b-4*a*c;

    if(D<0){
        console.log('No')
    }
    else{
        let x1=(-b + Math.sqrt(D))/(2*a);
        let x2=(-b - Math.sqrt(D))/(2*a);

        if(x1===x2){
            console.log(x1)
        } else{
            if(x1>x2){
                console.log(x2);
                console.log(x1)
            } else{
                console.log(x1);
                console.log(x2)
            }
        }
    }
}