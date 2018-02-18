function solve(input) {
    let countRotations=Number(input.pop());

    for (let i = 1; i <= countRotations%input.length; i++) {
        let rotated=input.pop();
        input.unshift(rotated);
    }

    console.log(input.join(' '))
}
solve(['Banana','Orange','Coconut','Apple','15']);