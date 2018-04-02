const BASE_URL = 'https://baas.kinvey.com/'
const APP_KEY = 'kid_BJCfsj9B'
const APP_SECRET = 'e2bfc81da6c4490eb548e16a24b27c56'
const AUTH_HEADERS = {'Authorization': "Basic " + btoa(APP_KEY + ":" + APP_SECRET)}
const BOOKS_PER_PAGE = 10

function loginUser() {
    let username = $('#formLogin input[name=username]').val()
    let password = $('#formLogin input[name=passwd]').val()
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/login',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        console.log(res)
        signInUser(res, 'Login successful.')
    }).catch(handleAjaxError)
}

function registerUser() {
    let username = $('#formRegister input[name=username]').val()
    let password = $('#formRegister input[name=passwd]').val()
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'user/' + APP_KEY + '/',
        headers: AUTH_HEADERS,
        data: {username, password}
    }).then(function (res) {
        signInUser(res, 'Registration successful.')
    }).catch(handleAjaxError)
}

function listBooks() {
    $.ajax({
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function (res) {
        showView('viewBooks')
        displayPaginationAndBooks(res.reverse())
    }).catch(handleAjaxError)
}


function createBook() {
    let author = $('#formCreateBook input[name=author]').val()
    let title = $('#formCreateBook input[name=title]').val()
    let description = $('#formCreateBook textarea[name=description]').val()
    $.ajax({
        method: 'POST',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books',
        data: {author, title, description},
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function (res) {
        listBooks()
        showInfo('Book created.')
    }).catch(handleAjaxError)
}

function deleteBook(book) {
    $.ajax({
        method: 'DELETE',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + book._id,
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')}
    }).then(function () {
        listBooks()
        showInfo('Book deleted.')
    }).catch(handleAjaxError)
}

function loadBookForEdit(book) {
    showView('viewEditBook')
    $('#formEditBook input[name=id]').val(book._id)
    $('#formEditBook input[name=title]').val(book.title)
    $('#formEditBook input[name=author]').val(book.author)
    $('#formEditBook textarea[name=description]').val(book.description)
}

function editBook() {
    let id = $('#formEditBook input[name=id]').val()
    let title = $('#formEditBook input[name=title]').val()
    let author = $('#formEditBook input[name=author]').val()
    let description = $('#formEditBook textarea[name=description]').val()

    $.ajax({
        method: 'PUT',
        url: BASE_URL + 'appdata/' + APP_KEY + '/books/' + id,
        headers: {'Authorization': 'Kinvey ' + sessionStorage.getItem('authToken')},
        data: {title, author, description}
    }).then(function (res) {
        listBooks()
        showView('viewBooks')
        showInfo('Book edited.')
    })
}

function logoutUser() {
    sessionStorage.clear()
    showHomeView()
    showHideMenuLinks()
    showInfo('Logout successful.')
}

function signInUser(res, message) {
    sessionStorage.setItem('username', res.username)
    sessionStorage.setItem('authToken', res._kmd.authtoken)
    sessionStorage.setItem('userId', res._id)
    showHomeView()
    showHideMenuLinks()
    showInfo(message)
}

function displayPaginationAndBooks(books) {
    let pagination = $('#pagination-demo')
    if(pagination.data("twbs-pagination")){
        pagination.twbsPagination('destroy')
    }
    pagination.twbsPagination({
        totalPages: Math.ceil(books.length / BOOKS_PER_PAGE),
        visiblePages: 5,
        next: 'Next',
        prev: 'Prev',
        onPageClick: function (event, page) {
            let table = $('#books > table')
            table.find('tr').each((index, el) => {
                if(index > 0) {
                    $(el).remove()
                }
            })
            let startBook = (page - 1) * BOOKS_PER_PAGE
            let endBook = Math.min(startBook + BOOKS_PER_PAGE, books.length)
            $(`a:contains(${page})`).addClass('active')
            for (let i = startBook; i < endBook; i++) {
                let tr = $(`<tr>`)
                table.append(
                    $(tr).append($(`<td>${books[i].title}</td>`))
                        .append($(`<td>${books[i].author}</td>`))
                        .append($(`<td>${books[i].description}</td>`))
                )
                if(books[i]._acl.creator === sessionStorage.getItem('userId')) {
                    $(tr).append(
                        $(`<td>`).append(
                            $(`<a href="#">[Edit]</a>`).on('click', function () {
                                loadBookForEdit(books[i])
                            })
                        ).append(
                            $(`<a href="#">[Delete]</a>`).on('click', function () {
                                deleteBook(books[i])
                            })
                        )
                    )
                }
            }
        }
    })
}

function handleAjaxError(response) {
    let errorMsg = JSON.stringify(response)
    if (response.readyState === 0)
        errorMsg = "Cannot connect due to network error."
    if (response.responseJSON && response.responseJSON.description)
        errorMsg = response.responseJSON.description
    showError(errorMsg)
}