// import axios from "axios";
import request from "@/utils/request";
import {co} from '@/utils/index'
// import axiosRetry from "axios-retry";
// axiosRetry (axios,{retries:3}) //请求失败后可在重试3次
// import '@/utils/request' //直接导入js执行
/**
 * @description 获取 APP 首页信息
 */
export const getHomePageData = () => co(request.post("/homepage/block/page"));

/**
 * @description
 */

export const getHomepageDragonBall = () =>
co(request.get("/homepage/dragon/ball"));

/**
 * @description  调用此接口手机登录
 * @param {*} params 
 * @returns  {String}
 */
//验证码
export const getCapycha = (params) =>
co(request.get("/captcha/sent",{params}));

//登录
export const loginCellphone = (data) => {
    return co(request.post("/login/cellphone", data))
}


/**
 * @description 国家编码列表
 * @param {String} params.code 
 * @returns 
 */
// /countries/codest
export const getCountries = (params) => co(request.get("/countries/code/list", params));


/*
 * @description 歌单详情动态 调用后可获取歌单详情动态部分,如评论数,是否收藏,播放数
 * @param id : 歌单 id
 * @param  s : 歌单最近的 s 个收藏者,默认为 8
 * @returns 
 */
export const personaLized = (params) => {
    return co(request.get(`/playlist/detail?timestamp=${ Date.now()}`, {params}));  
}


/*
 * @description 获取用户信息 
 * @param  uid:用户id
 * @returns 
 */
export const  getUsersonglist = (params) => {
    return co(request.get("/user/detail", {params}))
}

/**@description 登录后调用此接口 , 传入用户 id, 可以获取用户歌单
 * @param uid : 用户 id
 */
export const  getUserid = (params) => {
    return co(request.get("/user/playlist", {params}));  
}

//mv/all
/*
 * @description 调用此接口 , /top/mv 获取mv排行
 * @data    area: 地区,可选值为全部,内地,港台,欧美,日本,韩国,不填则为全部 
 * @data  limit: 取出数量 , 默认为 30
 * @data   offset: 偏移数量 , 用于分页 , 如 :( 页数 -1)*50, 其中 50 为 limit 的值 , 默认 为 0
 * @returns 
 */


export const getMv = (data) => {
    return co(request.post(`/top/mv?timestamp=${ Date.now()}`, data))
}


//mv视频
export const getMvvio = (data) => {
    return co(request.post(`/mv/url?timestamp=${ Date.now()}`, data))
}


//歌曲列表功能播放
export const getTrackUrl = (track) => {
    return co(request.post(`/song/url/?timestamp=${ Date.now()}`, { id: track, level: "standard" }));
};

///song/url/v1获取音乐 url - 新版
/*
 * @description 调用此接口 ,获取音乐 url
 * @param   id : 音乐 id 
 * @param  level: 播放音质等级, 分为 
        * standard => 标准,
        * higher => 较高, 
        * exhigh=>极高, 
        * lossless=>无损,
        *  hires=>Hi-Res, 
        * jyeffect => 高清环绕声, 
        * sky => 沉浸环绕声, 
        * jymaster => 超清母带  
 * @returns 
 */

// export const gesongUrl = (params) => {
//     return co(request.post(`song/url/v1?timestamp=${ Date.now()}`, {params}));
// };


//
export const getTrackDetail = (ids) => {
    console.log(ids);
    return co(request.get(`/song/detail?timestamp=${Date.now()}`, {params:{ids}}));
}
