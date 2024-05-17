import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const checkMemberDuplicate = (nickName) => {
    local.post('/member/duplicate', {'name' : nickName}, {headers : {'Authorization':null}})
    .then((response) => {
        return response.data;
    })
    .catch(() => {
        window.alert('알 수 없는 오류가 발생했습니다.');
    })
}

const getMemberByNickName = (nickName) => {
    local.get('/member', {'nickname' : nickName})
    .then((response) => {
        return response.data;
    })
    .catch(() => {
        window.alert('알 수 없는 오류가 발생했습니다.');
    })
}

const getMemberByJWT = () => {
    local.get('/member/me')
    .then((response) => {
        return response.data;
    })
    .catch(() => {
        window.alert('알 수 없는 오류가 발생했습니다.');
    })

}

const updateMember = (curNickname, changeNickname) => {
    local.put('/member', {curNickname, changeNickname})
    .then((response) => {
        return response.data;
    })
    .catch(() => {
        window.alert('알 수 없는 오류가 발생했습니다.');
    })

}

const deleteMember = () => {
    const uuid = localStorage.getItem('uuid');
    local.delete('/member', {'id' : uuid})
    .then((response) => {
        return response.data;
    })
    .catch(() => {
        window.alert('알 수 없는 오류가 발생했습니다.');
    })
}

export { checkMemberDuplicate, getMemberByNickName, getMemberByJWT, updateMember, deleteMember,}