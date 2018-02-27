function timer() {
    let intervalId,time;
    let hours=$('#hours');
    let minutes=$('#minutes');
    let seconds=$('#seconds');

    $('#start-timer').click(function () {
        clearInterval(intervalId);
        time=Number(hours.text())*3600+Number(minutes.text())*60+Number(seconds.text());
        $('#start-timer').prop('disabled','true');

        intervalId=setInterval(increment,1000)
    });

    $('#stop-timer').click(function () {
        clearInterval(intervalId);
        $('#start-timer').prop('disabled','');
    });

    function increment(){
        time++;

        hours.text(('0'+Math.floor(time/3600)).slice(-2));
        minutes.text(('0'+Math.floor(time/60%60)).slice(-2));
        seconds.text(('0'+time%60).slice(-2));
    }
}