/**
 * 评论
 */

import http from './http.js'

/**
 * 评论列表
 * @param {*} order_id 
 * @returns 
 */
export const commentList = (order_id) => {
    return http.post('/comment/commentList', {
        order_id
    })
}

