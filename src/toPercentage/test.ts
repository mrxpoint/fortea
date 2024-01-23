import toPercentage from "./index"

describe("toPercentage", () => {
    it("test case 1", () => {
        expect(toPercentage(0.1)).toEqual("10%")
    })
    it("test case 2", () => {
        expect(toPercentage(0.1, 1)).toEqual("10.0%")
    })
    it("test case 3", () => {
        expect(toPercentage(0.1, 2)).toEqual("10.00%")
    })
    it("test case 4", () => {
        expect(toPercentage(0.1, 3)).toEqual("10.000%")
    })
    // null
    it("test case 5", () => {
        expect(toPercentage(null)).toEqual("0%")
    })
    // undefined
    it("test case 6", () => {
        expect(toPercentage(undefined)).toEqual("0%")
    })
    // 1.125
    it("test case 7", () => {
        expect(toPercentage(1.126, 1)).toEqual("112.6%")
    })
    it("test case 8", () => {
        expect(toPercentage(1.126)).toEqual("112.6%")
    })
    // 1.126 => 113% (fixed = 0)
    it("test case 9", () => {
        expect(toPercentage(1.126, 0)).toEqual("113%")
    })
    // 1.126 => 112.6% (fixed = 1)
    it("test case 10", () => {
        expect(toPercentage(1.126, 1)).toEqual("112.6%")
    })
})
