function getSortedList() {

    let obj=(function () {
        let arr=[];
        let size=0;
        let sorting=(a,b)=>a-b;
        
        function add(num) {
            arr.push(num);
            arr.sort(sorting);
            this.size++;

            return arr;
        }

        function remove(index) {
            if(index>=0 && index<arr.length) {
                arr.splice(index, 1);
                this.size--;
            }

            return arr;
        }
        
        function get(index) {
            if(index>=0 && index<arr.length) {
                return arr[index]
            }
        }
        
        return{
            add,
            remove,
            get,
            size
        }
    })();

    return obj
}

