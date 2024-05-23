import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const checkMemberDuplicate = (nickName) => {
    return local.get(`/member/duplicate/nickname?name=${nickName}`, {headers : {'Authorization':null}})
}

const checkEmailDuplicate = (email) => {
    return local.get(`/member/duplicate/email?email=${email}`, {headers : {'Authorization':null}})

}

const getMemberByNickName = (nickName, success, fail) => {
    local.get('/member', {"nickname" : nickName})
    .then(success)
    .fail(fail)
}

const getMemberByJWT = (success, fail) => {
    localAxios().get('/member/me')
    .then(success)
    .catch(fail)
}

const updateMember = (updateMemberRequest, success, fail) => {
    local.put('/member', updateMemberRequest)
    .then(success)
    .catch(fail)
}

const deleteMember = (success, fail) => {
    const uuid = localStorage.getItem('uuid');
    local.delete('/member', {"id" : uuid})
    .then(success)
    .catch(fail)
}

export { checkMemberDuplicate, checkEmailDuplicate,  getMemberByNickName, getMemberByJWT, updateMember, deleteMember,}