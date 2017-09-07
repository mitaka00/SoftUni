function solve(input) {
    let arr=[];
    let count=Number(input[0]);

    for(let i=0;i<count;i++) {
      arr[i]=0;
    }

    for(let i=1;i<input.length;i++){
        let currentArray=input[i].split(" ");
        let index=Number(currentArray[0]);
        let value=Number(currentArray[2]);

        arr[index]=value;
    }

    console.log(arr.join('\n'))
}

