function solve(input) {
    let biggestNumbers=[];

    if(input.length===0){
        console.log('0');
        return;
    }
    for (let i = 0; i < input.length; i++) {
        let num=Number(input[i]);


        if(num>=0 && num<=9){
            let product=1;
            for (let j = i+1; j < Math.min(input.length,i+1+num); j++) {
                product*=Number(input[j]);
            }

            biggestNumbers.push(product)
        }


    }

    if(biggestNumbers.length===0){
        console.log('0')
    } else {
        console.log(biggestNumbers.sort((x,y)=>y-x)[0])
    }
}
solve([
    '18',
    '42',
    '19',
    '36',
    '1',
    '-297',
    '38',
    '100',
    '9',
    '-249',
    '-170',
    '-18',
    '-208',
    '-11',
    '-87',
    '-90',
    '-286',
    '-27'
])