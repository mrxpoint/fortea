import isNumber from "../isNumber"

function toNumber(value: any) {
    if (value === null || value === undefined) return 0
    if (typeof value === "string") {
        const v = parseFloat(value)
        if (isNegativeZero(v)) return 0
        return isNumber(v) ? v : 0
    }
    if (typeof value === "number") {
        if (isNegativeZero(value)) return 0
        return isNumber(value) ? value : 0
    }
    return 0
}

function isNegativeZero(value: number) {
    return Object.is(value, -0)
}

export default toNumber
