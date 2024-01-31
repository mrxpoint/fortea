/**
 * Check if value is null or undefined
 * @name isNil
 * @param value value to check
 * @returns {boolean} true if value is null or undefined
 * @example
 * isNil(null) // => true
 * isNil(undefined) // => true
 * isNil(1) // => false
 */
function isNil(value: any): value is null | undefined {
    return value === null || value === undefined
}

export default isNil
