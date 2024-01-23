import isNumber from "./index"

describe("isNumber", () => {
    it("test case 1", () => {
        expect(isNumber(1)).toBe(true)
    })
    it("test case 2", () => {
        expect(isNumber("1")).toBe(false)
    })
    it("test case 3", () => {
        expect(isNumber("")).toBe(false)
    })
    it("test case 4", () => {
        expect(isNumber(null)).toBe(false)
    })
    it("test case 5", () => {
        expect(isNumber(undefined)).toBe(false)
    })
    it("test case 6", () => {
        expect(isNumber(NaN)).toBe(false)
    })
    it("test case 7", () => {
        expect(isNumber(Infinity)).toBe(false)
    })
    it("test case 8", () => {
        expect(isNumber(-Infinity)).toBe(false)
    })
    it("test case 9", () => {
        expect(isNumber(0)).toBe(true)
    })
    it("test case 10", () => {
        expect(isNumber(-0)).toBe(true)
    })
    it("test case 11", () => {
        expect(isNumber(1.1)).toBe(true)
    })
    it("test case 12", () => {
        expect(isNumber(-1.1)).toBe(true)
    })
    it("test case 13", () => {
        expect(isNumber(1.1e10)).toBe(true)
    })
    it("test case 14", () => {
        expect(isNumber(-1.1e10)).toBe(true)
    })
    it("test case 15", () => {
        expect(isNumber(1.1e-10)).toBe(true)
    })
    it("test case 16", () => {
        expect(isNumber(-1.1e-10)).toBe(true)
    })
    it("test case 17", () => {
        expect(isNumber(1.1e10)).toBe(true)
    })
    it("test case 18", () => {
        expect(isNumber(-1.1e10)).toBe(true)
    })
    it("test case 19", () => {
        expect(isNumber(1.1e10)).toBe(true)
    })
    it("test case 20", () => {
        expect(isNumber(-1.1e10)).toBe(true)
    })
})
