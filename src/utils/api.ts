import axios from "axios";
const api = axios.create({
    baseURL: 'https://elearningnew.cybersoft.edu.vn/api/'
})
type Config = {
    headers: any;

};


api.interceptors.request.use((config: Config) => {
    const accessTokenAdmin = localStorage.getItem('USER_ADMIN') ?
    JSON.parse(localStorage.getItem('USER_ADMIN')|| '').accessToken : '';

    const accessTokenUser = localStorage.getItem('USER_CUSTOMER') ?
    JSON.parse(localStorage.getItem('USER_CUSTOMER')|| '').accessToken : '';

    
    config.headers = {
        ...config.headers,
        TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1MCIsIkhldEhhblN0cmluZyI6IjE4LzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNTUzNjAwMDAwMCIsIm5iZiI6MTY3NzQzMDgwMCwiZXhwIjoxNzA1NjgzNjAwfQ.s4X0R0Wi80X0f9MLJ2XYxRKJdQJBW27dwvkpfN03100",
        Authorization: `Bearer ${accessTokenUser || accessTokenAdmin}`,
    }
    return config;
})
export  {api};