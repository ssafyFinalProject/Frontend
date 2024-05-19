import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const writeComment = (boardId, content) => {
    local.post('/comment', {boardId, content})
        .then((response) => {
            return response.data === 200;
        })
        .catch(() => {
            return false;
        })
}

const deleteComment = (id) => {
    local.delete('/comment', id)
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        })
}

const updateComment = (commentId, content) => {
    local.put('/comment', {commentId, content})
        .then((response) => {
            return response.data === 200;
        })
        .catch(() => {
            return false;
        })
}

export {writeComment, deleteComment, updateComment}