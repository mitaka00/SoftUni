function solve(input) {
    let html='<article>\n';
    let invalidMsgPattern=/^<message( [a-z]+="[a-zA-Z0-9\. ]+")+>([\w\W]+)<\/message>$/;

    if(!invalidMsgPattern.test(input)){
        console.log('Invalid message format')
        return;
    }

    let attPattern=/([a-z]+)="([a-zA-Z0-9\. ]+)"/g
    let attributes=new Map();
    let matchAttributes=attPattern.exec(input)
    while(matchAttributes){
        if(matchAttributes[1]==='to' || matchAttributes[1]==='from'){
            attributes.set(matchAttributes[1],matchAttributes[2])
        }

        matchAttributes=attPattern.exec(input)
    }

    if(!attributes.has('to') || !attributes.has('from')){
        console.log('Missing attributes');
        return
    }

    html+=`    <div>From: <span class="sender">${attributes.get('from')}</span></div>\n`;
    html+=`    <div>To: <span class="recipient">${attributes.get('to')}</span></div>\n`

    let msg=invalidMsgPattern.exec(input)[2];
    let msgLines=msg.split('\n');

    html+='  <div>\n';
    for (let line of msgLines) {
        html+=`    <p>${line}</p>\n`
    }

    html+='  </div>\n';
    html+='</article>'

    console.log(html)
}
solve('<message to="Bob" from="Alice" timestamp="1497254092">Hey man, what\'s up?</message>')