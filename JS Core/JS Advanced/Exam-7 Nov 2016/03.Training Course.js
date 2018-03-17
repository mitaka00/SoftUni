class TrainingCourse {
    constructor(title,trainer){
        this.title=title;
        this.trainer=trainer;
        this.topics=[];
    }

    addTopic(title,date){
        this.topics.push({title:title,date:date});
        this.topics=this.topics.sort(function (a,b) {
            return a.date-b.date;
        });

        return this;
    }

    get firstTopic(){
        return this.topics[0];
    }

    get lastTopic(){
        return this.topics[this.topics.length-1];
    }

    toString(){
        let result=`Course "${this.title}" by ${this.trainer}\n`;

        if(this.topics.length===0){
            return result;
        } else {
            for (let i = 0; i < this.topics.length-1; i++) {
                result+=` * ${this.topics[i].title} - ${this.topics[i].date}\n`;
            }
            result+=` * ${this.topics[this.topics.length-1].title} - ${this.topics[this.topics.length-1].date}`;

            return result;
        }
    }

}

let test = new TrainingCourse("PHP", "Royal");
test.addTopic('Syntax', new Date(2017, 10, 12, 18, 0));
test.addTopic('Exam prep', new Date(2017, 10, 14, 18, 0));
test.addTopic('Intro', new Date(2017, 10, 10, 18, 0));

console.log(test.toString());