function solve(text,word) {
    let pattern=new RegExp('\\b' +word + '\\b',"gi");
    let count=0;

    let match=pattern.exec(text)
    while(match){
        count++;

        match=pattern.exec(text)
    }

    console.log(count)
}
solve('How do you plan on achieving that? How? How can you even think of that?',
    'how')