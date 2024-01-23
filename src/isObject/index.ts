function isObject(value: any): value is object {
    return value !== null && typeof value === "object"
}

export default isObject
