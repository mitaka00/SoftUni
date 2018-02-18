function solve(input) {
    let result = new Map();
    for (let string of input) {
        let arr = string.split(/\W+/gi).filter(x => x);

        for (let word of arr) {
            word=word.toLowerCase();
            if (!result.has(word)) {
                result.set(word,0);
            }

            result.set(word,result.get(word)+1)
        }
    }

    let sortedKeys=Array.from(result.keys()).sort();
    for (let key of sortedKeys) {
        console.log(`'${key}' -> ${result.get(key)} times`)
    }
}
solve(['Far too slow, you\'re far too slow.'])