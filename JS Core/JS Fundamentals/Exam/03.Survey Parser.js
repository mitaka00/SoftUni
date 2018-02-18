function solve(input) {
    let svgPattern=new RegExp('<svg>(.*?)</svg>');

    if(!svgPattern.test(input)){
        console.log('No survey found');
        return;
    }

    let validSurvey=svgPattern.exec(input)[1];

   let firstCatPattern=/<cat><text>.*\[(.*)\].*<\/text><\/cat>/;
   if(!firstCatPattern.exec(validSurvey)){
       console.log('Invalid format');
       return;
   }

   let label=firstCatPattern.exec(validSurvey)[1];

   let secondCatChecker=/<cat>(<g><val>(.*)<\/val>(.*)<\/g>)+<\/cat>/;
    if(!secondCatChecker.exec(validSurvey)){
        console.log('Invalid format');
        return;
    }

    let secondCatPattern=/<g><val>([1-9]|10)<\/val>([0-9]+)<\/g>?/g;
    let match=secondCatPattern.exec(validSurvey);
    if(!match){
        console.log('Invalid format');
        return
    }
    let sum=0;
    let finalCount=0;
    while(match){
        let value=Number(match[1]);
        let count=Number(match[2]);

        sum+=value*count;
        finalCount+=count;

        match=secondCatPattern.exec(validSurvey);
    }


    let average=(sum/finalCount).toFixed(2)*100/100;
    console.log(`${label}: ${average}`)
}
solve('<svg><cat><g><val>10<\/val>3<\/g><g><cat><text>[dasda90]asdasd</text></cat><val>3</val>2</g><g><val>1</val>3</g><\/cat><\/svg>')