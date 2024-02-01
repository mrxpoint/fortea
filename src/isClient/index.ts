/**
 * Check if the code is running on the client side with browser.
 * @code  typeof window !== 'undefined'
 */
function isClient() {
    return typeof window !== "undefined"
}

export default isClient
