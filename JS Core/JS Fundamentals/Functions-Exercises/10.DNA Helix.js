function solve(input){
    let helix=['AT','CG','TT','AG','GG'];
    let outputstyle=0;
    let lastStyleChecker=0;

    for (let i = 1; i <= input; i++) {
        let index = (i-1) % 5;

        let firstLetter = helix[index][0];
        let secondLetter = helix[index][1];

        if (outputstyle === 0) {
            console.log(`**${firstLetter}${secondLetter}**`)
        } else if (outputstyle === 1) {
            console.log(`*${firstLetter}--${secondLetter}*`)
        } else {
            console.log(`${firstLetter}----${secondLetter}`)
        }

        if(outputstyle===0){
            lastStyleChecker=outputstyle;
            outputstyle++;
        } else if(outputstyle===2){
            lastStyleChecker=outputstyle
            outputstyle--;
        } else if(outputstyle===1 && lastStyleChecker===2){
            outputstyle--
        } else {
            outputstyle++
        }

    }
}
solve(10);