import axios from 'axios'
const service = axios.create({
    baseURL: 'http://localhost:50003/',
    timeout: 5000
});

//发起请求拦截器
service.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        Promise.reject(error);
    }
)

///返回拦截器
service.interceptors.response.use(
    response => {
        let data = response.data;
        if (data.Success == true) {

            return Promise.reject(null);
        }
        // console.log(response);
        return response.data;
    },
    error => {
        // Message({
        //   message: error.message,
        //   type: 'error',
        //   duration: 5 * 1000
        // })

        // console.log(error);
        // if (error.response.status === 401) {

        // }
        return Promise.reject(error)
    }
)
export default service;