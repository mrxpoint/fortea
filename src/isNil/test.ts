import isNil from "./index"

describe("isNil", () => {
    it("test case 1", () => {
        expect(isNil(1)).toBe(false)
    })
    it("test case 2", () => {
        expect(isNil("1")).toBe(false)
    })
    it("test case 3", () => {
        expect(isNil("")).toBe(false)
    })
    it("test case 4", () => {
        expect(isNil(null)).toBe(true)
    })
    it("test case 5", () => {
        expect(isNil(undefined)).toBe(true)
    })
    it("test case 6", () => {
        expect(isNil(NaN)).toBe(false)
    })
    it("test case 7", () => {
        expect(isNil(Infinity)).toBe(false)
    })
    it("test case 8", () => {
        expect(isNil(-Infinity)).toBe(false)
    })
    it("test case 9", () => {
        expect(isNil(0)).toBe(false)
    })
    it("test case 10", () => {
        expect(isNil(-0)).toBe(false)
    })
    it("test case 11", () => {
        expect(isNil(1.1)).toBe(false)
    })
    it("test case 12", () => {
        expect(isNil(-1.1)).toBe(false)
    })
    it("test case 13", () => {
        expect(isNil(1.1e10)).toBe(false)
    })
    it("test case 14", () => {
        expect(isNil(-1.1e10)).toBe(false)
    })
    it("test case 15", () => {
        expect(isNil(1.1e-10)).toBe(false)
    })
    it("test case 16", () => {
        expect(isNil(-1.1e-10)).toBe(false)
    })
    it("test case 17", () => {
        expect(isNil(1.1e10)).toBe(false)
    })
    it("test case 18", () => {
        expect(isNil(-1.1e10)).toBe(false)
    })
    it("test case 19", () => {
        expect(isNil(1.1e10)).toBe(false)
    })
})
