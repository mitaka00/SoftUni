function solve(input) {
    let arr=input.split(' ');
    let result='';
    for (let word of arr) {
        for (let i = 0; i < word.length; i++) {
            if(i===0){
                result+=word[i].toUpperCase();
            } else{
                result+=word[i].toLowerCase();
            }
        }

        result+=' '
    }

    console.log(result)
}
solve('Was that Easy? tRY thIs onE for SiZe!')