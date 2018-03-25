function attachEvents() {
    $('#submit').click(clickSubmit);
    $('#refresh').click(refresh);
    
    function clickSubmit() {
        let data={
            author:$('#author').val(),
            content:$('#content').val(),
            timestamp:Date.now()
        };

        let request={
            url:'https://messengerdemo-ae077.firebaseio.com/messanger.json',
            method:'POST',
            data:JSON.stringify(data),
            success:refresh,
        };

        $.ajax(request);
    }

    function refresh() {
        let text='';

        let request={
            url:'https://messengerdemo-ae077.firebaseio.com/messanger.json',
            success:displayMessages,
        };

        $.ajax(request);

        function displayMessages(data) {
            let textArea=$('#messages');
            let result='';

            for (let key in data) {
                result+=`${data[key]['author']}: ${data[key]['content']}\n`
            }

            textArea.text(result)
        }
    }
}