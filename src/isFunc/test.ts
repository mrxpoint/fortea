import isFunc from "./index"

describe("isFunc", () => {
    // {} => false
    it("test case 1", () => {
        expect(isFunc({})).toBe(false)
    })
    // [] => false
    it("test case 2", () => {
        expect(isFunc([])).toBe(false)
    })
    // null => false
    it("test case 3", () => {
        expect(isFunc(null)).toBe(false)
    })
    // undefined => false
    it("test case 4", () => {
        expect(isFunc(undefined)).toBe(false)
    })
    // 1 => false
    it("test case 5", () => {
        expect(isFunc(1)).toBe(false)
    })
    // "1" => false
    it("test case 6", () => {
        expect(isFunc("1")).toBe(false)
    })
    // NaN => false
    it("test case 7", () => {
        expect(isFunc(NaN)).toBe(false)
    })
    // Infinity => false
    it("test case 8", () => {
        expect(isFunc(Infinity)).toBe(false)
    })
    // -Infinity => false
    it("test case 9", () => {
        expect(isFunc(-Infinity)).toBe(false)
    })
    // true => false
    it("test case 10", () => {
        expect(isFunc(true)).toBe(false)
    })
    // false => false
    it("test case 11", () => {
        expect(isFunc(false)).toBe(false)
    })
    // function => true
    it("test case 12", () => {
        expect(isFunc(() => {})).toBe(true)
    })
    // Array.isArray => true
    it("test case 13", () => {
        expect(isFunc(Array.isArray)).toBe(true)
    })
})
