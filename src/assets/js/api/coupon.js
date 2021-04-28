/**
 * 优惠券
 */

import http from './http.js'

export const couponList = () => {
    return http.post('/coupon/lists')
}

