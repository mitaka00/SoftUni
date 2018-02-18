function solve(input){
    function sum(input) {
        let sum=0;
        for (let i = 0; i < input.length; i++) {
            sum+=input[i];
        }

        console.log(sum)
    };
    function inverseSum(input) {
        let sum=0;
        for (let i = 0; i < input.length; i++) {
            sum+=1/input[i];
        }

        console.log(sum)
    };
    function concatenate(input) {
        let result='';
        for (let i = 0; i < input.length; i++) {
            result+=input[i];
        }

        console.log(result)
    };
    sum(input);
    inverseSum(input);
    concatenate(input);
}
solve([1, 2, 3]);