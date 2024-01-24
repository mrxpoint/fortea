import base64 from "../base64"
import queryJsonStr from "../queryJsonStr"
import isFunc from "../isFunc"

interface isTokenExpiredConfig {
    expireKey?: string
    expiredTestCall?: (exp: number) => boolean
}

/**
 * @name isTokenExpired
 * @description check if token is expired
 * @param token
 * @param config
 *   expireKey: string = "exp"
 *   expiredTestCall: (exp : number) => boolean = exp => exp < Date.now() / 1000
 * @returns boolean
 * @example
 * import isTokenExpired from "./index"
 * import * as jwt from "jsonwebtoken"
 *
 * const token = jwt.sign({
 *       id: "123",
 *    },
 *    "secret",
 *    {
 *    expiresIn: '1s',
 *    })
 *
 * await delayAsync(2)
 * const isExpired = isTokenExpired(token) // true
 */
function isTokenExpired(token?: string, config?: isTokenExpiredConfig): boolean {
    const expireKey = config?.expireKey || "exp"
    const expiredTestCall = config?.expiredTestCall
    if (!token) return true
    const tokenArr = token.split(".")
    const encodedPayload = tokenArr[1]
    if (!encodedPayload) return true
    const payloadJsonStr = base64.decode(encodedPayload)
    const exp = queryJsonStr.forNumber(payloadJsonStr, expireKey)
    if (!exp) return true
    if (isFunc(expiredTestCall)) {
        return expiredTestCall(exp)
    } else {
        return exp < Date.now() / 1000
    }
}

export default isTokenExpired
