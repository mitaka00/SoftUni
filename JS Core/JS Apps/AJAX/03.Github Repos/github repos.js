function loadRepos() {
    let usernameInput=$('#username');
    let ul=$('#repos');
    ul.empty();

    let request={
        url:`https://api.github.com/users/${usernameInput.val()}/repos`,
        method:'GET',
        success:displayRepos,
        error:displayError,
    };
    $.ajax(request);

    function displayRepos(repos) {
        for (let repo of repos) {

           ul.append($(`<li><a href="${repo.html_url}">${repo.full_name}</a></li>`))
        }
    }

    function displayError(err) {
        ul.append($(`<li>Error</li>`))
    }
}