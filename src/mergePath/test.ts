import mergePath from "./index"

describe("mergePath", () => {
    it("test case 1", () => {
        expect(mergePath("a", "b")).toEqual("a/b")
    })
    it("test case 2", () => {
        expect(mergePath("/a", "b")).toEqual("/a/b")
    })
    it("test case 3", () => {
        expect(mergePath("a", "/b")).toEqual("a/b")
    })
    it("test case 4", () => {
        expect(mergePath("/a", "/b")).toEqual("/a/b")
    })
    it("test case 5", () => {
        expect(mergePath()).toEqual("")
    })
    it("test case 6", () => {
        expect(mergePath("/")).toEqual("/")
    })
    it("test case 7", () => {
        expect(mergePath("/", "/")).toEqual("/")
    })
    it("test case 8", () => {
        expect(mergePath("/a")).toEqual("/a")
    })
    it("test case 9", () => {
        expect(mergePath("/a", "/")).toEqual("/a/")
    })
    it("test case 10", () => {
        expect(mergePath("/a", "/b")).toEqual("/a/b")
    })
    it("test case 11", () => {
        expect(mergePath("/a/", "/b")).toEqual("/a/b")
    })
    it("test case 12", () => {
        expect(mergePath("/a/", "/b/")).toEqual("/a/b/")
    })
    it("test case 13", () => {
        expect(mergePath("/a/", "/b/c")).toEqual("/a/b/c")
    })
    it("test case 14", () => {
        expect(mergePath("/a/", "/b/c/")).toEqual("/a/b/c/")
    })
    it("test case 15", () => {
        expect(mergePath("", "/")).toEqual("/")
    })
})
