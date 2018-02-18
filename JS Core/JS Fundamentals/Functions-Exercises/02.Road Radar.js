function solve(input){
    let limits={
        motorway:130,
        interstate:90,
        city:50,
        residential:20
    };

    let speed=Number(input[0]);
    let place=input[1];

    let sum=speed-limits[place];

    if(sum>0 && sum<=20){
        console.log('speeding')
    } else if(sum>=20 && sum<=40){
        console.log('excessive speeding')
    } else if(sum>40){
        console.log('reckless driving')
    }
}