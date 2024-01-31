import isArray from "./index"

describe("isArray", () => {
    it("test case 1", () => {
        expect(isArray([])).toBe(true)
    })
    it("test case 2", () => {
        expect(isArray({})).toBe(false)
    })
    it("test case 3", () => {
        expect(isArray(null)).toBe(false)
    })
    it("test case 4", () => {
        expect(isArray(undefined)).toBe(false)
    })
    it("test case 5", () => {
        expect(isArray(1)).toBe(false)
    })
    it("test case 6", () => {
        expect(isArray("")).toBe(false)
    })
    it("test case 7", () => {
        expect(isArray(NaN)).toBe(false)
    })
})
