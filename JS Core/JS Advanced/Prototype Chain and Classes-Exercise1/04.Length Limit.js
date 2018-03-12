class Stringer{
    constructor(text,length){
        this.innerString=text;
        this.innerLength=length;
    }

    decrease(secondLength){
        this.innerLength-=secondLength;

        if(this.innerLength<0){
            this.innerLength=0;
        }
    }
    increase(secondLength){
        this.innerLength+=secondLength;
    }

    toString(){
        if(this.innerString.length===0){
            return '...';
        }

        if(this.innerString.length > this.innerLength){
            this.innerString = this.innerString.substr(0, this.innerLength) + "...";
        }
        return this.innerString;
    }
}