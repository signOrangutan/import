import http from './http'

/**
 * 首页
 * @returns 
 */
export const caseInfo = (id) => {
    return http.post('/v1.Poster/info', {id})
}

/**
 * 案例展示列表
 * @param {*} page 
 * @param {*} num 
 * @returns 
 */
export const caseList = (page, num) => {
    return http.post('/v1.Poster/index', {
        page, 
        num
    })
}