let fibo=(function fib() {
    let num1=0;
    let num2=1;

    return function nextNum() {
        let num3=num1;
        num1+=num2;

        num2=num3;

        return num1;
    }
})();

console.log(fibo());
console.log(fibo());
console.log(fibo());
console.log(fibo());