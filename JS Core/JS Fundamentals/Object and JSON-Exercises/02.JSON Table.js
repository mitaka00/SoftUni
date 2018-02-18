function solve(input) {
    let html='<table>\n';

    for (let line of input) {
        let obj=JSON.parse(line);
        html+='    <tr>\n';

        for (let val in obj) {
            html+=`        <td>${htmlEscape(obj[val])}</td>\n`
        }

        html+='    <tr>\n'
    }

    html+='</table>';

    console.log(html)

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        let pattern=/[\"&'<>]/g;
        if(pattern.exec(text)===null){
            return text;
        } else{
            return text.replace(/[\"&'<>]/g, ch => map[ch]);
        }
    }
}
solve([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
])