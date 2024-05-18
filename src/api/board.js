import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const makeBoard = (board) => {
    local.post('/board', board)
    .then((response) => {
        // const board = response.data;
        // return board;
        return response.data === 200;
    })
    .catch(() => {
        return false;
    })
}

const getBoardList = () => {
    local.get('/board')
        .then((response) => {
            const pageList = response.data;
            return pageList;
        })
        .catch((error) => {
            console.log(error);
        })
}

const searchBoardById = (boardId) => {
    local.get(`/board/${boardId}`)
        .then((response) => {
            const board = response.data;
            return board;
        })
        .catch((error) => {
            console.log(error);
        })
}

const updateBoard = (boardId, title, content) => {
    local.put(`/board`, {'boardId' : boardId, 'title' : title, 'content' : content})
        .then((response) => {
            const board = response.data;
            return board;
        })
        .catch((error) => {
            console.log(error);
        })
}

const deleteBoard = (boardId) => {
    local.delete(`/board/${boardId}`)
        .then(() => {
            return true;
        })
        .catch(() => {
            return false;
        })
}



export {makeBoard, getBoardList, searchBoardById, updateBoard, deleteBoard}