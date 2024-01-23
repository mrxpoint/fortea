import isNil from "../isNil"

/**
 * @name map
 * @description map an array to another array
 * @param arr input array
 * @param func map function
 * @param skipNil skip nil value default true
 * @returns mapped array
 */
function map<Input, Output>(arr: Input[], func: (item: Input, index: number) => Output, skipNil = true): Output[] {
    const result = [] as Output[]
    if (Array.isArray(arr) === false) return []
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i]
        if (isNil(item) && skipNil) continue
        result.push(func(item, i))
    }
    return result
}

export default map
