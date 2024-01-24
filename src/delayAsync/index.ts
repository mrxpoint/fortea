import isNil from "../isNil"

/**
 * @name delayAsync
 * @description 异步延迟执行函数 Promise 封装
 * @param seconds 延迟秒数
 * @returns Promise<void>
 */
function delayAsync(seconds = 1) {
    let _timeID: null | number | NodeJS.Timeout
    return new Promise<void>((resolve, _reject) => {
        _timeID = setTimeout(() => {
            resolve()
            if (!isNil(_timeID)) {
                clearTimeout(_timeID)
            }
        }, seconds * 1000)
    })
}

export default delayAsync
