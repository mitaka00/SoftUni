function solve(input) {
    let arr=[];

    for (let el in input) {
        if(el%2===1){
            arr.push(input[el]*2);
        }
    }

    console.log(arr.reverse().join(' '))
}