import toNumber from "../toNumber"

function isInteger(value: any) {
    return toNumber(value) % 1 === 0
}

export default isInteger
