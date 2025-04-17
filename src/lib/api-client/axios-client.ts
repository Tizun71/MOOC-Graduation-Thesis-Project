import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.BACKEND_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
})

axios.interceptors.response.use(
    function (response) {
        return response.data
    },
    function (error) {
        return Promise.reject(error)
    }
)

export default axiosClient;