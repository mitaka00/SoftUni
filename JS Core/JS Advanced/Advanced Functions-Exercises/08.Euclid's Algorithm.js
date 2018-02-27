function euclidsAlgorithm(a, b){
    return b === 0 ? a : euclidsAlgorithm(b, a%b);
}

console.log(euclidsAlgorithm(252, 105));