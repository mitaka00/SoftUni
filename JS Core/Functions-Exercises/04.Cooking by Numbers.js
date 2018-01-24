function solve(input){
    let num=input[0];

    for(let i=1;i<input.length;i++){
        if(input[i]=='chop'){
            num/=2;
        } else if(input[i]=='dice'){
            num/=Math.sqrt(num,2);
        } else if(input[i]=='spice'){
            num+=1;
        } else if(input[i]=='bake'){
            num*=3;
        } else if(input[i]=='fillet'){
            num-=0.2*num;
        }

        console.log(num);
    }
}