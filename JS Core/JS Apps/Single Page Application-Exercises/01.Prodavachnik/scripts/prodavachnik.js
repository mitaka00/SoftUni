function startApp() {
    //sessionStorage.clear();
    showHideMenuLinks();
    showView('viewHome');

    // Bind the navigation menu links
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkListAds").click(listAdverts);
    $("#linkCreateAd").click(showCreateAdView);
    $("#linkLogout").click(logoutUser);

    // Bind the form submit buttons
    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);
    $("#buttonCreateAd").click(createAdvert);
    $("#buttonEditAd").click(editAdvert);

    // Bind the info / error boxes
    $("#infoBox, #errorBox").click(function() {
        $(this).fadeOut();
    });

    // Attach AJAX "loading" event listener
    $(document).on({
        ajaxStart: function() { $("#loadingBox").show() },
        ajaxStop: function() { $("#loadingBox").hide() }
    });

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppKey = "kid_SJ49tcJsf";
    const kinveyAppSecret = "de102728f4de440eac0b16ca1738fea6";

    function showView(viewName) {
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();
    }

    function showHideMenuLinks() {
        $("#linkHome").show();
        if (sessionStorage.getItem('authToken') === null) {
            // No logged in user
            $("#linkLogin").show();
            $("#linkRegister").show();
            $("#linkListAds").hide();
            $("#linkCreateAd").hide();
            $("#linkLogout").hide();
            $('#loggedInUser').hide();
        } else {
            // We have logged in user
            $("#linkLogin").hide();
            $("#linkRegister").hide();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
            $('#loggedInUser').show();
        }
    }

    function showInfo(message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(function() {
            $('#infoBox').fadeOut();
        }, 3000);
    }

    function showError(errorMsg) {
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }

    function handleAjaxError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON && response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        showError(errorMsg);
    }

    function showHomeView() {
        showView('viewHome');
    }

    function showLoginView() {
        showView('viewLogin');
        $('#formLogin').trigger('reset');
    }

    function showRegisterView() {
        $('#formRegister').trigger('reset');
        showView('viewRegister');
    }

    function showCreateAdView() {
        $('#formCreateAd').trigger('reset');
        showView('viewCreateAd');
    }

    // user/login
    function loginUser() {
        let username = $(`#formLogin input[name=username]`).val();
        let password = $(`#formLogin input[name=passwd]`).val();
        $.ajax({
            method: 'POST',
            url: kinveyBaseUrl + 'user/' + kinveyAppKey + '/login',
            headers: {
                'Authorization': 'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
            },
            data: {username, password},
            success:loginSuccess,
            error:handleAjaxError
        });

        function loginSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAdverts();
            showInfo('Login successful.');
        }

    }

    function saveAuthInSession(userInfo) {
        sessionStorage.setItem('authToken', userInfo._kmd.authtoken);
        sessionStorage.setItem('userId', userInfo._id);

        $('#loggedInUser').text("Welcome, " + userInfo.username + "!");
    }

    // user/register
    function registerUser() {
        let username = $(`#formRegister input[name=username]`).val();
        let password = $(`#formRegister input[name=passwd]`).val();
        $.ajax({
            method: 'POST',
            url: kinveyBaseUrl + 'user/' + kinveyAppKey + '/',
            headers: {
                'Authorization': 'Basic ' + btoa(kinveyAppKey + ':' + kinveyAppSecret)
            },
            data: {username, password},
            success:registerSuccess,
            error:handleAjaxError
        });

        function registerSuccess(userInfo) {
            saveAuthInSession(userInfo);
            showHideMenuLinks();
            listAdverts();
            showInfo('User registration successful.');
        }
    }

    // user/logout
    function logoutUser() {
        sessionStorage.clear();
        $('#loggedInUser').text("");
        showView('viewHome');
        showHideMenuLinks();
        showInfo('Logout successful.')
    }

    // advertisement/all
    function listAdverts() {
        $('#ads').empty();
        showView('viewAds');

        $.ajax({
            url: kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/adverts',
            headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')},
            success:listSuccess,
            error:handleAjaxError
        });
        
        function listSuccess(data) {
            if(data.length===0){
                $('#ads').text('No advertisements available.');
            } else {
                let advertsTable = $('<table>')
                    .append($('<tr>').append(
                        '<th>Title</th>',
                        '<th>Description</th>',
                        '<th>Publisher</th>',
                        '<th>Date Published</th>',
                        '<th>Price</th>',
                        '<th>Actions</th>')
                    );

                for (let advert of data) {
                    let readMoreLink = $(`<a data-id="${advert._id}" href="#">[Read More]</a>`)
                        .click(function() { displayAdvert($(this).attr("data-id")) });
                    let links = [readMoreLink];

                    if (advert._acl.creator === sessionStorage['userId']) {
                        let deleteLink = $(`<a data-id="${advert._id}" href="#">[Delete]</a>`)
                            .click(function() { deleteAdvert($(this).attr("data-id")) });
                        let editLink = $(`<a data-id="${advert._id}" href="#">[Edit]</a>`)
                            .click(function() { loadAdvertForEdit($(this).attr("data-id")) });
                        links = [readMoreLink, ' ', deleteLink, ' ', editLink];
                    }

                    advertsTable.append($('<tr>').append(
                        $('<td>').text(advert.title),
                        $('<td>').text(advert.description),
                        $('<td>').text(advert.publisher),
                        $('<td>').text(advert.datePublished),
                        $('<td>').text(advert.price),
                        $('<td>').append(links)
                    ));
                }
                $('#ads').append(advertsTable);
            }
        }
    }

    // advertisement/create
    function createAdvert() {
        const kinveyAuthHeaders = {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };

        const kinveyUserUrl =
            `${kinveyBaseUrl}user/${kinveyAppKey}/${sessionStorage.getItem('userId')}`;

        $.ajax({
            method: "GET",
            url: kinveyUserUrl,
            headers: kinveyAuthHeaders,
            success: afterPublisherRequest,
            error: showError
        });

        function afterPublisherRequest(publisher) {
            let advertData = {
                title: $('#formCreateAd input[name=title]').val(),
                description: $('#formCreateAd textarea[name=description]').val(),
                publisher: publisher.username,
                datePublished: $('#formCreateAd input[name=datePublished]').val(),
                price: Number($('#formCreateAd input[name=price]').val()),
                image: $('#formCreateAd input[name=image]').val()
            };

            const kinveyAdvertsUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts";
            $.ajax({
                method: "POST",
                url: kinveyAdvertsUrl,
                headers: kinveyAuthHeaders,
                data: advertData,
                success: createAdvertSuccess,
                error: handleAjaxError
            });

            function createAdvertSuccess(response) {
                listAdverts();
                showInfo('Advertisement created.');
            }
        }
    }


    // advertisement/delete
    function deleteAdvert(advertId) {
        $.ajax({
            method: 'DELETE',
            url: kinveyBaseUrl + 'appdata/' + kinveyAppKey + '/adverts/' + advertId,
            headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')},
            success:deleteSuccess,
            error:handleAjaxError
        });

        function deleteSuccess() {
            listAdverts();
            showInfo('Advert deleted')
        }
    }

    //read more
    function displayAdvert(advertId){
        const kinveyAdvertUrl = kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts/" + advertId;
        const kinveyAuthHeaders = {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };

        $.ajax({
            method: "GET",
            url: kinveyAdvertUrl,
            headers: kinveyAuthHeaders,
            success: displayAdvertSuccess,
            error: handleAjaxError
        });

        $('#viewDetailsAd').empty();

        function displayAdvertSuccess(advert) {
            let advertInfo = $('<div>').append(
                $('<img>').attr("src", advert.image),
                $('<br>'),
                $('<label>').text('Title:'),
                $('<h1>').text(advert.title),
                $('<label>').text('Description:'),
                $('<p>').text(advert.description),
                $('<label>').text('Publisher:'),
                $('<div>').text(advert.publisher),
                $('<label>').text('Date:'),
                $('<div>').text(advert.datePublished),
        );

            $('#viewDetailsAd').append(advertInfo);

            showView('viewDetailsAd');
        }
    }

    // advertisement/edit GET
    function loadAdvertForEdit(advertId) {
        const kinveyBookUrl = kinveyBaseUrl + "appdata/" +
            kinveyAppKey + "/adverts/" + advertId;
        const kinveyAuthHeaders = {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };

        $.ajax({
            method: "GET",
            url: kinveyBookUrl,
            headers: kinveyAuthHeaders,
            success: loadAdvertForEditSuccess,
            error: handleAjaxError
        });

        function loadAdvertForEditSuccess(advert) {
            $('#formEditAd input[name=id]').val(advert._id);
            $('#formEditAd input[name=title]').val(advert.title);
            $('#formEditAd input[name=publisher]').val(advert.publisher);
            $('#formEditAd textarea[name=description]').val(advert.description);
            $('#formEditAd input[name=datePublished]').val(advert.datePublished);
            $('#formEditAd input[name=price]').val(advert.price);
            $('#formEditAd input[name=image]').val(advert.image);
            showView('viewEditAd');
        }
    }

    // advertisement/edit POST
    function editAdvert() {
        const kinveyAdvertUrl =  kinveyBaseUrl + "appdata/" + kinveyAppKey + "/adverts/" + $('#formEditAd input[name=id]').val();
        const kinveyAuthHeaders = {
            'Authorization': "Kinvey " + sessionStorage.getItem('authToken'),
        };

        let advertData = {
            title: $('#formEditAd input[name=title]').val(),
            description: $('#formEditAd textarea[name=description]').val(),
            publisher: $('#formEditAd input[name=publisher]').val(),
            datePublished: $('#formEditAd input[name=datePublished]').val(),
            price: $('#formEditAd input[name=price]').val(),
            image: $('#formEditAd input[name=image]').val()
        };

        $.ajax({
            method: "PUT",
            url: kinveyAdvertUrl,
            headers: kinveyAuthHeaders,
            data: advertData,
            success: editAdvertSuccess,
            error: handleAjaxError
        });

        function editAdvertSuccess(response) {
            listAdverts();
            showInfo('Advertisement edited.');
        }
    }
}
