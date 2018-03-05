function solve(arr,startIndex,endIndex) {
    if(!Array.isArray(arr)){
        return NaN;
    }

    startIndex=Math.max(startIndex,0);
    endIndex=Math.min(arr.length-1,endIndex);

    let sum=0;

    for (let i = startIndex; i <= endIndex; i++) {
        sum+=Number(arr[i])
    }

    return sum;
}