import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const checkMemberDuplicate = (nickName, success, fail) => {
    return local.get(`/member/duplicate?name=${nickName}`, {headers : {'Authorization':null}})
    .then(success)
    .catch(fail)
}

const getMemberByNickName = (nickName, success, fail) => {
    local.get('/member', {"nickname" : nickName})
    .then(success)
    .fail(fail)
}

const getMemberByJWT = (success, fail) => {
    local.get('/member/me')
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

export { checkMemberDuplicate, getMemberByNickName, getMemberByJWT, updateMember, deleteMember,}