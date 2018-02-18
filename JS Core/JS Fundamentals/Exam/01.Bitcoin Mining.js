//Nrof1244
function solve(input){
    let money=0;
    let bitcoins=0;
    let firstBitcoin=0;

    for (let i = 0; i < input.length; i++) {
        let gold=Number(input[i]);

        if((i+1)%3===0){
            gold=Number(0.7*gold)
        }

        money+=Number(gold*67.51)

        while(money>11949.16){
            money-=11949.16;

            if(bitcoins===0){
                firstBitcoin=i+1;
            }
            bitcoins++;
        }
    }

    if(bitcoins===0){
        console.log(`Bought bitcoins: ${bitcoins}`)
        console.log(`Left money: ${money.toFixed(2)} lv.`)
    } else {
        console.log(`Bought bitcoins: ${bitcoins}`)
        console.log(`Day of the first purchased bitcoin: ${firstBitcoin}`)
        console.log(`Left money: ${money.toFixed(2)} lv.`)
    }
}
solve(['3124.15', '504.212', '2511.124'])