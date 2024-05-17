import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const login = (memberId, memberPassword) => {
    local.post('/auth/login', {'email' : memberId, 'password' : memberPassword})
        .then((response) => {
            const { signStatus, tokenDto } = response.data;

            if (signStatus !== "SINGIN") {
                return false;
            }
            
            const { accessToken, refreshToken } = tokenDto;
            localStorage.setItem("accessToken", accessToken);
            localStorage.setItem("refreshToken", refreshToken);
            
            return true;
        })
        .catch(() => {
            return false;
        })
}


//TODO : 회원가입 후 바로 로그인 되도록 할지 말지 결정
const signUp = (nickName, memberId, memberPassword) => {
    local.post('/auth/signup', {'nickname' : nickName, 'email' : memberId, 'password' : memberPassword})
    .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token', token);
    })
    .catch(() => {
    })
}

const logout = () => {
    local.get('/auth/logout')
    .then(() => {
        localStorage.removeItem('accessToken');
    })
    .catch(() => {
        window.alert('알 수 없는 오류가 발생했습니다.');
    })
}

export { login, signUp, logout }