/**
 * 发票
 */

import http from './http.js'

/**
 * 申请发票
 * @param {*} param 
 * @returns 
 */
export const invoiceCreate = (param) => {
    return http.post('Invoice/addInvoice', param)
}

/**
 * 
 * @returns 发票列表
 */
export const invoiceList = () => {
    return http.post('Invoice/invoiceList')
}