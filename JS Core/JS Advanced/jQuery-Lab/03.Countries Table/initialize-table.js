function initializeTable() {
    $('#createLink').click(createCountry);

    addCountryToTable('Bulgaria','Sofia');
    addCountryToTable('Germany','Berlin');
    addCountryToTable('Russia','Moscow');

    function createCountry() {
        let country=$('#newCountryText').val();
        let capital=$('#newCapitalText').val();

        $('#newCountryText').val('');
        $('#newCapitalText').val('');

        addCountryToTable(country,capital)
    }
    
    function addCountryToTable(country,capital) {
        let row = $('<tr>')
            .append($("<td>").text(country))
            .append($("<td>").text(capital))
            .append($("<td>")
                .append($("<a href='#'>[Up]</a>").click(up))
                .append(" ")
                .append($("<a href='#'>[Down]</a>").click(down))
                .append(" ")
                .append($("<a href='#'>[Delete]</a>").click(deleteRow)));
        row.css('display','none');
        $("#countriesTable").append(row);
        row.fadeIn();
        fix()
    }

    function up() {
        let currentRow=$(this).parent().parent();

        currentRow.fadeOut(function () {
            currentRow.insertBefore(currentRow.prev());
            currentRow.fadeIn();
            fix()
        })
    }

    function down() {
        let currentRow=$(this).parent().parent();

        currentRow.fadeOut(function () {
            currentRow.insertAfter(currentRow.next());
            currentRow.fadeIn();
            fix()
        })
    }

    function deleteRow() {
        $(this).parent().parent().remove();
        fix()
    }

    function fix() {
        $('#countriesTable a').css('display','inline');

        $('tr:nth-child(3) a:contains("Up")').css('display','none');
        $('tr:last-child a:contains("Down")').css('display','none')
    }
}
