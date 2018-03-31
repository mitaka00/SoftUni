function attachEvents() {
    const baseUrl='https://baas.kinvey.com/appdata/kid_Bktxg769G/biggestCatches';
    let catches=$('#catches');

    $('.add').click(addCatch);
    $('.load').click(loadCatches);

    async function addCatch() {
        let container=$(this).parent();

        let newCatch=JSON.stringify({
            angler:container.find('.angler').val(),
            weight:Number(container.find('.weight').val()),
            species:container.find('.species').val(),
            location:container.find('.location').val(),
            bait:container.find('.bait').val(),
            captureTime:Number(container.find('.captureTime').val())
        });

        let request={
            url:baseUrl,
            method:'POST',
            headers:{
                'Authorization':'Basic ' + btoa('pesho:p'),
                'Content-type': 'application/json'
            },
            data:newCatch,
            success:loadCatches,
            error:displayError
        };

        await $.ajax(request);

        //clear inputs
        container.find('.angler').val('');
        container.find('.weight').val('');
        container.find('.species').val('');
        container.find('.location').val('');
        container.find('.bait').val('');
        container.find('.captureTime').val('');
    }

    function loadCatches() {
        let request={
            url:baseUrl,
            headers:{
                'Authorization':'Basic ' + btoa('pesho:p'),
            },
            success:displayCatches,
            error:displayError
        };

        $.ajax(request);
    }

    function displayError(err) {
        alert('Error: ' + err.statusText);
    }

    function displayCatches(data) {
        catches.empty();

        for (let person of data) {
            let currentCatchContainer=$(`<div class="catch" data-id="${person._id}"></div>`);

            currentCatchContainer
                .append($('<label>Angler</label>'))
                .append($(`<input type="text" class="angler" value="${person.angler}">`))
                .append($('<label>Weight</label>'))
                .append($(`<input type="number" class="weight" value="${Number(person.weight)}">`))
                .append($('<label>Species</label>'))
                .append($(`<input type="text" class="species" value="${person.species}">`))
                .append($('<label>Location</label>'))
                .append($(`<input type="text" class="location" value="${person.location}">`))
                .append($('<label>Bait</label>'))
                .append($(`<input type="text" class="bait" value="${person.bait}">`))
                .append($('<label>Capture Time</label>'))
                .append($(`<input type="number" class="captureTime" value="${Number(person.captureTime)}">`))
                .append($(`<button class="update">Update</button>`).click(updateCatch))
                .append($(`<button class="delete">Delete</button>`).click(deleteCatch));

            catches.append(currentCatchContainer);
        }
    }

    function updateCatch() {
        let container=$(this).parent();
        let searchedId=$(this).parent().attr('data-id');

        let changedCatch=JSON.stringify({
            angler:container.find('.angler').val(),
            weight:Number(container.find('.weight').val()),
            species:container.find('.species').val(),
            location:container.find('.location').val(),
            bait:container.find('.bait').val(),
            captureTime:Number(container.find('.captureTime').val())
        });

        let request={
            url:baseUrl+ '/' + searchedId,
            method:'PUT',
            data:changedCatch,
            headers:{
                'Authorization':'Basic ' + btoa('pesho:p'),
                'Content-type': 'application/json'
            },
            success:loadCatches,
            error:displayError
        };

        $.ajax(request);
    }

    function deleteCatch() {
        let searchedId=$(this).parent().attr('data-id');

        let request={
            url:baseUrl+ '/' + searchedId,
            method:'DELETE',
            headers:{
                'Authorization':'Basic ' + btoa('pesho:p'),
            },
            success:loadCatches,
            error:displayError
        };

        $.ajax(request);
    }
}