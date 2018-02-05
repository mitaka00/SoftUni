function solve(input) {
    let remainedPlanes=new Map();
    let towns=new Map();

    for (let line of input) {
        line=line.split(' ');
        let planeId=line[0];
        let town=line[1];
        let passengersCount=Number(line[2]);
        let action=line[3];

        if(action==='land' && !remainedPlanes.has(planeId)){
            remainedPlanes.set(planeId,action);

            if(!towns.has(town)){
                towns.set(town,{Arrivals:0,Departures:0,Planes:[]})
            }

            towns.get(town).Arrivals=towns.get(town).Arrivals+passengersCount;

            let isPlaneThere=false;
            for (let plane of towns.get(town).Planes) {
                if(plane===planeId){
                    isPlaneThere=true;
                }
            }

            if(!isPlaneThere){
                towns.get(town).Planes.push(planeId)
            }
        }

        if(action==='depart' && remainedPlanes.get(planeId)==='land'){
            remainedPlanes.delete(planeId);

            if(!towns.has(town)){
                towns.set(town,{Arrivals:0,Departures:0,Planes:[]})
            }

            towns.get(town).Departures=towns.get(town).Departures+passengersCount;

            let isPlaneThere=false;
            for (let plane of towns.get(town).Planes) {
                if(plane===planeId){
                    isPlaneThere=true;
                }
            }

            if(!isPlaneThere){
                towns.get(town).Planes.push(planeId)
            }
        }
    }

    //Print sorted Planes
    console.log('Planes left:');
    let sortedPlanes=[...remainedPlanes.keys()].sort(function (x,y) {
        return x.localeCompare(y);
    });
    for (let key of sortedPlanes) {
        console.log(`- ${key}`)
    }

    //Print sorted Towns
    let sortedTowns=[...towns.keys()].sort(function (x,y) {
        let xArrivals=towns.get(x).Arrivals;
        let yArrivals=towns.get(y).Arrivals;

        if(xArrivals<yArrivals) return 1;
        if(xArrivals>yArrivals) return -1;

        return x.localeCompare(y)
    });

    for (let town of sortedTowns) {
        console.log(town);
        console.log(`Arrivals: ${towns.get(town).Arrivals}`);
        console.log(`Departures: ${towns.get(town).Departures}`);
        console.log('Planes:');
        towns.get(town).Planes
            .sort(function (x,y) {return x.localeCompare(y)})
            .forEach(x=>console.log(`-- ${x}`))
    }
}
solve(
    [ "Boeing474 Madrid 300 land", "AirForceOne WashingtonDC 178 land",
        "Airbus London 265 depart", "ATR72 WashingtonDC 272 land", "ATR72 Madrid 135 depart"
    ]
);