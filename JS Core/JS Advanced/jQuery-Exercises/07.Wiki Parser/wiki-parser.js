function wikiParser(selector) {
    let text=$(selector).text();

    let formatted=text
        .replace(/'''([^='\[]+)'''/g,function (m,g) {
            return `<b>${g}</b>`
        })
        .replace(/''([^='\[]+)''/g,function (m,g) {
            return `<i>${g}</i>`
        })
        .replace(/===([^='\[]+)===/g,function (m,g) {
            return `<h3>${g}</h3>`
        })
        .replace(/==([^='\[]+)==/g,function (m,g) {
            return `<h2>${g}</h2>`
        })
        .replace(/=([^='\[]+)=/g,function (m,g) {
            return `<h1>${g}</h1>`
        })
        .replace(/\[\[([^='\[]+)\|([^='\[]+)\]\]/g,function (m,g1,g2) {
            return `<a href="/wiki/${g1}">${g2}</a>`
        })
        .replace(/\[\[([^='\[]+)\]\]/g,function (m,g) {
            return `<a href="/wiki/${g}">${g}</a>`
        });
    console.log(formatted);

    $(selector).html(formatted)
}
