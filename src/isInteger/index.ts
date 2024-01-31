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
    const testCall =
        Number.isInteger ||
        function (value: number) {
            return typeof value === "number" && isFinite(value) && Math.floor(value) === value
        }
    return testCall(value)
}

export default isInteger
