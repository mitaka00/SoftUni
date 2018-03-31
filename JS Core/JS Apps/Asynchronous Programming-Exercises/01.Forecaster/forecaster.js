function attachEvents(){
    $('#submit').click(displayWeather);
    let forecastSection=$('#forecast');
    let location=$('#location');
    let currentWeatherDiv=$('#current');
    let upcomingWeatherDiv=$('#upcoming');

    let currentLabel=$(`<div class="label">Current conditions</div>`);
    let upcomingLabel=$(`<div class="label">Three-day forecast</div>`)

    function displayWeather() {
        forecastSection.show();
        currentWeatherDiv.empty();
        upcomingWeatherDiv.empty();

        currentWeatherDiv.append(currentLabel);
        upcomingWeatherDiv.append(upcomingLabel);

        $.ajax({
            url:`https://judgetests.firebaseio.com/locations.json`,
            success:findAllPlaces,
            error:displayError
        });

        function findAllPlaces(data) {
            for (let key in data) {
                let obj=data[key];

                if(obj.name===location.val()){
                    let currentCondition=$.ajax({
                        url:`https://judgetests.firebaseio.com/forecast/today/${obj.code}.json`
                    });

                    let threeDayForecast=$.ajax({
                        url:`https://judgetests.firebaseio.com/forecast/upcoming/${obj.code}.json`
                    });

                    Promise.all([currentCondition,threeDayForecast])
                        .then(fillDivs)
                        .catch(displayError);

                    return;
                }
            }
        }

        function fillDivs([currentCondition,threeDayForecast]) {
            fillCurrentDiv(currentCondition);
            fillUpcomingDiv(threeDayForecast);
        }

        function fillCurrentDiv(currentCondition) {
            let conditionSymbol=$(`<span class="condition symbol">${findBestSymbol(currentCondition.forecast.condition)}</span>`);

            let condition=$('<span class="condition">');
            condition.append(`<span class="forecast-data">${currentCondition.name}</span>`)
                .append(`<span class="forecast-data">${currentCondition.forecast.low}&#176;/${currentCondition.forecast.high}&#176;</span>`)
                .append(`<span class="forecast-data">${currentCondition.forecast.condition}</span>`);

            currentWeatherDiv.append(conditionSymbol);
            currentWeatherDiv.append(condition);
        }

        function fillUpcomingDiv(threeDayForecast){
            for (let currentObj of threeDayForecast.forecast) {
                console.log(currentObj)

                let objContainer=$('<span class="upcoming"></span>');

                objContainer
                    .append($(`<span class="symbol">${findBestSymbol(currentObj.condition)}</span>`))
                    .append($(`<span class="forecast-data">${currentObj.low}&#176;/${currentObj.high}&#176;</span>`))
                    .append($(`<span class="forecast-data">${currentObj.condition}</span>`));

                upcomingWeatherDiv.append(objContainer)
            }
        }
    }

    function displayError(err) {
        forecastSection.text('Error')
    }

    function findBestSymbol(symbol) {
        switch (symbol){
            case 'Sunny': return '&#x2600;';
            case 'Partly sunny':return '&#x26C5;';
            case 'Overcast':return '&#x2601;';
            case 'Rain':return '&#x2614;';
            case 'Degrees':return '&#176;';
            default: return '';
        }
    }
}