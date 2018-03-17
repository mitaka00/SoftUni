class Player{
    constructor(nickName){
        this.nickName=nickName;
        this.scores=[];
    }

    addScore(score){
        if(typeof score==='number' || Number(score)){
            this.scores.push(Number(score));
        }

        return this
    }

    get scoreCount(){
        return this.scores.length
    }

    get highestScore(){
        let result;

        for (let i = 0; i < this.scores.length; i++) {
            if(i===0){
                result=this.scores[i];
            }

            if(result<this.scores[i]){
                result=this.scores[i]
            }
        }

        return result;
    }

    get topFiveScore(){
        let topFiveScores=[];

        if(this.scores.length<5){
            return this.scores.sort((x,y)=>y-x)
        } else {
            return this.scores.sort((x,y)=>y-x).slice(0,5)
        }
    }

    toString(){
        if(this.scores.length===0){
            return `${this.nickName}: []`
        }

        return `${this.nickName}: [${this.scores.sort((x,y)=>y-x).join(',')}]`
    }
}

let peter = new Player("Peter");
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);
peter.addScore(450);
peter.addScore(200);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
peter.addScore(2000);
peter.addScore(300);
peter.addScore(50);
peter.addScore(700);
peter.addScore(700);
console.log('Highest score: ' + peter.highestScore);
console.log(`Top 5 score: [${peter.topFiveScore}]`);
console.log('' + peter);
console.log('Score count: ' + peter.scoreCount);