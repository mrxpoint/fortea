import skipTake from "./index"

describe("skipTake", () => {
    // default
    it("test case 1", () => {
        const result = skipTake()
        expect(result).toEqual({
            skip: 0,
            take: 10,
            page: 1,
            pageSize: 10,
        })
    })
    // string page 2 and pageSize 20
    it("test case 2", () => {
        const result = skipTake({ page: "2", pageSize: "20" })
        expect(result).toEqual({
            skip: 20,
            take: 20,
            page: 2,
            pageSize: 20,
        })
    })
    // string page 2 and pageSize undefined
    it("test case 3", () => {
        const result = skipTake({ page: "2" })
        expect(result).toEqual({
            skip: 10,
            take: 10,
            page: 2,
            pageSize: 10,
        })
    })
    // string page undefined and pageSize 20
    it("test case 4", () => {
        const result = skipTake({ pageSize: "20" })
        expect(result).toEqual({
            skip: 0,
            take: 20,
            page: 1,
            pageSize: 20,
        })
    })
    // maxPageSize 20
    it("test case 5", () => {
        const result = skipTake({ pageSize: 100 }, { maxPageSize: 20 })
        expect(result).toEqual({
            skip: 0,
            take: 20,
            page: 1,
            pageSize: 20,
        })
    })
    // maxPage 2
    it("test case 6", () => {
        const result = skipTake({ page: 100 }, { maxPage: 2 })
        expect(result).toEqual({
            skip: 10,
            take: 10,
            page: 2,
            pageSize: 10,
        })
    })
    // minPageSize 20
    it("test case 7", () => {
        const result = skipTake({ pageSize: 1 }, { minPageSize: 20 })
        expect(result).toEqual({
            skip: 0,
            take: 20,
            page: 1,
            pageSize: 20,
        })
    })
    // minPage 2
    it("test case 8", () => {
        const result = skipTake({ page: 1 }, { minPage: 2 })
        expect(result).toEqual({
            skip: 10,
            take: 10,
            page: 2,
            pageSize: 10,
        })
    })
    // infinity pageSize will be converted to defaultPageSize 10
    it("test case 9", () => {
        const result = skipTake({ pageSize: Infinity })
        expect(result).toEqual({
            page: 1,
            pageSize: 10,
            skip: 0,
            take: 10,
        })
    })
    // ‘Infinity’ pageSize will be converted to defaultPageSize 10
    it("test case 10", () => {
        const result = skipTake({ pageSize: "Infinity" })
        expect(result).toEqual({
            page: 1,
            pageSize: 10,
            skip: 0,
            take: 10,
        })
    })
    // page 3 and pageSize 10
    it("test case 11", () => {
        const result = skipTake({ page: 3, pageSize: 10 })
        expect(result).toEqual({
            page: 3,
            pageSize: 10,
            skip: 20,
            take: 10,
        })
    })
    // page 3 and pageSize -1
    it("test case 12", () => {
        const result = skipTake({ page: 3, pageSize: -1 })
        expect(result).toEqual({
            page: 3,
            pageSize: -1,
            skip: undefined,
            take: undefined,
        })
    })
    // -1 pageSize option.allowAll true
    it("test case 13", () => {
        const result = skipTake({ pageSize: -1 }, { allowAll: true })
        expect(result).toEqual({
            page: 1,
            pageSize: -1,
            skip: undefined,
            take: undefined,
        })
    })
    // -1 pageSize option.allowAll false
    it("test case 14", () => {
        const result = skipTake({ pageSize: -1 }, { allowAll: false })
        expect(result).toEqual({
            page: 1,
            pageSize: 10,
            skip: 0,
            take: 10,
        })
    })
    // -1 pageSize option.allowAll false minPageSize 20
    it("test case 15", () => {
        const result = skipTake({ pageSize: -1 }, { allowAll: false, minPageSize: 20 })
        expect(result).toEqual({
            page: 1,
            pageSize: 20,
            skip: 0,
            take: 20,
        })
    })
})
