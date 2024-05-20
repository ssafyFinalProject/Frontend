import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const login = (loginRequest, success, fail) => {
    local.post('/auth/login', loginRequest, {headers : {"Authorization":null}})
        .then(success)
        .catch(fail)
}

const signUp = (signUpRequest, success, fail) => {
    local.post('/auth/signup', signUpRequest, {headers : {"Authorization":null}})
    .then(success)
    .catch(fail)
}

const logout = (success, fail) => {
    local.get('/auth/logout')
    .then(success)
    .catch(fail)
}

export { login, signUp, logout }