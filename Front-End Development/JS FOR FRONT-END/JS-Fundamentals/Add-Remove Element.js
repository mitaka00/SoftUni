function AddRemoveElement(numbers) {
    let arr=[];

    for(let i=0;i<numbers.length;i++){
        let currentArray=numbers[i].split(" ");

        let command=currentArray[0];
        let value=Number(currentArray[1]);

        if(command=="add"){
            arr.push(value);
        }
        else{
            arr.splice(value,1);
        }
    }

    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

