$(() => {
    const host='https://judgetests.firebaseio.com/schedule/';
    let id='depot';
    const spanInfo=$('.info');
    let departBtn=$('#depart');
    let arriveBtn=$('#arrive');

    departBtn.click(depart);
    arriveBtn.click(arrive);
    
    function depart() {
        let address=host+id+'.json';
        console.log(address);
        
        $.ajax({
            url: address,
            success: departSuccess,
            error:errorFunction
        });
        
        function departSuccess(data) {
            let name=data.name;
            console.log(name);

            spanInfo.text(`Next stop ${name}`);

            departBtn.prop('disabled',true);
            arriveBtn.prop('disabled',false);
        }
    }

    function arrive() {
        let address=host+id+'.json';

        $.ajax({
            url: address,
            success: arriveSuccess,
            error:errorFunction
        });

        function arriveSuccess(data) {
            let name=data.name;
            let next=data.next;

            spanInfo.text(`Arriving at ${name}`);

            departBtn.prop('disabled',false);
            arriveBtn.prop('disabled',true);

            id=next;
        }
    }

    function errorFunction() {
        spanInfo.text(`Error`);
    }
});