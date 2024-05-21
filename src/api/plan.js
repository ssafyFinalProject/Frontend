import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const getPlanList = (success, fail) => {
    return local.get(`/plan/me`)
        .then(success)
        .catch(fail)
}

const registPlan = (makePlanRequest, success, fail) => {
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

export { getPlanList, registPlan, updatePlan, deletePlan}
