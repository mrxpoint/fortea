import isNumber from "../isNumber"

/**
 * Convert value to number
 * @name toNumber
 * @param value
 * @param skipFinite if false, infinity will be converted to 0 ，default is false
 * @return number
 * @example
 * toNumber(1) // => 1
 * toNumber(Infinity) // => 0
 * toNumber(NaN) // => 0
 * toNumber(Infinity, true) // => Infinity
 * toNumber(-0) // => 0
 */
function toNumber(value: any, skipFinite = false) {
    if (value === null || value === undefined) return 0
    if (typeof value === "string") {
        const v = parseFloat(value)
        if (isNegativeZero(v)) return 0
        return isNumber(v, skipFinite) ? v : 0
    }
    if (typeof value === "number") {
        if (isNegativeZero(value)) return 0
        return isNumber(value, skipFinite) ? value : 0
    }
    return 0
}

function isNegativeZero(value: number) {
    return Object.is(value, -0)
}

export default toNumber
