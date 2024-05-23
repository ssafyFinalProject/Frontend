import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const preScript = "너는 한국 여행 전문가고 name, address, lat, lng 속성을 가진 추천 여행지 json데이터 리스트를 반환하고, json데이터 이외의 말은 하지마. 지역 : "
// const preScript=`여행지 추천해줘: `;
const chat = (prompt, success, fail) => {
    local.get(`/gpt/chat?prompt=${preScript + prompt}`)
        .then(success)
        .catch(fail)
}

export { chat }