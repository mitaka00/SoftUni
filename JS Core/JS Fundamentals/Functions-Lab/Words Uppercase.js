function solve(input){
    let arr=input.toUpperCase().split(/\W+/).filter(a=>a!='');

    console.log(arr.join(', '));
}
solve('Hi, how are you?');