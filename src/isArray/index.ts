/**
 * check if value is array
 * @param value
 * @returns {boolean} true if value is array
 * @example
 * isArray([]) // => true
 */
function isArray(value: any): boolean {
    return Array.isArray(value)
}

export default isArray
