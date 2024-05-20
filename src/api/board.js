import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const makeBoard = (makeBoardRequest, success, fail) => {
    local.post('/board', makeBoardRequest)
        .then(success)
        .catch(fail)
}

const getBoardList = (pageable, success, fail) => {
    local.get(`/board?page=${pageable.page}&size=${pageable.size}&sort=${pageable.sort}`)
        .then(success)
        .catch(fail)
}

const searchBoardById = (boardId, success, fail) => {
    local.get(`/board/${boardId}`)
        .then(success)
        .catch(fail)
}

const updateBoard = (updateBoardRequest, success, fail) => {
    local.put(`/board`, updateBoardRequest)
        .then(success)
        .catch(fail)
}

const deleteBoard = (boardId, success, fail) => {
    local.delete(`/board/${boardId}`)
        .then(success)
        .catch(fail)
}



export {makeBoard, getBoardList, searchBoardById, updateBoard, deleteBoard}