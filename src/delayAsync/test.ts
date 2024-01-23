import delayAsync from "./index"

describe("delayAsync", () => {
    it("test case 1", async () => {
        const start = Date.now()
        await delayAsync(2)
        const end = Date.now()
        expect(end - start).toBeGreaterThanOrEqual(2 * 1000)
    })
    it("test case 2", async () => {
        const start = Date.now()
        await delayAsync(1.5)
        const end = Date.now()
        expect(end - start).toBeGreaterThanOrEqual(1.5 * 1000)
    })
})
