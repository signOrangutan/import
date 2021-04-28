/**
 * 保存
 * @param {*} key 
 * @param {*} val 
 */
export function storageSet(key, val){
    localStorage.setItem(key, val)
}

/**
 * 获取
 * @param {*} key 
 * @returns 
 */
export function storageGet(key){
    return localStorage.getItem(key)
}

/**
 * 清除key
 * @param {}} key 
 */
export function storageRemove(key){
    localStorage.removeItem(key)
}

/**
 * 清空缓存
 */
export function storageClear(){
    localStorage.clear()
}