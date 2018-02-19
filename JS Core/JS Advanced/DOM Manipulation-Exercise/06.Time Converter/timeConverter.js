function attachEventsListeners() {
    let daysBtn=document.getElementById('daysBtn');
    let hoursBtn=document.getElementById('hoursBtn');
    let minutesBtn=document.getElementById('minutesBtn');
    let secondsBtn=document.getElementById('secondsBtn');

    let days=document.getElementById('days');
    let minutes=document.getElementById('minutes');
    let hours=document.getElementById('hours');
    let seconds=document.getElementById('seconds');

    daysBtn.addEventListener('click',function () {
        let daysValue=Number(document.getElementById('days').value);

        hours.value=daysValue*24;
        minutes.value=daysValue*24*60;
        seconds.value=daysValue*24*60*60;

    });

    hoursBtn.addEventListener('click',function () {
        let hoursValue=Number(document.getElementById('hours').value);

        days.value=hoursValue/24;
        minutes.value=hoursValue*60;
        seconds.value=hoursValue*60*60;
    });

    minutesBtn.addEventListener('click',function () {
        let minutesValue=Number(document.getElementById('minutes').value);

        days.value=minutesValue/60/24;
        hours.value=minutesValue/60;
        seconds.value=minutesValue*60;
    });

    secondsBtn.addEventListener('click',function () {
        let secondsValue=Number(document.getElementById('seconds').value);

        days.value=secondsValue/60/60/24;
        hours.value=secondsValue/60/60;
        minutes.value=secondsValue/60;
    });
}
