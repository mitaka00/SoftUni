function solve(text,ending) {
    if(ending===text.substring(text.length-ending.length,text.length)){
        console.log('true')
    } else{
        console.log('false')
    }
}
solve('This sentence ends with fun?',
    'fun?'
    );