function PrintLines(numbers) {
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]=="Stop"){
            return;
        }
        console.log(numbers[i]);
    }
}

