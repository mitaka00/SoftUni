function KVP(numbers) {
   let finalKey=numbers[numbers.length-1];
   let container={};

    for(let i=0;i<numbers.length-1;i++){
       let currentArr=numbers[i].split(" ");

       let key=currentArr[0];
       let value=currentArr[1];

       container[key]=value;
    }

    //console.log(container[finalKey] || "None");

    if(container[finalKey]==undefined){
        console.log("None");
    }
    else{
        console.log(container[finalKey]);
    }
}
