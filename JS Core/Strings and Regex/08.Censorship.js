function solve(text,arr){
    for (let censor of arr) {
        let dashes='-'.repeat(censor.length);
        let regex=new RegExp(censor,'g');

        text=text.replace(regex,dashes)
    }

    console.log(text)
}
solve('roses are red, violets are blue', [', violets are', 'red'])