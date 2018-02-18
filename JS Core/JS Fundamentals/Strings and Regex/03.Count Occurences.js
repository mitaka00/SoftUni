function solve(specialWord,text) {
    let count=0;

    let index=text.indexOf(specialWord);
    while(index!==-1){
        count++;

        index=text.indexOf(specialWord,index+1)
    }

    console.log(count)
}
solve('the', 'The quick brown fox jumps over the lay dog.')