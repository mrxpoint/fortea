import isTokenExpired from "./index"
import * as jwt from "jsonwebtoken"
import delayAsync from "../delayAsync"
import base64 from "../base64"

describe("isTokenExpired", () => {
    it("test case 1", async () => {
        const token = jwt.sign(
            {
                id: "123",
            },
            "secret",
            {
                expiresIn: "1s",
            },
        )
        await delayAsync(2)
        expect(isTokenExpired(token)).toBe(true)
    })
    it("test case 2", async () => {
        const token = jwt.sign(
            {
                id: "123",
            },
            "secret",
            {
                expiresIn: "10s",
            },
        )
        await delayAsync(2)
        expect(isTokenExpired(token)).toBe(false)
    })
    // empty token
    it("test case 3", async () => {
        expect(isTokenExpired("")).toBe(true)
    })
    // “123.123.123” is not a valid token
    it("test case 4", async () => {
        expect(isTokenExpired("123.123.123")).toBe(true)
    })
    it("test case 5", async () => {
        const base64Raw = '"expMy":123'
        const base64Encoded = base64.encode(base64Raw)
        expect(
            isTokenExpired(`test.${base64Encoded}`, {
                expireKey: "expMy",
                expiredTestCall: exp => exp > 122,
            }),
        ).toBe(true)
    })
    it("test case 6", async () => {
        const base64Raw = '"expMy":123'
        const base64Encoded = base64.encode(base64Raw)
        expect(
            isTokenExpired(`test.${base64Encoded}`, {
                expireKey: "expMy",
                expiredTestCall: exp => exp < 124,
            }),
        ).toBe(true)
    })
})
