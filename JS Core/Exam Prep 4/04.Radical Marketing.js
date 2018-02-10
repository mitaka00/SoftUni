function solve(input) {
    let data=new Map();

    for (let line of input) {
        let onePersonPattern=/^[A-Z]+$/;
        let twoPersonPattern=/^[A-Z]+-[A-Z]+$/;

        if(onePersonPattern.test(line)){
            if(!data.has(line)){
                data.set(line,{subscribers:[],following:[]});
            }
        }

        if(twoPersonPattern.test(line)){
            let tokens=line.split('-');

            if(data.has(tokens[0]) && data.has(tokens[1])){
                data.get(tokens[1]).subscribers.push(tokens[0]);
                data.get(tokens[0]).following.push(tokens[1]);
            }
        }
    }

    //Sorting
    let sortedData=[...data.keys()].sort(function (x,y) {
        if(data.get(x).subscribers.length>data.get(y).subscribers.length) return -1;
        if(data.get(x).subscribers.length<data.get(y).subscribers.length) return 1;
        if(data.get(x).following.length>data.get(y).following.length) return -1;
        if(data.get(x).following.length<data.get(y).following.length) return 1;

        return 0;
    });


    //Output
    console.log(sortedData[0]);
    for (let i = 0; i < data.get(sortedData[0])['subscribers'].length; i++) {
        console.log(`${i+1}. ${data.get(sortedData[0]).subscribers[i]}`)
    }
}
solve([
    'A',
    'B',
    'A-B',
    'C',
    'C-B',
    'D',
    'D-B',
    'E',
    'E-B',
    'A-C',
    'D-C',
    'E-C'
]);