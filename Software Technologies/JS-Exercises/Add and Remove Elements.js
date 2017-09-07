function solve(input) {
    let arr=[];
    for(let i=0;i<input.length;i++){
        input[i]=input[i].split(" ");
        let command=input[i][0];
        let number=Number(input[i][1]);

        if(command=="add"){
            arr.push(number);
        }
        else{
            if(number>=arr.length){
                continue;
            }
            else{
                arr.splice(number,1);
            }
        }
    }

    console.log(arr.join("\n"));
}