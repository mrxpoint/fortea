import isString from "../isString"
import toNumber from "../toNumber"
import isNumber from "../isNumber"
import isFunc from "../isFunc"
import isNil from "../isNil"
import isBoolean from "../isBoolean"

const trueStrings = ["true", "1", "yes", "y", "on", "ok", "是"]

const falseStrings = ["false", "0", "no", "n", "off", "", "否"]

function toBoolean(value: any) {
    if (isNil(value)) return false
    if (isString(value)) {
        value = value.toLowerCase().trim()
        if (trueStrings.includes(value)) {
            return true
        } else if (falseStrings.includes(value)) {
            return false
        } else {
            return toNumber(value) > 0
        }
    } else if (isNumber(value, true)) {
        return value > 0
    } else if (typeof value === "object") {
        return true
    } else if (isFunc(value)) {
        return toBoolean(value())
    } else if (isBoolean(value)) {
        return value
    }
    return false
}

export default toBoolean
