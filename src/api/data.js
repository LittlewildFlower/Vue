import axios  from "./axios";


export const getMenu =(param)=>{
    return axios.request({
        //接口相关地址
        url:'/permission/getMenu',
        method:'post',
        data:param
    })
}

export const getData=()=>{
    return axios.request({
        url:'/Home/getData'
    })
}

export const getUser=(params)=>{
    return axios.request({
        url:'/user/getUser',
        method:'get',
        params
    })
}