function solve(input) {
    let html='<table>\n';

    let arr=JSON.parse(input);
    for (let obj of arr) {
        if(obj===arr[0]){
            html+=' <tr>'
            for (let key of Object.keys(obj)) {
                html+=`<th>${key}</th>`;
            }
            html+='</tr>\n'
        }

        html+=' <tr>';

        for (let value of Object.values(obj)) {
            html+=`<td>${htmlEscape(value)}</td>`;
        }

        html+='</tr>\n';
    }

    html+='</table>';
    console.log(html);

    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        let pattern=/[\"&'<>]/g
        if(pattern.exec(text)===null){
            return text;
        } else{
            return text.replace(/[\"&'<>]/g, ch => map[ch]);
        }
    }
}
solve(`[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},
{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]`
)