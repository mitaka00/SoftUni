function attachGradientEvents() {
    let gradient=document.getElementById('gradient');

    gradient.addEventListener('mousemove',function (event) {
        let x=event.offsetX;
        let percent=Math.trunc((x/Number(event.target.clientWidth))*100);

        document.getElementById('result').textContent=percent + '%'
    });

    gradient.addEventListener('mouseout',function (event) {
        document.getElementById('result').textContent=''
    });
}