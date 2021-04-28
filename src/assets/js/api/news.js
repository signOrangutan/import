import http from './http.js'

/**
 * 资讯列表
 * @param {*} page 
 * @param {*} num 
 * @returns 
 */
export const newsList = (page, num) => {
    return http.post('/v1.Article/index', {
        page, 
        num
    })
}

/**
 * 资讯详情
 * @param {*} id 
 * @returns 
 */
export const newsDetail = (id) => {
    return http.post('/v1.Article/info', {id})
}