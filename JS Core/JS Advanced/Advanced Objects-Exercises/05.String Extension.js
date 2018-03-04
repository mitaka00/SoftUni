(function solve() {
    String.prototype.ensureStart=function (str) {
        if(!this.toString().startsWith(str)){
            return str+this.toString()
        }
        
        return this.toString()
    };
    
    String.prototype.ensureEnd=function (str) {
        if(!this.toString().endsWith(str)){
            return this.toString()+str;
        }

        return this.toString()
    };

    String.prototype.isEmpty=function () {
        if(this.toString()===''){
            return true;
        } else {
            return false
        }
    };

    String.prototype.truncate=function (num) {
        if(this.toString().length<=3){
            return '.'.repeat(num)
        }
        if(this.toString().length<=num){
            return this.toString();
        }

        let lastIndex = this.toString().substr(0, num - 2).lastIndexOf(" ");
        if(lastIndex !== -1){
            return this.toString().substr(0, lastIndex) + "...";
        } else {
            return this.toString().toString().substr(0, num-3) + "...";
        }
    };

    String.format=function (str, ...params) {
        for (let i = 0; i < params.length; i++) {
            let pattern=new RegExp('\\{' + i + '\\}','g');

            str=str.replace(pattern,params[i])
        }

        return str;
    }
})();

let str = 'my string';

str = str.ensureStart('my');
console.log(str);

str = str.ensureStart('hello ');
console.log(str);

str = str.truncate(16);
console.log(str);

str = str.truncate(14);
console.log(str);

str = str.truncate(8);
console.log(str);

str = str.truncate(4);
console.log(str);

str = str.truncate(2);
console.log(str);

str = String.format('The {0} {1} fox',
    'quick', 'brown');
console.log(str);

str = String.format('jumps {0} {1}',
    'dog');
console.log(str);
