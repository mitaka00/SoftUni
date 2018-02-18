function solve(text,begining) {
    if(begining===text.substr(0,begining.length)){
        console.log('true')
    } else{
        console.log('false')
    }
}
solve('Marketing Fundamentals, starting 19/10/2016',
'Marketing Fundamentals, sta'
)