function solve(input) {
    let html='<table>\n';
    html+=' <tr><th>name</th><th>score</th></tr>\n';

    let arr=JSON.parse(input);
    for (let obj of arr) {
        html+=` <tr><td>${htmlEscape(obj.name)}</td><td>${obj.score}</td></tr>\n`;
    }

    html+='</table>';
    console.log(html);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }

}
solve('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]')