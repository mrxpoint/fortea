function isFunc(value: any): value is Function {
    return value !== null && typeof value === "function"
}

export default isFunc
