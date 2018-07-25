let appKey='kid_HkPyH6eX7';
let appSecret='5110fa2733374292b1793f24a16abddd'
let hostUrl='https://baas.kinvey.com';
let masterSecret='9c397b386b744aa5afa3828a84f46899'

let requester={
    register: payload=>{ 
        return fetch(`${hostUrl}/user/${appKey}`,{
            method:'POST',
            headers:{
                'Authorization': 'Basic ' + btoa(`${appKey}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'username':payload.username,
                'password':payload.password,
                'role':payload.role
            })
        }).then(res=>{
            return res.json()
        })
    },
    login: payload=>{
        return fetch(`${hostUrl}/user/${appKey}/login`,{
            method:'POST',
            headers:{
                'Authorization': 'Basic ' + btoa(`${appKey}:${appSecret}`),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'username':payload.username,
                'password':payload.password,
            })
        }).then(res=>{
            return res.json()
        })
    },

    addPost: payload=>{
        return fetch(`${hostUrl}/appdata/${appKey}/posts`,{
            method:'POST',
            headers:{
                'Authorization': 'Kinvey ' +localStorage.getItem('token'),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'title':payload.title,
                'description':payload.description,
                'typeAnimal':payload.typeAnimal,
                'price':payload.price,
                'imageUrl':payload.imageUrl,
                'author':payload.author
            })
        }).then(res=>{
            return res.json()
        })
    },

    listAllPosts: function(){
        return fetch(`${hostUrl}/appdata/${appKey}/posts?query={}&sort={"_kmd.ect": -1}`,{
            method:'GET',
            headers:{
                'Authorization': 'Basic ' + btoa(`${appKey}:${masterSecret}`),
            }
        }).then(res=>{
            return res.json()
        }) 
    },

    listMyPosts: username=>{
        return fetch(`${hostUrl}/appdata/${appKey}/posts?query={"author":"${username}"}&sort={"_kmd.ect": -1}`,{
            method:'GET',
            headers:{
                'Authorization': 'Basic ' + btoa(`${appKey}:${masterSecret}`),
            }
        }).then(res=>{
            return res.json()
        }) 
    },

    deletePost: id=>{
        return fetch(`${hostUrl}/appdata/${appKey}/posts/${id}`,{
            method:'DELETE',
            headers:{
                'Authorization': 'Basic ' + btoa(`${appKey}:${masterSecret}`),
            }
        }).then(res=>{
            return res.json()
        }) 
    },

    getPost: function(id){
        return fetch(`${hostUrl}/appdata/${appKey}/posts/${id}`,{
            method:'GET',
            headers:{
                'Authorization': 'Kinvey ' +localStorage.getItem('token'),
            }
        }).then(res=>{
            return res.json()
        }) 
    },

    editPost: function(id,payload){
        return fetch(`${hostUrl}/appdata/${appKey}/posts/${id}`,{
            method:'PUT',
            headers:{
                'Authorization': 'Basic ' + btoa(`${appKey}:${masterSecret}`),
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                'title':payload.title,
                'description':payload.description,
                'typeAnimal':payload.typeAnimal,
                'price':payload.price,
                'imageUrl':payload.imageUrl,
                'author':payload.author
            })
        }).then(res=>{
            return res.json()
        })
    },

    //admin func
    adminDeletePost: id=>{
        return fetch(`${hostUrl}/appdata/${appKey}/posts/${id}`,{
            method:'DELETE',
            headers:{
                'Authorization': 'Basic ' +localStorage.getItem('token'),
            }
        }).then(res=>{
            return res.json()
        }) 
    },
}

export default requester