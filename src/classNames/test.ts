import classNames from "./index"

describe("classNames", () => {
    it("test case 1", () => {
        expect(classNames("a")).toBe("a")
    })
    it("test case 2", () => {
        expect(classNames("a", "b")).toBe("a b")
    })
    it("test case 3", () => {
        expect(
            classNames("a", "b", {
                c: true,
                d: false,
            }),
        ).toBe("a b c")
    })
})
