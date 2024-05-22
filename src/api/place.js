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

const findPlaceByDetail = (success, fail, args = {}) => {
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

const getMyPlaceList = (success, fail) => {
    return local.get(`/place/me`, {timeout: 5000})
        .then(success)
        .catch(fail)
} 

const registMyPlace = (placeId, success, fail) => {
  console.log(placeId);
  return local.post(`/place/me`, {placeId: placeId})
        .then(success)
        .catch(fail)
}

const deleteMyPlace = (placeId, success, fail) => {
    console.log("placeId", placeId);
    return local.delete(`/place/me`, {data: { placeId: placeId }})
        .then(success)
        .catch(fail)
}

const getTopFavoritePlace = (count, success, fail) => {
    return local.get(`/place/top?count=${count}`)
        .then(success)
        .catch(fail)
}


export {findPlaceListByCategory, findPlaceListByName, findPlaceListByRoadAddress, findPlaceByDetail, getMyPlaceList, registMyPlace, deleteMyPlace, getTopFavoritePlace, }