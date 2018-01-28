function solve(input) {
    let result=[];

    let startIndex=input.indexOf('(');
    while(startIndex!==-1){
        let endIndex=input.indexOf(')',startIndex);

        if(endIndex===-1){
            break;
        }

        result.push(input.substring(startIndex+1,endIndex))

        startIndex=input.indexOf('(',endIndex)
    }

    console.log(result.join(', '))
}