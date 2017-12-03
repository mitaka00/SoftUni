let punshes = {
    0: {
        name: "One Punsh Man",
        type: "Strong",
        contents: "Very little Vodka, Very little Brendy, Very little Wine, Very little Whiskey, Very little Tequila and a lot of Watermelon Juice.",
        description: "This punsh was discovered in an unknown house party, when there was almost no alcohol left, and the people had to combine a little from every alchohol. One Punsh of this is enough to knock you down for good, hence the name."
    },
    1: {
        name: "Wine Punsh",
        type: "Sweet",
        contents: "Wine, Apple Juice, Ice.",
        description: "Casual Wine Punsh, for the ladies that love wine. It is not very strong, it is actually sweet. Sweet enough to make them sweetly drunk and playful."
    },
    2: {
        name: "Punsh Out",
        type: "Sweet",
        contents: "Champagne, Watermellon Juice, Ice.",
        description: "This is a very sweet, almost non-alchoholic, punsh. Very suitable for ladies, which want to keep their manners but have a little fun at a party."
    }
};

attachPunshesEvents(punshes);


function attachPunshesEvents(punshes) {
   renderAllPunshesInHTML(punshes);

    $('.navbar-item').click(function (e) {
        e.preventDefault();

        let clickedValue=$(this).text();

        $('.navbar-items').remove();

        renderSinglePunshInHTML(punshes,clickedValue);

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