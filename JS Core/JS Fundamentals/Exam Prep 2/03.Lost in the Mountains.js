function solve(separator,text){
    let msgPattern=new RegExp(separator + '\.*' + separator);
    let attrPattern=/(north|east)\D*(\d{2})[^,]*(,)\D*(\d{6})/gi;

    let msgMatch=msgPattern.exec(text);

    let latitude='';
    let longitude='';
    let match=attrPattern.exec(text);
    while(match){
        if(match[1].toLowerCase()==='north'){
            latitude=match[2]+ '.' + match[4] + ` N`
        } else {
            longitude=match[2]+'.' + match[4] + ' E';
        }
        match=attrPattern.exec(text);
    }

    console.log(latitude);
    console.log(longitude);
    console.log(`Message: ${msgMatch[0].split(separator)[1]}`)
}
solve(
'<>',
'o u%&lu43t&^ftgv><nortH4276hrv756dcc,  jytbu64574655k <>ThE sanDwich is iN the refrIGErator<>yl i75evEAsTer23,lfwe 987324tlblu6b'
)