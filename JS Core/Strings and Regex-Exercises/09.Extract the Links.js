function solve(input) {
    let pattern=/www\.[a-zA-Z0-9-]+(\.[a-z]+)+/g;

    let result=[],match;

    for (let string of input) {
        while(match=pattern.exec(string)){
            result.push(match[0])
        }
    }

    console.log(result.join('\n'))
}
solve([
    'Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:',
    'Internet - www.internet.com',
'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko'
])