function solve(input) {
    let carManager=(function (){
        let cars=new Map();

        function create(objName,inherits,parent) {
            if(inherits){
                cars.set(objName,Object.create(cars.get(parent)));
            } else {
                cars.set(objName,{})
            }
        }

        function set(name,key,value) {
            cars.get(name)[key]=value;
        }
        
        function print(name) {
            let output=[];
            let obj=cars.get(name);

            for (let prop in obj) {
                output.push(`${prop}:${obj[prop]}`)
            }

            console.log(output.join(', '))
        }

        return {
            create,
            set,
            print
        }
    })();

    for (let line of input) {
        let [command,name,param,value]=line.split(' ');

        carManager[command](name,param,value)
    }
}
solve(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']
)