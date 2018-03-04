function solve(carRequirements) {
    if(carRequirements.power<=90){
        Reflect.deleteProperty(carRequirements,'power');
        carRequirements.engine={power:90,volume:1800}
    } else if(carRequirements.power<=120){
        Reflect.deleteProperty(carRequirements,'power');
        carRequirements.engine={power:120,volume:2400}
    } else {
        Reflect.deleteProperty(carRequirements,'power');
        carRequirements.engine={power:200,volume:3500}
    }

    let carriage=carRequirements.carriage;
    let color=carRequirements.color;
    Reflect.deleteProperty(carRequirements,'color');

    carRequirements.carriage={type:carriage,color};

    let wheel=carRequirements.wheelsize;
    Reflect.deleteProperty(carRequirements,'wheelsize');

    if(wheel%2===0){
        wheel-=1
    }

    carRequirements.wheels=[wheel,wheel,wheel,wheel];

    return carRequirements;
}