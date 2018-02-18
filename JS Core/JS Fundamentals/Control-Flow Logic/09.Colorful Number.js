function solve(n) {
    let list='<ul>\n';
    for(let i=1;i<=n;i++){
        let color='green';
        if(i%2===0){
            color='blue';
        }

        list+=`<li><span style="color: ${color}">${i}</span></li>\n`;
    }
    list+='</ul>';

    console.log(list)
}
solve(10);