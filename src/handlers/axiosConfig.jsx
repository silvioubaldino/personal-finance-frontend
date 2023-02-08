const baseUrl= "http://127.0.0.1:8080"

function setToken(instance, token) {
    instance.headers.common["token"] = token
}

export {setToken, baseUrl}