import NoticeUtils from "./NoticeUtils";
import axios from 'axios'

const service = axios.create({
    baseURL: 'http://1065.cloud:9602/',
    // timeout: 5000
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
        if(response.status==200)
        {
            return response.data;
        }
        else
        {
            debugger
        }
    },
    error => {
        const response=error.response;
        switch(response.status)
        {
            case 400:
                NoticeUtils.Inst().Error("服务器错误", response.data.msg);
            break;
            case 401:
                NoticeUtils.Inst().Warning("权限不足", response.statusText);
            break;
            case 403:
                NoticeUtils.Inst().Error("错误提示", "无权操作");
            break;
        }
        return Promise.reject(error)
    }
)
export default service;