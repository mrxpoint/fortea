import isObject from "./index"

describe("isObject", () => {
    // {} => true
    it("test case 1", () => {
        expect(isObject({})).toBe(true)
    })
    // [] => true
    it("test case 2", () => {
        expect(isObject([])).toBe(true)
    })
    // null => false
    it("test case 3", () => {
        expect(isObject(null)).toBe(false)
    })
    // undefined => false
    it("test case 4", () => {
        expect(isObject(undefined)).toBe(false)
    })
    // 1 => false
    it("test case 5", () => {
        expect(isObject(1)).toBe(false)
    })
    // "1" => false
    it("test case 6", () => {
        expect(isObject("1")).toBe(false)
    })
    // NaN => false
    it("test case 7", () => {
        expect(isObject(NaN)).toBe(false)
    })
    // Infinity => false
    it("test case 8", () => {
        expect(isObject(Infinity)).toBe(false)
    })
    // -Infinity => false
    it("test case 9", () => {
        expect(isObject(-Infinity)).toBe(false)
    })
    // true => false
    it("test case 10", () => {
        expect(isObject(true)).toBe(false)
    })
    // false => false
    it("test case 11", () => {
        expect(isObject(false)).toBe(false)
    })
    // function => false
    it("test case 12", () => {
        expect(isObject(() => {})).toBe(false)
    })
})
