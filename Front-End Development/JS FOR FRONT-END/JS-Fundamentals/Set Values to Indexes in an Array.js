function SetValuestoIndexes(numbers) {
    let length=Number(numbers[0]);
    let arr=Array(length).fill(0);

    for(let i=1;i<numbers.length;i++){
        let currentArray=numbers[i].split(' ');
        let index=Number(currentArray[0]);
        let value=Number(currentArray[2]);

        arr[index]=value;
    }

    //console.log(arr.join('\n'))

    for(let i=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}

