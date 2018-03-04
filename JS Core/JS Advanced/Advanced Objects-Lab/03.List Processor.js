function solve(input) {
    let processor=(function () {
        let list=[];

        return{
            add:function (newItem) {
                list.push(newItem)
            },
            remove:function (item) {
                list=list.filter(li=>li!==item);
            },
            print:function () {
                console.log(list.join(','));
            }
        }
    })();

    for (let line of input) {
        let [command,value]=line.split(' ');

        processor[command](value);
    }
}