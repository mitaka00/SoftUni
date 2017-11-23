$(() => {
    const host='https://judgetests.firebaseio.com/businfo/';
    const list=$('#buses');
    const stopName=$('#stopName');
    $('#submit').click(getInfo);

    function getInfo() {
        stopName.empty();
        list.empty();

        const input=$('#stopId').val();

        $.ajax({
            url: host + input + '.json',
            success: loadSuccess,
            error:errorFunction
        });

        function loadSuccess(data){
            let buses=data.buses;
            let name=data.name;

            stopName.append(name);

            for(let key in buses){
                list.append(`<li>Bus ${key} arrives in ${buses[key]} minutes</li>`)
            }
        }

        function errorFunction() {
            stopName.append("Error");
        }
    }
});