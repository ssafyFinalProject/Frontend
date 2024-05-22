import axios from "axios";

const localAxios = () => {
    console.log("local", localStorage.getItem('accessToken'));


    return axios.create({
        baseURL: import.meta.env.VITE_BASE_URL,
        headers: {
        "Content-type": "application/json; charset=utf-8",
        "Authorization": 'Bearer ' + localStorage.getItem('accessToken'),
        }
    });
}

export {localAxios}