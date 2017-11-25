let firstExcInput = {
    name: 'Izgrev',
    longitude: '95.243',
    latitude: '94.231',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Wartortle',
            power: 500,
            evolvedFrom: 'Squirtle',
            evolvesTo: 'Blastoise'
        },
        2: {
            name: 'CherryBerry',
            power: 9999,
            evolvedFrom: 'Cherry',
            evolvesTo: 'Berry'
        }
    }
};
//renderData(firstExcInput);

function renderData(location) {
    console.log('Location: '+location['name']);
    console.log('Longitude: '+ location['longitude'] + ' Latitude: ' + location['latitude'])
    console.log('Pokemons:');

    let pokemons=location['pokemons'];

    if(pokemons) {
        for(let index in pokemons) {
            let pokemon=pokemons[index];
            console.log('###Name: ' + pokemon['name']);
            console.log('###Power: ' + pokemon['power'] + 'pp');
            console.log('###Evolved From: ' + pokemon['evolvedFrom']);
            console.log('###Evolves To: ' + pokemon['evolvesTo']);
        }
    }
}
let secondExcInput = {
    name: 'Dianabad',
    longitude: '95.242',
    latitude: '94.123',
    pokemons: {
        0: {
            name: 'Pikachu',
            power: 2000,
            evolvedFrom: 'none',
            evolvesTo: 'Raichu'
        },
        1: {
            name: 'Bulbasaur',
            power: 1000,
            evolvedFrom: 'Something',
            evolvesTo: 'Something else'
        }
    }
};
//renderDataInHTML(secondExcInput);

function renderDataInHTML(location) {
    let containerDiv=$('<div class="container"></div>');
    let resultDiv=$('<div class="result"></div>');

    let locationDiv=$('<div class="location"></div>');
    let pokemonsDiv=$('<div class="pokemons"></div>');

    renderLocation(locationDiv,location);
    renderPokemons(pokemonsDiv, location['pokemons']);

    $('body').append(containerDiv);
    containerDiv.append(resultDiv);
    resultDiv.append(locationDiv);
    resultDiv.append(pokemonsDiv);

}

function renderLocation(locationDiv, location) {
    let locationName=$(`<h1 class="location-name">Location: ${location['name']}</h1>`);
    let cordinatesDiv=$('<div class="location-coordinates">');

    cordinatesDiv
        .append($(`<h2 class="location-longitude">Longitude: ${location['longitude']}</h2>`))
        .append($(`<h2 class="location-latitude">Latitude: ${location['latitude']}</h2>`));

    locationDiv.append(locationName);
    locationDiv.append(cordinatesDiv);
}

function renderPokemons(pokemonsDiv, pokemons) {
    if(pokemons) {
        for(let index in pokemons) {
            let pokemon=pokemons[index];

            let pokemonDiv=$('<div class="pokemon">');
            let pokemonStats=$('<div class="pokemon-stats">');

            pokemonStats
                .append($(`<div class="pokemon-name">Name: ${pokemon['name']}</div>`))
                .append($(`<div class="pokemon-power">Power: ${pokemon['power']}pp</div>`))
                .append($(`<div class="pokemon-evolved-from">Evolved From: ${pokemon['evolvedFrom']}</div>`))
                .append($(`<div class="pokemon-evolves-to">Evolves To: ${pokemon['evolvesTo']}</div>`));

            pokemonDiv
                .append($(`<div class="pokemon-title">${pokemon['name']}</div>`))
                .append(pokemonStats);

            pokemonsDiv.append(pokemonDiv);
        }
    }
}
//attachEvents();

function attachEvents() {
    $('.location-form').click(function (e) {
        e.preventDefault();

        let inputValue=$('.location-input').val();

        if(inputValue.length>0){
            $('.result').append(`<div class="result-element">${inputValue}</div>`);

            $('.location-input').val("");
        }
    })
}

//PROBLEM 4
function attachFormEvents() {
    $('.location-form').click(function (e) {
        e.preventDefault();

        let inputValue=$('.location-input').val();

        if(inputValue.length>0){
            obtainData(inputValue);

            $('.location-input').val("");
        }
    })
}

function obtainData(location) {
    $
        .get('https://pokemoncodex.firebaseio.com/locations/'+ location+'.json')
        .then(renderLocationDataInHTML)
        .catch(function (error) {console.log(error);});
}
function renderLocationDataInHTML(location) {
    $('.result').empty();
    $('.result').show();

    if(!location){
        $('.result').append($('<div class="error">Error loading location.</div>'));
        return;
    }

    let locationDiv = $('<div class="location"></div>');
    let pokemonsDiv = $('<div class="pokemons"></div>');

    renderLocation(locationDiv, location);
    renderPokemons(pokemonsDiv, location['pokemons']);

    $('.result')
        .append(locationDiv)
        .append(pokemonsDiv);

    attachAccordionEvents();
}
function attachAccordionEvents() {
    $('.pokemon-title').click(function (e) {
        e.preventDefault();

        var $this=$(this);

        if($this.next().hasClass('show')){
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else{
            $this.parent().parent().find('pokemon-title').removeClass('show');
            $this.parent().parent().find('pokemon-title').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    })
}

attachFormEvents();