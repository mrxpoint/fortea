import toBoolean from "./index"

describe("toBoolean", () => {
    // '' => false
    it("test case 1", () => {
        expect(toBoolean("")).toBe(false)
    })
    // '0' => false
    it("test case 2", () => {
        expect(toBoolean("0")).toBe(false)
    })
    // 'false' => false
    it("test case 3", () => {
        expect(toBoolean("false")).toBe(false)
    })
    // 'true' => true
    it("test case 4", () => {
        expect(toBoolean("true")).toBe(true)
    })
    // '1' => true
    it("test case 5", () => {
        expect(toBoolean("1")).toBe(true)
    })
    // 0 => false
    it("test case 6", () => {
        expect(toBoolean(0)).toBe(false)
    })
    // 1 => true
    it("test case 7", () => {
        expect(toBoolean(1)).toBe(true)
    })
    //  v<=0 => false
    it("test case 8", () => {
        expect(toBoolean(-1)).toBe(false)
    })
    // v>0 => true
    it("test case 9", () => {
        expect(toBoolean(2)).toBe(true)
    })
    // null => false
    it("test case 10", () => {
        expect(toBoolean(null)).toBe(false)
    })
    // undefined => false
    it("test case 11", () => {
        expect(toBoolean(undefined)).toBe(false)
    })
    // object => true
    it("test case 12", () => {
        expect(toBoolean({})).toBe(true)
    })
    // array => true
    it("test case 13", () => {
        expect(toBoolean([])).toBe(true)
    })
    // NaN => false
    it("test case 14", () => {
        expect(toBoolean(NaN)).toBe(false)
    })
    // Infinity => true
    it("test case 15", () => {
        expect(toBoolean(Infinity)).toBe(true)
    })
    // -Infinity => false
    it("test case 16", () => {
        expect(toBoolean(-Infinity)).toBe(false)
    })
    // -0 => false
    it("test case 17", () => {
        expect(toBoolean(-0)).toBe(false)
    })
    // 'yes' => true
    it("test case 18", () => {
        expect(toBoolean("yes")).toBe(true)
    })
    // 'no' => false
    it("test case 19", () => {
        expect(toBoolean("no")).toBe(false)
    })
    // 'YES' => true
    it("test case 20", () => {
        expect(toBoolean("YES")).toBe(true)
    })
    // 'NO' => false
    it("test case 21", () => {
        expect(toBoolean("NO")).toBe(false)
    })
    // 'y' => true
    it("test case 22", () => {
        expect(toBoolean("y")).toBe(true)
    })
    // 'n' => false
    it("test case 23", () => {
        expect(toBoolean("n")).toBe(false)
    })
    // 'Y' => true
    it("test case 24", () => {
        expect(toBoolean("Y")).toBe(true)
    })
    // 'N' => false
    it("test case 25", () => {
        expect(toBoolean("N")).toBe(false)
    })
    // 'on' => true
    it("test case 26", () => {
        expect(toBoolean("on")).toBe(true)
    })
    // 'off' => false
    it("test case 27", () => {
        expect(toBoolean("off")).toBe(false)
    })
    // 'ON' => true
    it("test case 28", () => {
        expect(toBoolean("ON")).toBe(true)
    })
    // 'OFF' => false
    it("test case 29", () => {
        expect(toBoolean("OFF")).toBe(false)
    })
    // 'On' => true
    it("test case 30", () => {
        expect(toBoolean("On")).toBe(true)
    })
    // 'Off' => false
    it("test case 31", () => {
        expect(toBoolean("Off")).toBe(false)
    })
    // 'oN' => true
    it("test case 32", () => {
        expect(toBoolean("oN")).toBe(true)
    })
    // 'oFf' => false
    it("test case 33", () => {
        expect(toBoolean("oFf")).toBe(false)
    })
    // '1.1' => true
    it("test case 34", () => {
        expect(toBoolean("1.1")).toBe(true)
    })
    // '-1.1' => false
    it("test case 35", () => {
        expect(toBoolean("-1.1")).toBe(false)
    })
    // () => true => true
    it("test case 36", () => {
        expect(toBoolean(() => true)).toBe(true)
    })
    // () => false => false
    it("test case 37", () => {
        expect(toBoolean(() => false)).toBe(false)
    })
    // () => 1 => true
    it("test case 38", () => {
        expect(toBoolean(() => 1)).toBe(true)
    })
    // NaN => false
    it("test case 39", () => {
        expect(toBoolean(NaN)).toBe(false)
    })
    // 是 => true
    it("test case 40", () => {
        expect(toBoolean("是")).toBe(true)
    })
    // 否 => false
    it("test case 41", () => {
        expect(toBoolean("否")).toBe(false)
    })
})
