function solve(input) {
    let result = {};
    for (let string of input) {
        let arr = string.split(/\W+/g).filter(x => x);

        for (let word of arr) {
            if (!result.hasOwnProperty(word)) {
                result[word] = 0;
            }

            result[word]++;
        }
    }
    console.log(JSON.stringify(result))
}
solve(['JS devs use Node.js for server-side JS.-- JS for devs'])