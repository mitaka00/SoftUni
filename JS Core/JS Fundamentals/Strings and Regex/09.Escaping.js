function htmlEscape(input) {
    let result='<ul>\n';

    for (let str of input) {
        result+='<li>' + escaping(str) + '</li>\n';
    }

    result+='</ul>';
    console.log(result)
    function escaping(symbol) {
        return symbol.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}