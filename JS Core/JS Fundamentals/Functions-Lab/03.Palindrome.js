function solve(input){
    let reversed=findReversedWord(input);

    if(input===reversed){
        console.log('true')
    } else{
        console.log('false')
    }
    function findReversedWord(input){
        let reversed='';
        for (let i = input.length-1; i >= 0; i--) {
            reversed+=input[i];
        }

        return reversed;
    }
}
solve('racecar')