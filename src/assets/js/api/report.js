import http from './http.js'

/**
 * 产品分类
 * @param {*} id 
 * @returns 
 */
export const reportCategory = (id) => {
    return http.post('/v1.Product/category', {
        id
    })
}

/**
 * 分类列表-获取产品
 * @param {*} category_id 
 * @returns 
 */
export const reportCategoryPro = (category_id) => {
    return http.post('/v1.Product/category_pro', {
        category_id
    })
}