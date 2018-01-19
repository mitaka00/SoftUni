function solve(grad) {
    let diffDeg = 400 / 360;
    let convertGradToDeg = Number(grad) / diffDeg;
    convertGradToDeg = convertGradToDeg % 360;

    if (convertGradToDeg < 0) {
        convertGradToDeg += 360;
    }
    console.log(convertGradToDeg)
}

solve(400)