import isNil from "../isNil"
import isString from "../isString"
import isObject from "../isObject"
import isArray from "../isArray"

/**
 * @name isEmpty
 * @description check if value is empty
 * @param value
 * @returns {boolean} true if value is empty
 * @example
 * isEmpty(null) // => true
 * isEmpty(undefined) // => true
 * isEmpty(1) // => false
 * isEmpty('') // => true
 * isEmpty(' ') // => false
 * isEmpty([]) // => true
 * isEmpty({}) // => true
 */
function isEmpty(value: any): boolean {
    if (isNil(value)) {
        return true
    }

    if (isString(value)) {
        return value.trim().length === 0
    }

    if (isArray(value)) {
        return value.length === 0
    }

    if (isObject(value)) {
        return Object.keys(value).length === 0
    }

    return false
}

export default isEmpty
