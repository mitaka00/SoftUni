function solve(n) {
    let color;
    let list='<div class="chessboard">\n';
    for(let row=1;row<=n;row++){
        list+='<div>\n';

        for(let col=1;col<=n;col++){
            if(row%2===col%2){
                color='black'
            }
            else{
                color='white'
            }

            list+=`<span class="${color}"></span>\n`
        }

        list+='</div>\n';
    }
    list+='</div>';

    console.log(list)
}
solve(3);