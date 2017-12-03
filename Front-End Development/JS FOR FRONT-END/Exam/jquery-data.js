let punshes = {
    0: {
        name: "Punsh - The American Pie",
        type: "Strong",
        contents: "Some Apple Pie, Whiskey, Vodka, Orange Juice and some other things...",
        description: "By original recipe from the American Pie franchise, this punsh includes everything you would want in a college/university party."
    },
    1: {
        name: "Brendy Punsh",
        type: "Medium",
        contents: "Brendy, Apple Juice, Ice, Avocado Juice, some other strange fruits...",
        description: "The casual Brendy Punsh, quite expensive, nothing interesting here..."
    },
    2: {
        name: "Just Punsh it",
        type: "Sweet",
        contents: "Very Little Vodka, Orange Juice, Apple Juice, Banana Juice, Ice.",
        description: "A very comfortable taste for the lovers of weakly alchoholic drinks. The Just Pinsh It punsh is a sweet multi-vitamol drink, which cannot drunk you."
    }
};

renderAllPunshesInHTML(punshes);
renderSinglePunshInHTML(punshes, "Punsh - The American Pie");

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