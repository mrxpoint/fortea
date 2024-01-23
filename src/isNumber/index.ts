/**
 * Check if value is a number
 * @name isNumber
 * @param value value to check
 * @param skipFinite skip check if value is finite
 * @returns {boolean} true if value is a number
 * @example
 * isNumber(1) // => true
 * isNumber(Infinity) // => false
 * isNumber(NaN) // => false
 * isNumber(Infinity, true) // => true
 */
function isNumber(value: any, skipFinite = false): boolean {
    if (skipFinite) return typeof value === "number" && !isNaN(value)
    return typeof value === "number" && Number.isFinite(value) && !isNaN(value)
}

export default isNumber
