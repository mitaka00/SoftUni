function kepler (m, e) {
    solve(m);

    function solve (approx) {
        let next = approx - ((approx - (e * Math.sin(approx)) - m) / (1 - (e * Math.cos(approx))))

        if (Math.abs(next - approx) <= 1 / (10 ** 9)) {
            console.log(+next.toFixed(9))
            return
        }

        solve(next)
    }
}