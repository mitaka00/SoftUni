function renderPunshesNames() {
    $
        .get('https://punsh-master.firebaseio.com/data/punshes.json')
        .then(attachPunshesEvents)
        .catch(function (error) {console.log(error);});
}
function attachPunshesEvents(punshes) {
    renderAllPunshesInHTML(punshes);
    $('.navbar-item').click(function (e) {
        e.preventDefault();

        let clickedValue=$(this).text();

        $('.navbar-items').remove();

        $
            .get('https://punsh-master.firebaseio.com/data/punshes/' + clickedValue + '.json')
            .then(renderSinglePunshInHTML(punshes,clickedValue))
            .catch(function (error) {console.log(error);});

        attachBackEvents(punshes);
    })
}
function attachBackEvents(punshes) {
    $('.content-heading').click(function (e) {
        e.preventDefault();

        $('.content').empty();

        attachPunshesEvents(punshes);
    })
}
function renderAllPunshesInHTML(punshes) {
    let navbarItems=$('<div class="navbar-items"></div>');

    for(let key in punshes){
        let punsh=punshes[key];

        let navbarItem=$('<div class="navbar-item"></div>');

        navbarItem.append($(`<h4>${punsh['name']}</h4>`));

        navbarItems.append(navbarItem);
    }

    $('.navbar').append(navbarItems);
}
function renderSinglePunshInHTML(punshes, punshName) {
    let contentHeader=$('<div class="content-header"></div>');
    let punshData=$('<div class="punsh-data"></div>');

    let punishType=$('<div class="punsh-type"></div>');
    let punishContents=$('<div class="punsh-contents"></div>');
    let punishDescription=$('<div class="punsh-description"></div>');

    for(let key in punshes){
        let punsh=punshes[key];

        if(punsh['name']==punshName){
            let contentHeading=$('<div class="content-heading"></div>');
            contentHeading.append(punsh['name']);
            contentHeading.hover(function() {
                $(this).css('cursor','pointer');
            });


            contentHeader.append(contentHeading);

            punishType
                .append($(`<label>Type: </label>`))
                .append($(`<h6>${punsh['type']}</h6>`));
            punishContents
                .append($(`<label>Contents: </label>`))
                .append($(`<p>${punsh['contents']}</p>`));
            punishDescription
                .append($(`<label>Description: </label>`))
                .append($(`<p>${punsh['description']}</p>`));

            punshData
                .append(punishType)
                .append(punishContents)
                .append(punishDescription);

            $('.content')
                .append(contentHeader)
                .append(punshData);

            return;
        }
    }
}

renderPunshesNames();