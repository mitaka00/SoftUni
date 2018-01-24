'use strict';
function solve(n,k) {
    let arr=[];

    arr[0]=1;
    for (let i = 1; i < n; i++) {
        let sum=0;

        if(arr.length<k){
            for (let j = 0; j < arr.length; j++) {
                sum+=arr[j]
            }
        } else{
            for (let j = arr.length-1; j > arr.length-1-k; j--) {
                sum+=arr[j];
            }
        }

        arr[i]=sum;
    }

    console.log(arr.join(' '))
}
solve(6,3)