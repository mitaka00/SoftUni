function solve(input) {
    let finalThickness=input[0];

    for (let i = 1; i < input.length; i++) {
        let crystal=input[i];
        let cuttingTime=0;
        let lappingTime=0;
        let grindingTime=0;
        let etchingTime=0;

        console.log(`Processing chunk ${crystal} microns`);

        while(crystal/4>=finalThickness){
            cuttingTime++;
            crystal/=4;
            if(crystal/4<=finalThickness){
                console.log('Cut x'+cuttingTime);
                console.log(`Transporting and washing`);
                crystal=Math.floor(crystal);
            }
        }

        while(crystal*4/5>=finalThickness){
            lappingTime++;
            crystal=crystal*4/5;
            if(crystal*4/5<=finalThickness) {
                console.log('Lap x'+lappingTime);
                console.log(`Transporting and washing`);
                crystal=Math.floor(crystal);
            }
        }

        while(crystal-20>=finalThickness){
            grindingTime++;
            crystal-=20;
            if(crystal-20<=finalThickness) {
                console.log('Grind x'+grindingTime);
                console.log(`Transporting and washing`);
                crystal=Math.floor(crystal);
            }
        }

        while(crystal-2>=finalThickness-1){
            etchingTime++;
            crystal-=2;
            if(crystal===finalThickness-1 || crystal===finalThickness) {
                console.log('Etch x'+etchingTime);
                console.log(`Transporting and washing`);
                crystal=Math.floor(crystal);
            }
        }

        if(crystal+1===finalThickness){
            console.log(`X-ray x1`);
            crystal+=1;
        }

        console.log(`Finished crystal ${finalThickness} microns`)
    }
}
solve([1000, 4000, 8100]);