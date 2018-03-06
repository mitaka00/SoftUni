function validateRequest(object) {
    let uriPattern=/^[a-z.0-9]+$/g;
    let msgPattern=/^[^\<\>\\\&\'\"]+$/g

    //find for method
    let method=object.method;
    if(method!=='GET' && method!=='POST' && method!=='DELETE' && method!=='CONNECT'){
        throw new Error("Invalid request header: Invalid Method" )
    }

    //find for uri
    let uri=object.uri;
    if(!uriPattern.test(uri) || uri===undefined){
        throw new Error("Invalid request header: Invalid URI" )
    }

    //find for version
    let version=object.version;
    if(version!=='HTTP/0.9' && version!=='HTTP/1.0' && version!=='HTTP/1.1' && version!=='HTTP/2.0'){
        throw new Error("Invalid request header: Invalid Version" )
    }

    //find for message
    let msg=object.message;
    if((!msgPattern.test(msg) && msg!=='') || msg===undefined){
        throw new Error("Invalid request header: Invalid Message" )
    }

    return object
}
validateRequest({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});
