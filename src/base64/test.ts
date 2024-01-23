import base64 from "./index"

describe("base64", () => {
    it("test case 1", () => {
        expect(base64.encode("123")).toBe("MTIz")
    })
    it("test case 2", () => {
        expect(base64.decode("MTIz")).toBe("123")
    })
    it("test case 3", () => {
        expect(base64.encode("1234")).toBe("MTIzNA==")
    })
    it("test case 4", () => {
        expect(base64.decode("MTIzNA==")).toBe("1234")
    })
    it("test case 5", () => {
        expect(base64.encode("12345")).toBe("MTIzNDU=")
    })
    it("test case 6", () => {
        expect(base64.decode("MTIzNDU=")).toBe("12345")
    })
    it("test case 7", () => {
        expect(base64.encode("123456")).toBe("MTIzNDU2")
    })
    it("test case 8", () => {
        expect(base64.decode("MTIzNDU2")).toBe("123456")
    })
    it("test case 9", () => {
        expect(base64.encode("1234567")).toBe("MTIzNDU2Nw==")
    })
    it("test case 10", () => {
        expect(base64.decode("MTIzNDU2Nw==")).toBe("1234567")
    })
    it("test case 11", () => {
        expect(base64.encode("12345678")).toBe("MTIzNDU2Nzg=")
    })
    it("test case 12", () => {
        expect(base64.decode("MTIzNDU2Nzg=")).toBe("12345678")
    })
    it("test case 13", () => {
        expect(base64.encode("123456789")).toBe("MTIzNDU2Nzg5")
    })
    it("test case 14", () => {
        expect(base64.decode("MTIzNDU2Nzg5")).toBe("123456789")
    })
    it("test case 15", () => {
        expect(base64.encode("1234567890")).toBe("MTIzNDU2Nzg5MA==")
    })
    it("test case 16", () => {
        expect(base64.decode("MTIzNDU2Nzg5MA==")).toBe("1234567890")
    })
    // a-z
    it("test case 17", () => {
        expect(base64.encode("abc-xyz")).toBe("YWJjLXh5eg==")
    })
    it("test case 18", () => {
        expect(base64.decode("YWJjLXh5eg==")).toBe("abc-xyz")
    })
})
