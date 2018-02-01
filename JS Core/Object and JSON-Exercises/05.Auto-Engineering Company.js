function solve(input){
    let cars=new Map();

    for (let line of input) {
        let [carBrand,carModel,carQuantity]=line.split(' | ');
        
        if(!cars.has(carBrand)){
            cars.set(carBrand,new Map());
        }
        
        if(!cars.get(carBrand).has(carModel)){
            cars.get(carBrand).set(carModel,0);
        }
        
        cars.get(carBrand).set(carModel,cars.get(carBrand).get(carModel)+ Number(carQuantity))
    }

    for (let [key,value] of cars) {
        console.log(key);
        for (let [k,v] of value) {
            console.log(`###${k} -> ${v}`)
        }
    }
}