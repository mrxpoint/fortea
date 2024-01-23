import toNumber from "./index"

describe("toNumber", () => {
    it("test case 1", () => {
        expect(toNumber(1)).toBe(1)
    })
    it("test case 2", () => {
        expect(toNumber("1")).toBe(1)
    })
    it("test case 3", () => {
        expect(toNumber("")).toBe(0)
    })
    it("test case 4", () => {
        expect(toNumber(null)).toBe(0)
    })
    it("test case 5", () => {
        expect(toNumber(undefined)).toBe(0)
    })
    it("test case 6", () => {
        expect(toNumber(NaN)).toBe(0)
    })
    it("test case 7", () => {
        expect(toNumber(Infinity)).toBe(0)
    })
    it("test case 8", () => {
        expect(toNumber(-Infinity)).toBe(0)
    })
    it("test case 9", () => {
        expect(toNumber(0)).toBe(0)
    })
    it("test case 10", () => {
        expect(toNumber(-0)).toBe(0)
    })
    it("test case 11", () => {
        expect(toNumber(1.1)).toBe(1.1)
    })
    it("test case 12", () => {
        expect(toNumber(-1.1)).toBe(-1.1)
    })
    it("test case 13", () => {
        expect(toNumber(1.1e10)).toBe(1.1e10)
    })
    it("test case 14", () => {
        expect(toNumber(-1.1e10)).toBe(-1.1e10)
    })
    it("test case 15", () => {
        expect(toNumber(1.1e-10)).toBe(1.1e-10)
    })
    it("test case 16", () => {
        expect(toNumber(-1.1e-10)).toBe(-1.1e-10)
    })
    it("test case 17", () => {
        expect(toNumber(1.1e10)).toBe(1.1e10)
    })
    it("test case 18", () => {
        expect(toNumber(-1.1e10)).toBe(-1.1e10)
    })
    // float number
    it("test case 19", () => {
        expect(toNumber(1.255)).toBe(1.255)
    })
    it("test case 20", () => {
        expect(toNumber(-1.255)).toBe(-1.255)
    })
    // string number
    it("test case 21", () => {
        expect(toNumber("1.255")).toBe(1.255)
    })
    it("test case 22", () => {
        expect(toNumber("-1.255")).toBe(-1.255)
    })
    // 1.23h3
    it("test case 23", () => {
        expect(toNumber("1.23h3")).toBe(1.23)
    })
    // Infinity skipFinite true
    it("test case 24", () => {
        expect(toNumber(Infinity, true)).toBe(Infinity)
    })
    // Infinity skipFinite false
    it("test case 25", () => {
        expect(toNumber(Infinity)).toBe(0)
    })
    // -Infinity skipFinite true
    it("test case 26", () => {
        expect(toNumber(-Infinity, true)).toBe(-Infinity)
    })
    // -Infinity skipFinite false
    it("test case 27", () => {
        expect(toNumber(-Infinity)).toBe(0)
    })
    // ‘Infinity’ skipFinite true
    it("test case 28", () => {
        expect(toNumber("Infinity", true)).toBe(Infinity)
    })
    // ‘Infinity’ skipFinite false
    it("test case 29", () => {
        expect(toNumber("Infinity")).toBe(0)
    })
})
