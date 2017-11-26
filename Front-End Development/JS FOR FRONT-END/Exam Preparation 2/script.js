let continents1 = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            },
            Vatican: {
                name: "Vatican",
                capital: "Vatican City",
                officialLanguage: "Italian",
                population: 1000,
                area: 0.44,
                politicalStatus: "Monarchy",
                monarch: "Francis",
                officialCurrency: "Euro(EUR)"
            }
        }
    },
    Asia: {
        name: "Asia",
        countries: {
            Russia: {
                name: "Russia",
                capital: "Moscow",
                officialLanguage: "Russian",
                population: 144463451,
                area: 17075200,
                politicalStatus: "Republic",
                president: "Vladimir Putin",
                officialCurrency: "Russian ruble(RUB)"
            },
            China: {
                name: "China",
                capital: "Beijing",
                officialLanguage: "Chinese",
                population: 1403500365,
                area: 9596961,
                politicalStatus: "Republic",
                president: "Xi Jinping",
                officialCurrency: "Renminbi(CNY)"
            }
        }
    }
};
let continents2 = {
    Europe: {
        name: "Europe",
        countries: {
            Bulgaria: {
                name: "Bulgaria",
                capital: "Sofia",
                officialLanguage: "Bulgarian",
                population: 7000000,
                area: 111000,
                politicalStatus: "Republic",
                president: "Rumen Radev",
                officialCurrency: "LEV(BGN)"
            }
        }
    }
};


//PROBLEM 1
function renderAllContinents(continents) {
    for(let key in continents){
        let continent=continents[key];

        console.log(continent['name']);
    }
}


function renderSingleContinent(continent) {
    console.log(continent['name']);

    if(continent['countries']) {
        console.log('Countries:');

        for (let key in continent['countries']) {
            let country = continent['countries'][key];

            console.log(`$$$` + country['name']);
        }
    }
}

function renderSingleCountry(country) {
    if(country) {
        console.log(country['name']);
        console.log('Capital: ' + country['capital']);
        console.log('Official Language: ' + country['officialLanguage']);
        console.log('Population: ' + country['population']);
        console.log('Area: ' + country['area'] + ' km2');
        console.log('Political Status: ' + country['politicalStatus']);
        if(country['politicalStatus']==='Republic'){
            console.log('President: '+ country['president']);
        } else{
            console.log('Monarch: '+ country['monarch']);
        }
        console.log('Official Currency: ' + country['officialCurrency']);
    }
}

//PROBLEM 2
function renderDataInHTML(continents) {
    for(let key in continents) {
        let continent=continents[key];

        let continentDiv = $('<div class="continent"></div>');

        $('.continents').append(continentDiv);
        continentDiv.append($(`<h5 class="continent-title">${continent['name']}</h5>`));

        $('.continent-data').append($(`<h2 class="continent-title">${continent['name']}</h2>`));
        $('.continent-data').append($(`<h3 class="countries-title">Countries</h3>`));

        listCountries(continent);
        showContinentImg(continent);

        for(let key in continent['countries']){
            let country=continent['countries'][key];

            addCountryInfo(country);
        }
    }
}
function listCountries(continent) {
    let countriesDiv=$('<div class="countries"></div>');
    $('.continent-data').append(countriesDiv);

    let countrySelect=$('<select class="dropdown-select">');
    countrySelect.append($('<option disabled selected value> -- select an option -- </option>'));
    for(let key in continent['countries']){
        let country=continent['countries'][key];

        countrySelect.append($(`<option value="Bulgaria">${country['name']}</option>`));
    }

    countriesDiv.append(countrySelect);
}
function showContinentImg(continent) {
    let imgUrl='images/'+ continent['name'].toLowerCase()+'.png';

    let continentImg=$(`<img src=${imgUrl}>`);

    let divImg=$('<div class="continent-image"></div>');
    divImg.append(continentImg);

    $('.continent-data').append(divImg);
}
function addCountryInfo(country) {
    $('.continent-country').append($(`<div class="country-title"><h2>${country['name']}</h2></div>`));

    let countryData=$(`<div class="country-data"></div>`);

    countryData
        .append($(`<div class="country-capital"><strong>Capital:</strong><div>${country['capital']}</div></div>`))
        .append($(`<div class="country-official-language"><strong>Official Language:</strong><div>${country['officialLanguage']}</div></div>`))
        .append($(`<div class="country-population"><strong>Population:</strong><div>${country['population']}</div></div>`))
        .append($(`<div class="country-area"><strong>Area:</strong><div>${country['area']}</div></div>`))
        .append($(`<div class="country-political-status"><strong>Political Status:</strong><div>${country['politicalStatus']}</div></div>`));
    if(country['politicalStatus']==='Republic'){
        countryData.append($(`<div class="country-president"><strong>President:</strong><div>${country['president']}</div></div>`));
    } else{
        countryData.append($(`<div class="country-monarch"><strong>Monarch:</strong><div>${country['monarch']}</div></div>`));
    }
    countryData.append($(`<div class="country-official-currenc"><strong>Official Currency:</strong><div>${country['officialCurrency']}</div></div>`));

    $('.continent-country').append(countryData);
}

//PROBLEM 3
function attachEvents(continents) {
    for (let key in continents) {
        let continent = continents[key];

        let continentDiv = $('<div class="continent"></div>');

        $('.continents').append(continentDiv);
        continentDiv.append($(`<h5 class="continent-title">${continent['name']}</h5>`));
    }
    $('.continent').click(function (e) {
        e.preventDefault();

        $('.continent-data').empty().show();
        $('.continent-country').empty().show();

        let continent=continents[`${$(this).find('.continent-title').text()}`];
        $('.continent-data').append($(`<h2 class="continent-title">${continent['name']}</h2>`));
        $('.continent-data').append($(`<h3 class="countries-title">Countries</h3>`));

        listCountries(continent);
        showContinentImg(continent);

        $('.dropdown-select').change(function (e) {
            e.preventDefault();

            $('.continent-country').empty();

            let country=$(".dropdown-select option:selected" ).text();
            console.log(country)

            addCountryInfo(continent['countries'][country]);
        })
    });
}

//PROBLEM 4
function getAllContinents() {
    let requestUrl='https://continental-drift.firebaseio.com/continents.json';

    $
        .get(requestUrl)
        .then(attachEvents)
        .catch(function (error) {console.log(error);});
}

//renderAllContinents(continents1);
//renderSingleContinent(continents1['Europe']);
//renderSingleCountry(continents1['Europe']['countries']['Bulgaria']);

//renderDataInHTML(continents2);

//attachEvents(continents1);

getAllContinents();

