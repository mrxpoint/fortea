import arrayUpsert from "./index"

describe("arrayUpsert", () => {
    it("test case 1", () => {
        expect(arrayUpsert([1, 2, 3], 4)).toEqual([1, 2, 3, 4])
    })
    it("test case 2", () => {
        expect(arrayUpsert([1, 2, 3, 6], 4, undefined, (a, b) => a == b)).toEqual([1, 2, 3, 6, 4])
    })
    it("test case 3", () => {
        expect(arrayUpsert([1, 2, 3], 2)).toEqual([1, 2, 3])
    })
    // [{id: 1, name: "a"}, {id: 2, name: "b"}, {id: 3, name: "c"}]  insert {id: 2, name: "d"}
    it("test case 4", () => {
        const arr = [
            { id: 1, name: "a" },
            { id: 2, name: "b" },
            { id: 3, name: "c" },
        ]
        const obj = { id: 2, name: "d" }
        const expectArr = [
            { id: 1, name: "a" },
            { id: 2, name: "d" },
            { id: 3, name: "c" },
        ]
        expect(arrayUpsert(arr, obj, undefined, (a, b) => a.id == b.id)).toEqual(expectArr)
    })
    it("test case 5", () => {
        const arr = [
            { id: 1, name: "a" },
            { id: 2, name: "b" },
            { id: 3, name: "c" },
        ]
        const obj = { id: 2, name: "d" }
        const expectArr = [
            { id: 1, name: "a" },
            { id: 2, name: "d" },
            { id: 3, name: "c" },
        ]
        expect(arrayUpsert(arr, obj, "id")).toEqual(expectArr)
    })
    it("test case 6", () => {
        const arr = [
            { uid: "1", id: "_1", name: "a" },
            { uid: "2", id: "_2", name: "b" },
            { uid: "3", id: "_3", name: "c" },
        ]
        const obj = { uid: "2", id: "_1", name: "xx" }
        const expectArr = [
            { uid: "1", id: "_1", name: "a" },
            { uid: "2", id: "_1", name: "xx" },
            { uid: "3", id: "_3", name: "c" },
        ]
        expect(arrayUpsert(arr, obj, "uid", (a, b) => a.id === b.id)).toEqual(expectArr)
    })
    it("test case 7", () => {
        const arr = [
            { uid: "1", id: "_1", name: "a" },
            { uid: "2", id: "_2", name: "b" },
            { uid: "3", id: "_3", name: "c" },
        ]
        const obj = { uid: "2", id: "_1", name: "xx" }
        const expectArr = [
            { uid: "2", id: "_1", name: "xx" },
            { uid: "2", id: "_2", name: "b" },
            { uid: "3", id: "_3", name: "c" },
        ]
        expect(arrayUpsert(arr, obj, undefined, (a, b) => a.id === b.id)).toEqual(expectArr)
    })
    it("test case 8", () => {
        const arr = [
            { uid: "1", id: "_1", name: "a" },
            { uid: "2", id: "_2", name: "b" },
            { uid: "3", id: "_3", name: "c" },
        ]
        const obj = { uid: "4", id: "4", name: "xx" }
        const expectArr = [
            { uid: "1", id: "_1", name: "a" },
            { uid: "2", id: "_2", name: "b" },
            { uid: "3", id: "_3", name: "c" },
            { uid: "4", id: "4", name: "xx" },
        ]
        expect(arrayUpsert(arr, obj, undefined, (a, b) => a.id === b.id)).toEqual(expectArr)
    })
})
