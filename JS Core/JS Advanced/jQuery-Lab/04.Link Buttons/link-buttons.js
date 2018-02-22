function attachEvents() {
    $('a').click(clicked);

    function clicked(event) {
        $('.selected').removeClass('selected');

        $(this).addClass('selected')
    }
}
