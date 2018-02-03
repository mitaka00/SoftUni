function solve(base,increment){
    let stones=0;
    let gold=0;
    let lapisLazuli=0;
    let marble=0;
    let pyramidHeight=0;
    let stableCount=0;

    if(base%2===0) {
        for (let i = base; i >= 2; i -= 2) {
            if(i===2){
                gold+=4*increment;
                pyramidHeight+=increment;
            } else {
                stableCount++;
                let outLayer = 4 * (i - 1) * increment;
                let bulk = (i * i - 4 * (i - 1)) * increment;

                stones+=bulk;
                pyramidHeight+=increment;

                if(stableCount%5===0){
                    lapisLazuli+=outLayer;
                } else{
                    marble+=outLayer;
                }
            }
        }
    } else{
        for (let i = base; i >= 1; i -= 2) {
            if(i===1){
                gold+=1*increment;
                pyramidHeight+=increment;
            } else {
                stableCount++;
                let outLayer = 4 * (i - 1) * increment;
                let bulk = (i * i - 4 * (i - 1)) * increment;

                stones+=bulk;
                pyramidHeight+=increment;

                if(stableCount%5===0){
                    lapisLazuli+=outLayer;
                } else{
                    marble+=outLayer;
                }
            }
        }
    }

    console.log(`Stone required: ${Math.ceil(stones)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(pyramidHeight)}`)
}
solve(23,0.5)