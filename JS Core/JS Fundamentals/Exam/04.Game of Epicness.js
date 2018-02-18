function solve(kingdoms,battles){
    let kingdomsArmy=new Map();

    for (let obj of kingdoms) {
        let kingdom=obj.kingdom;
        let general=obj.general;
        let army=Number(obj.army);

        if(!kingdomsArmy.has(kingdom)){
            kingdomsArmy.set(kingdom,new Map())
        }

        if(!kingdomsArmy.get(kingdom).has(general)){
            kingdomsArmy.get(kingdom).set(general,{army:0,wins:0,looses:0})
        }

        kingdomsArmy.get(kingdom).get(general).army+=army
    }

    for (let line of battles) {
        let attKingdom=line[0];
        let attGeneral=line[1];
        let deffKingdom=line[2];
        let deffGeneral=line[3];

        if(attKingdom!==deffKingdom && kingdomsArmy.get(attKingdom).get(attGeneral).army!==kingdomsArmy.get(deffKingdom).get(deffGeneral).army){
            if(kingdomsArmy.get(attKingdom).get(attGeneral).army>kingdomsArmy.get(deffKingdom).get(deffGeneral).army){
                kingdomsArmy.get(attKingdom).get(attGeneral).army=Math.floor(kingdomsArmy.get(attKingdom).get(attGeneral).army+0.1*kingdomsArmy.get(attKingdom).get(attGeneral).army);
                kingdomsArmy.get(attKingdom).get(attGeneral).wins+=1;

                kingdomsArmy.get(deffKingdom).get(deffGeneral).army=Math.floor(kingdomsArmy.get(deffKingdom).get(deffGeneral).army-0.1*kingdomsArmy.get(deffKingdom).get(deffGeneral).army);
                kingdomsArmy.get(deffKingdom).get(deffGeneral).looses+=1;
            } else{
                kingdomsArmy.get(attKingdom).get(attGeneral).army=Math.floor(kingdomsArmy.get(attKingdom).get(attGeneral).army-0.1*kingdomsArmy.get(attKingdom).get(attGeneral).army);
                kingdomsArmy.get(attKingdom).get(attGeneral).looses+=1;

                kingdomsArmy.get(deffKingdom).get(deffGeneral).army=Math.floor(kingdomsArmy.get(deffKingdom).get(deffGeneral).army+0.1*kingdomsArmy.get(deffKingdom).get(deffGeneral).army);
                kingdomsArmy.get(deffKingdom).get(deffGeneral).wins+=1;
            }
        }
    }

    //sorting Kingdoms
    let sortedKingdoms=[...kingdomsArmy.keys()].sort(function (x,y) {return x.localeCompare(y)})
        .sort(function (x,y) {
            let xLooses=0;
            let yLooses=0;

            for (let [general,obj] of kingdomsArmy.get(x)) {
                    xLooses+=obj.looses
            }

            for (let [general,obj] of kingdomsArmy.get(y)) {
                    yLooses+=obj.looses
            }

            if(xLooses>yLooses) return 1;
            if(xLooses<yLooses) return -1;

            return 0;
        }).sort(function (x,y) {
            let xWins=0;
            let yWins=0;

            for (let [general,obj] of kingdomsArmy.get(x)) {
                xWins+=obj.wins
            }

            for (let [general,obj] of kingdomsArmy.get(y)) {
                yWins+=obj.wins
            }

            if(xWins>yWins) return -1;
            if(xWins<yWins) return 1;

            return 0;
        });



    //sorting Generals
    let sortedGenerals=[...(kingdomsArmy.get(sortedKingdoms[0]).keys())].sort(function (x,y) {
        if(kingdomsArmy.get(sortedKingdoms[0]).get(x).army>kingdomsArmy.get(sortedKingdoms[0]).get(y).army) return -1;
        if(kingdomsArmy.get(sortedKingdoms[0]).get(x).army<kingdomsArmy.get(sortedKingdoms[0]).get(y).army) return 1;

        return 0;
    });


    //output
    console.log(`Winner: ${sortedKingdoms[0]}`);
    for (let general of sortedGenerals) {
        console.log(`/\\general: ${general}`);
        console.log(`---army: ${kingdomsArmy.get(sortedKingdoms[0]).get(general).army}`);
        console.log(`---wins: ${kingdomsArmy.get(sortedKingdoms[0]).get(general).wins}`);
        console.log(`---losses: ${kingdomsArmy.get(sortedKingdoms[0]).get(general).looses}`)
    }

}
solve(
    [ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
        { kingdom: "Stonegate", general: "Ulric", army: 4900 },
        { kingdom: "Stonegate", general: "Doran", army: 70000 },
        { kingdom: "YorkenShire", general: "Quinn", army: 0 },
        { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
        { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
    [ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
        ["Stonegate", "Ulric", "Stonegate", "Doran"],
        ["Stonegate", "Doran", "Maiden Way", "Merek"],
        ["Stonegate", "Ulric", "Maiden Way", "Merek"],
        ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]
)