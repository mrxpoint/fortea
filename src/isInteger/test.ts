import isInteger from "./index"

describe("isInteger", () => {
    it("test case 1", () => {
        expect(isInteger(1)).toEqual(true)
    })
    it("test case 2", () => {
        expect(isInteger(1.1)).toEqual(false)
    })
    it("test case 3", () => {
        expect(isInteger(1.0)).toEqual(true)
    })
    it("test case 4", () => {
        expect(isInteger(1.0)).toEqual(true)
    })
    it("test case 5", () => {
        expect(isInteger(1.0000001)).toEqual(false)
    })
    // true, because of loss of precision
    it("test case 6", () => {
        expect(isInteger(5.0000000000000001)).toEqual(true)
    })
    // Infinity
    it("test case 7", () => {
        expect(isInteger(Infinity)).toEqual(false)
    })
    // NaN
    it("test case 8", () => {
        expect(isInteger(NaN)).toEqual(false)
    })
    // -Infinity
    it("test case 9", () => {
        expect(isInteger(-Infinity)).toEqual(false)
    })
})
