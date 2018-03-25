function attachEvents() {
    $('#btnLoad').click(loadContacts);
    $('#btnCreate').click(addContact);
    let phonebook=$('#phonebook');

    function loadContacts() {
        phonebook.empty();
        let request= {
            url:'https://phonebook-nakov.firebaseio.com/phonebook.json',
            success:showContacts,
            error:displayError,
        };

        $.ajax(request);

        function showContacts(contacts) {
            for (let key in contacts) {
                if(contacts[key]===null) {
                    continue;
                }

                let contact=contacts[key];

                let li=$(`<li>${contact['person']}: ${contact['phone']}</li>`);

                let deleteBtn=$('<button>[Delete]</button>').click(()=>deleteContact(key)); //.click(deleteContact.bind(this, key))
                li.append(deleteBtn);

                phonebook.append(li);
            }
        }
    }
    function displayError(err) {
        phonebook.append($(`<li>Error</li>`))
    }

    function addContact() {
        if($(`#person`).val()!=='' && $('#phone').val()!=='') {
            let newContact = JSON.stringify({
                person: $(`#person`).val(),
                phone: $('#phone').val()
            });

            let request = {
                url: 'https://phonebook-nakov.firebaseio.com/phonebook.json',
                method: "POST",
                data: newContact,
                success: loadContacts,
                error: displayError,
            };

            $.ajax(request);

            $(`#person`).val('');
            $('#phone').val('');
        }
    }

    function deleteContact(id) {
        $.ajax({
            url:`https://phonebook-nakov.firebaseio.com/phonebook/${id}.json`,
            method:'DELETE',
            success:loadContacts,
            error:displayError
        })
    }
}
