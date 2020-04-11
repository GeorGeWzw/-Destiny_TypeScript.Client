import axios from 'axios'
const service=axios.create({
    baseURL:'http://localhost:50003/',
    timeout:5000
});

//发起请求拦截器
service.interceptors.request.use(
    config=>{
        return config;
    },
    error=>{
        Promise.reject(error);
    }
)

///返回拦截器
service.interceptors.response.use(
    response=>{
        return response.data;
    },
    error => {
        // Message({
        //   message: error.message,
        //   type: 'error',
        //   duration: 5 * 1000
        // })
    
        console.log(error);
        if (error.response.status === 401) {
          //   MessageBox.confirm(
          //     '你已被登出，可以取消继续留在该页面，或者重新登录',
          //     '确定登出',
          //     {
          //       confirmButtonText: '重新登录',
          //       cancelButtonText: '取消',
          //       type: 'warning'
          //     }
          //   ).then(() => {
          //     UserModule.ResetToken()
          //     location.reload() // To prevent bugs from vue-router
          //   })
        }
        return Promise.reject(error)
    }
)
export default service;