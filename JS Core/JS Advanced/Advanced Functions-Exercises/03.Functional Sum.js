let solve=(function functionalSum() {
    let sum = 0;

    function add(num) {
        sum += num;
        return add;
    }

    add.toString = () => sum;
    return add;
})();
console.log(solve(1)(6)(-3).toString())