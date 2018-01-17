function solve(radius,height) {
    let volume=1/3*Math.PI*radius*radius*height;
    let area=Math.PI*radius*(radius+Math.sqrt(radius*radius+height*height));

    console.log('volume = '+volume);
    console.log('area = '+area);
}
solve(3,5)