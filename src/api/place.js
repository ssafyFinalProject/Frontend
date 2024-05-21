import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const findPlaceListByCategory = (category, success, fail) => {
    return local.get(`/place/category?category=${category}`)
        .then(success)
        .catch(fail)
}

const findPlaceListByName = (placeName, success, fail) => {
    return local.get(`/place/name?placeName=${placeName}`)
        .then(success)
        .catch(fail)
}

const findPlaceListByRoadAddress = (roadAddress, success, fail) => {
    return local.get(`/place/road?roadAddress=${roadAddress}`)
        .then(success)
        .catch(fail)
}

const findPlaceByDetail = (args = {}, success, fail) => {
    const {
        name = '',
        category = '',
        roadAddress = ''
      } = args;
    
      const request = {
        name,
        category,
        roadAddress
      };

      return local.get('/place', request)
        .then(success)
        .catch(fail)
}

export {findPlaceListByCategory, findPlaceListByName, findPlaceListByRoadAddress, findPlaceByDetail}