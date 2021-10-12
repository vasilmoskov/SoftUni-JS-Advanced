function solve(httpObject) {

    validateMethod(httpObject);
    validateUri(httpObject);
    validateVersion(httpObject);
    validateMessage(httpObject);

    return httpObject;

    function validateMethod(httpObject) {
        let method = httpObject.method;

        let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];

        if (!validMethods.includes(method) || method === undefined) {
            throw new Error('Invalid request header: Invalid Method')
        }
    }

    function validateUri(httpObject) {
        let uri = httpObject.uri;

        let regexUri = /^\*$|[a-zA-Z0-9.@#*&]+$/;

        if (!regexUri.test(uri) || uri === undefined) {
            throw new Error('Invalid request header: Invalid URI')
        }
    }

    function validateVersion(httpObject) {
        let version = httpObject.version;

        let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];

        if (!validVersions.includes(version) || version === undefined) {
            throw new Error('Invalid request header: Invalid Version')
        }
    }

    function validateMessage(httpObject) {
        let message = httpObject.message;

        // let regexMessage = /[0-9]*[\<\>\\\&\'\"]*/;
        let regexMessage = /^[<>\\&'"]*$/;

        if (!regexMessage.test(message) || message == undefined) {
            throw new Error('Invalid request header: Invalid Message')
        }
    }
}


try {
    console.log(solve({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }
    ))
} catch(e) {
    console.log(e.message);
} 