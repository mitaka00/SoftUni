function solve(input) {
    let systems=new Map();

    //make data with systems as keys
    for (let obj of input) {
        let system=obj.system;
        let candidate=obj.candidate;
        let votes=Number(obj.votes);

        if(!systems.has(system)){
            systems.set(system,new Map())
        }

        if(!systems.get(system).has(candidate)){
            systems.get(system).set(candidate,0)
        }

        systems.get(system).set(candidate,systems.get(system).get(candidate)+votes)
    }

    let candidates=new Map();

    //make Map with candidate as key and vote for each system
    for (let [system,value] of systems) {
        let candidate='';
        let votes=Number.MIN_SAFE_INTEGER;
        let allVotes=0;

        for (let [k,v] of value) {
            if(votes<v){
                votes=v;
                candidate=k;
            }

            allVotes+=v
        }

        if(!candidates.has(candidate)) {
            candidates.set(candidate, new Map());
        }
        candidates.get(candidate).set(system,allVotes)
    }

    let candidateAndAllVotes=[];

    //make array with all votes from all systems for each candidate
    for (let [candidate,val] of candidates) {
        let candidateObj={name:candidate,votes:0};

        for (let [k,v] of val) {
            candidateObj['votes']+=v;
        }

        candidateAndAllVotes.push(candidateObj)
    }

    //Output
    if(candidateAndAllVotes.length===1){
        printOneWinner(candidateAndAllVotes)

    } else{
        candidateAndAllVotes.sort((x,y)=>y['votes']-x['votes']);

        let sum=0;
        candidateAndAllVotes.forEach(x=>sum+=x['votes']);

        printWinnerAndSecond(candidateAndAllVotes,candidates,sum)
    }


    function printOneWinner(candidateAndAllVotes) {
        console.log(`${candidateAndAllVotes[0]['name']} wins with ${candidateAndAllVotes[0]['votes']} votes`)
        console.log(`${candidateAndAllVotes[0]['name']} wins unopposed!`)
    }

    function printWinnerAndSecond(candidateAndAllVotes,candidates,sum) {
        if(candidateAndAllVotes[0]['votes']>sum/2){
            console.log(`${candidateAndAllVotes[0]['name']} wins with ${candidateAndAllVotes[0]['votes']} votes`);
            console.log(`Runner up: ${candidateAndAllVotes[1]['name']}`)
            Array.from(candidates.get(candidateAndAllVotes[1]['name']))
                .sort((x,y)=>y[1]-x[1])
                .forEach(x=>console.log(`${x[0]}: ${x[1]}`));
        } else {
            console.log(`Runoff between ${candidateAndAllVotes[0]['name']} with ${Math.floor(candidateAndAllVotes[0]['votes']/sum*100)}% and ${candidateAndAllVotes[1]['name']} with ${Math.floor(candidateAndAllVotes[1]['votes']/sum*100)}%`)
        }
    }
}
solve(
    [ { system: 'Tau',     candidate: 'Flying Shrimp', votes: 150 },
        { system: 'Tau',     candidate: 'Space Cow',     votes: 100 },
        { system: 'Theta',   candidate: 'Space Cow',     votes: 10 },
        { system: 'Sigma',   candidate: 'Space Cow',     votes: 200 },
        { system: 'Sigma',   candidate: 'Flying Shrimp', votes: 75 },
        { system: 'Omicron', candidate: 'Flying Shrimp', votes: 50 },
        { system: 'Omicron', candidate: 'Octocat',       votes: 75 }
    ]

)