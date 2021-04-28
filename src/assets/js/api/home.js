import http from './http'

/**
 * 首页
 * @returns 
 */
export const home = () => {
    return http.post('/v1.index/index')
}