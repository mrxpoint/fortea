import isNil from "../isNil"

/**
 * Creates a promise that resolves after a specified number of seconds.
 *
 * @param {number} [seconds=1] - The number of seconds to delay before resolving the promise.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
function delayAsync(seconds: number = 1): Promise<void> {
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
