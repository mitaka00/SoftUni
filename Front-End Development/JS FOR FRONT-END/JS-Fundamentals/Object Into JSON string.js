function ParseJSONObjects(input){
    let obj={};

    for(let i=0;i<input.length;i++){
        let currentArr=input[i].split(' -> ');

        let key=currentArr[0];
        let value=isNaN(currentArr[1]) ? currentArr[1] : Number(currentArr[1]);

        obj[key]=value;
    }

    console.log(JSON.stringify(obj));
}
