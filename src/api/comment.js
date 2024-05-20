import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const writeComment = (writeCommentRequest, success, fail) => {
    local.post('/comment', writeCommentRequest)
        .then(success)
        .catch(fail)
}

const deleteComment = (id, success, fail) => {
    local.delete(`/comment?id=${id}`)
        .then(success)
        .catch(fail)
}

const updateComment = (updateCommentRequest, success, fail) => {
    local.put('/comment', updateCommentRequest)
        .then(success)
        .catch(fail)
}

export {writeComment, deleteComment, updateComment}