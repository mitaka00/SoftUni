function attachEventsListeners() {
    document.getElementById('convert').addEventListener('click',function () {
        let inputValue=Number(document.getElementById('inputDistance').value);
        let inputSelection=document.getElementById('inputUnits');
        let inputType=inputSelection.options[inputSelection.selectedIndex].value;

        let outputSelection=document.getElementById('outputUnits');
        let outputType=outputSelection.options[outputSelection.selectedIndex].value;

        document.getElementById('outputDistance').value=convertDistance(inputValue,inputType,outputType)
    });

    function convertDistance(value,inputType,outputType) {
        switch (inputType){
            case 'km':value*=1000;
            break;
            case 'cm':value/=100;
            break;
            case 'mm': value/=1000;
            break;
            case 'mi': value*=1609.34;
            break;
            case 'yrd':value*=0.9144;
            break;
            case 'ft':value*=0.3048;
            break;
            case 'in':value*=0.0254;
            break;
            default: break;
        }

        switch(outputType){
            case 'km':return value/1000;
                break;
            case 'cm':return value*100;
                break;
            case 'mm':return value*1000;
                break;
            case 'mi':return value/1609.34;
                break;
            case 'yrd':return value/0.9144;
                break;
            case 'ft':return value/0.3048;
                break;
            case 'in':return value/0.0254;
            break;
            default: return value;
        }
    }
}
