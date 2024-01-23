import isInteger from "../isInteger/index"
import toNumber from "../toNumber"
import isNil from "../isNil"

/**
 * @name toPercentage
 * @description convert number to percentage string, example: 0.1 => 10%
 * @param value input value
 * @param fixed default auto fixed, if you want to be fixed, you can set fixed value
 * @returns string
 * @example 1.126 => 112.6%, 1.126 => 113% (fixed = 0)
 */
function toPercentage(value: any, fixed?: number): string {
    const percentage = toNumber(value) * 100
    const isInt = isInteger(percentage)
    if (isInt) {
        if (isNil(fixed)) {
            return percentage + "%"
        } else {
            return percentage.toFixed(fixed) + "%"
        }
    } else {
        const str = percentage.toString()
        const autoFixed = str.length - str.indexOf(".") - 1
        if (isNil(fixed)) {
            return percentage.toFixed(autoFixed) + "%"
        } else {
            return percentage.toFixed(fixed) + "%"
        }
    }
}

export default toPercentage
