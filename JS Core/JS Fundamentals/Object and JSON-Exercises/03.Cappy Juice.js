function solve(input) {
    let map=new Map();
    let result=new Map();

    for (let line of input) {
        let [juice,quantity]=line.split(' => ');

        if(!map.has(juice)){
            map.set(juice,0)
        }

        map.set(juice,map.get(juice)+Number(quantity));

        while(map.get(juice)>=1000){
            if(!result.has(juice)){
                result.set(juice,0)
            }

            map.set(juice,map.get(juice)-1000);
            result.set(juice,result.get(juice)+1);
        }
    }

    for (let [k,v] of result) {
        console.log(`${k} => ${v}`)
    }
}
solve([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'

])