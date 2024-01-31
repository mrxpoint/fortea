import isEmpty from "./index"

describe("isEmpty", () => {
    it("test case 1", () => {
        expect(isEmpty(null)).toBe(true)
    })
    it("test case 2", () => {
        expect(isEmpty(undefined)).toBe(true)
    })
    it("test case 3", () => {
        expect(isEmpty(1)).toBe(false)
    })
    it("test case 4", () => {
        expect(isEmpty("")).toBe(true)
    })
    it("test case 5", () => {
        expect(isEmpty(" ")).toBe(true)
    })
    it("test case 6", () => {
        expect(isEmpty([])).toBe(true)
    })
    it("test case 7", () => {
        expect(isEmpty({})).toBe(true)
    })
    it("test case 8", () => {
        expect(isEmpty({ a: 1 })).toBe(false)
    })
})
