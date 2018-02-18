function solve(input) {
    let data=new Set();

    for (let line of input) {
        data.add(line);
    }

    let sortedUsernames=Array.from(data).sort((x,y) => sortingUsernames(x,y));

    console.log(sortedUsernames.join('\n'));

    function sortingUsernames(firstIndex,secondIndex) {
        if(firstIndex.length>secondIndex.length) return 1;
        if(firstIndex.length<secondIndex.length) return -1;

        return firstIndex.toLowerCase().localeCompare(secondIndex.toLowerCase())
    }
}
solve([
    'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston'

])