function solve(n) {
    let table='<table border="1">\n';

    for (let i = 0; i <=n; i++) {
        if(i===0){
            table+='<tr><th>x</th>';
        }
        else{
            table+=`<th>${i}</th>`;
        }
    }

    table+='</tr>\n';

    for (let row = 1; row <=n;row++) {
        table+=`<tr><th>${row}</th>`;

        for (let col = 1; col <=n; col++) {
            table+=`<td>${col*row}</td>`
        }

        table+=`</tr>\n`
    }

    table+='</table>';

    console.log(table)

}
solve(5);