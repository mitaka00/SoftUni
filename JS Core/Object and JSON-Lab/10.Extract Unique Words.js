function solve(input){
    let map=new Set();

    for (let sentence of input) {
        let words=sentence.toLowerCase().split(/\W+/g).filter(x=>x);

        for (let word of words) {
            map.add(word);
        }
    }

    console.log(Array.from(map).join(', '));
}