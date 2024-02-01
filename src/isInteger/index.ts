/**
 * Check if value is integer
 * @name isInteger
 * @param value value to check
 * @returns {boolean} true if value is integer
 * @example
 * isInteger(1) // => true
 * isInteger(1.1) // => false
 * isInteger(Infinity) // => false
 */
function isInteger(value: number): boolean {
    return typeof value === "number" && isFinite(value) && Math.floor(value) === value
}

export default isInteger
