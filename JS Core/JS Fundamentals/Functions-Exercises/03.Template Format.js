function solve(input){
    let text='<?xml version="1.0" encoding="UTF-8"?>\n';
    text+='<quiz>\n';

    for(let i=0;i<input.length;i+=2){
        text+=`<question>\n${input[i]}\n</question>\n`;
        text+=`<answer>\n${input[i+1]}\n</answer>\n`
    }

    text+='</quiz>'

    console.log(text)
}