/**
 * 用户
 */

 import http from './http.js'

 /**
  * 注册帐号
  * @param {*} phone 手机号
  * @param {*} code 验证码
  * @param {*} password 密码
  * @returns 
  */
 export const memberReg = (phone,code,password) =>{
    return http.post('/user/region', {
        phone,
        code,
        password
    })
 }

 /**
  * 登录
  * @param {*} phone 
  * @param {*} password 
  * @param {*} login_type 登录方式：phone 账号密码 code 验证码登录
  * @param {*} code 
  * @returns 
  */
export const memberLogin = (phone, password, login_type="phone", code='') => {
    return http.post('/user/login', {
        phone,
        code,
        password,
        login_type
    })
}

/**
 * 获取验证码
 * @param {*} phone 
 * @param {*} type 
 * @returns 
 */
export const memberCode = (phone, type='region') => {
    return http.post('/user/get_code', {
        phone,
        type
    })
}


/**
 * 获取用户信息
 * @returns 
 */
export const memberInfo = () => {
    return http.post('/user/get_code')
}