import map from "./index"

describe("map", () => {
    it("test case 1", () => {
        expect(map([1, 2, 3], (item, index) => item + index)).toEqual([1, 3, 5])
    })
    it("test case 2", () => {
        expect(map([1, 2, 3], (item, index) => item + index + "")).toEqual(["1", "3", "5"])
    })
    it("test case 3", () => {
        expect(map(undefined, (item, _) => item)).toEqual([])
    })
    it("test case 4", () => {
        expect(map(null, (item, _) => item)).toEqual([])
    })
    it("test case 5", () => {
        expect(map([], (item, _) => item)).toEqual([])
    })
    it("test case 6", () => {
        expect(map([1, null, 3], (item, _) => item, true)).toEqual([1, 3])
    })
    it("test case 7", () => {
        expect(map([1, null, 3], (item, _) => item, false)).toEqual([1, null, 3])
    })
    it("test case 8", () => {
        expect(map([1, undefined, 3], (item, _) => item, true)).toEqual([1, 3])
    })
    it("test case 9", () => {
        expect(map([1, undefined, 3], (item, _) => item, false)).toEqual([1, undefined, 3])
    })
})
