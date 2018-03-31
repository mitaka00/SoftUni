function attachEvents() {
    $('#btnLoadPosts').click(loadPosts);
    $('#btnViewPost').click(viewPosts);

    let postBody=$('#post-body');
    let postComments=$('#post-comments');
    let posts=$('#posts');
    let postTitle=$('#post-title');

    function loadPosts() {
        postBody.empty();
        posts.empty();

        let request={
            url:'https://baas.kinvey.com/appdata/kid_B1qkwuj5G/posts',
            headers:{
                'Authorization':'Basic ' + btoa('pesho:p')
            },
            success:fillSelect,
            error:displayError
        };

        $.ajax(request);

        function fillSelect(data) {
            for (let key in data) {
                let post=data[key];

                posts.append($(`<option value="${post._id}">${post.title}</option>`))
            }
        }
    }

    function viewPosts() {
        postBody.empty();
        postComments.empty();
        postTitle.empty();

        let currentOption=posts.find(`option:selected`);

        let postsRequest=$.ajax({
            url:`https://baas.kinvey.com/appdata/kid_B1qkwuj5G/posts/${currentOption.val()}`,
            headers:{
                'Authorization':'Basic ' + btoa('pesho:p')
            }
        });

        let commentsRequest=$.ajax({
            url:`https://baas.kinvey.com/appdata/kid_B1qkwuj5G/comments/?query={"post_id":"${currentOption.val()}"}`,
            headers:{
                'Authorization':'Basic ' + btoa('pesho:p')
            }
        });

        Promise.all([postsRequest,commentsRequest])
            .then(displayPostAndComments)
            .catch(displayError);

        function displayPostAndComments([postRequest,commentsRequest]) {
            postTitle.text(postRequest.title);
            postBody.text(postRequest.body);

            for (let key in commentsRequest) {
                let comment=commentsRequest[key];

                postComments.append($(`<li>${comment.text}</li>`))
            }
        }
    }

    function displayError(err) {
        postBody.append($(`<li>${err.statusText}</li>`))
    }
}