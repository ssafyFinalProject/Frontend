import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const getPlanList = (success, fail) => {
    local.get(`/plan/me`)
        .then(success)
        .catch(fail)
}

const getPlan = (planId, success, fail) => {
    local.get(`/plan?id=${planId}`)
        .then(success)
        .catch(fail)
}

const registPlan = (makePlanRequest, success, fail) => {
    console.log(makePlanRequest);
    local.post('/plan', makePlanRequest)
        .then(success)
        .catch(fail)
}

const updatePlan = (updatePlanRequest, success, fail) => {
    local.put(`/plan`, updatePlanRequest)
        .then(success)
        .catch(fail)
}

const deletePlan = (planId, success, fail) => {
    local.delete(`/plan?id=${planId}`)
        .then(success)
        .catch(fail)
}

const registPost = (makePostRequest, success, fail) => {
    console.log(makePostRequest);
    local.post('/plan/post', makePostRequest)
        .then(success)
        .catch(fail)
}

const updatePost = (updatePostRequest, success, fail) => {
    local.put(`/plan/post`, updatePostRequest)
        .then(success)
        .catch(fail)
}

const deletePost = (postId, success, fail) => {
    local.delete(`/plan/post?id=${postId}`)
        .then(success)
        .catch(fail)
}

export { getPlanList, getPlan, registPlan, updatePlan, deletePlan, registPost, updatePost, deletePost}
