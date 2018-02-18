function solve(input) {
    let arr=[];
    let num=1;
    for (let i = 0; i < input.length; i++) {
        let command=input[i];

        if(command==='add'){
            arr.push(num)
        } else{
            arr.pop();
        }

        num++;
    }

    if(arr.length===0){
        console.log('Empty')
    } else {
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i])
        }
    }
}