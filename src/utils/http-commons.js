import axios from "axios";
//const { VITE_API_BASE_URL } ="http://localhost/"

const localAxios = () => {
    return axios.create({
        baseURL: "http://localhost:3000",
        headers: {
        "Content-type": "application/json/charset=utf-8",
        "Authorization": 'Bearer ' + localStorage.getItem('accessToken'),
        }
    });
}

export {localAxios}