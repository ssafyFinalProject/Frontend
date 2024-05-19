import { localAxios } from "@/utils/http-commons";

const local = localAxios();

const findPlaceListByCategory = (categoryName) => {
    return local.get('/place/categor', categoryName)
        .then((response) => {
            return response.data;
        })
        .catch(() => {
            return false;
        })
}

const findPlaceListByName = (placeName) => {
    return local.get('/place/name', placeName)
        .then((response) => {
            return response.data;
        })
        .catch(() => {
            return false;
        })
}

const findPlaceListByRoadAddress = (roadAddress) => {
    return local.get('/place/road', roadAddress)
        .then((response) => {
            return response.data;
        })
        .catch(() => {
            return false;
        })
}

const findPlaceByDetail = (args = {}) => {
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
        .then((response) => {
            return response.data;
        })
        .catch(() => {
            return false;
        })
}

export {findPlaceListByCategory, findPlaceListByName, findPlaceListByRoadAddress, findPlaceByDetail}