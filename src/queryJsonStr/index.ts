function includeQueryKey(json: string, query: string) {
    if (!json || !query) return false
    return json.includes(`"${query}":`)
}

/**
 * @name forNumber
 * @description query json string for number value
 * @param json string
 * @param query string
 * @returns number | null
 */
export function forNumber(json: string, query: string): number | null {
    if (!includeQueryKey(json, query)) return null
    const reg = new RegExp(`.*"${query}":(\\d+).*`)
    const result = json.replace(reg, "$1")
    return Number(result)
}

/**
 * @name forString
 * @description query json string for string value
 * @param json
 * @param query
 * @returns string | null
 */
export function forString(json: string, query: string): string | null {
    if (!includeQueryKey(json, query)) return null
    const reg = new RegExp(`.*"${query}":"(.*)".*`)
    return json.replace(reg, "$1")
}

/**
 * @name forBoolean
 * @description query json string for boolean value
 * @param json string
 * @param query string
 * @returns boolean | null
 */
export function forBoolean(json: string, query: string): boolean | null {
    if (!includeQueryKey(json, query)) return null
    const reg = new RegExp(`.*"${query}":(true|false).*`)
    return json.replace(reg, "$1") === "true"
}

const queryJsonStr = {
    forNumber,
    forString,
    forBoolean,
}

export default queryJsonStr
