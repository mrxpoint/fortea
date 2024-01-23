/**
 *
 *  base64 encode / decode
 *  http://www.webtoolkit.info/
 *
 **/
const base64 = {
    // private property
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    /**
     * public method for encoding
     * @param input
     * @returns string
     */
    encode: function (input: string) {
        let output = ""
        let chr1: number, chr2: number, chr3: number, enc1: number, enc2: number, enc3: number, enc4: number
        let i = 0

        input = base64._utf8_encode(input)

        while (i < input.length) {
            chr1 = input.charCodeAt(i++)
            chr2 = input.charCodeAt(i++)
            chr3 = input.charCodeAt(i++)

            enc1 = chr1 >> 2
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4)
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6)
            enc4 = chr3 & 63

            if (isNaN(chr2)) {
                enc3 = enc4 = 64
            } else if (isNaN(chr3)) {
                enc4 = 64
            }

            output =
                output +
                this._keyStr.charAt(enc1) +
                this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) +
                this._keyStr.charAt(enc4)
        }
        return output
    },

    /**
     * public method for decoding
     * @param input string
     * @returns string
     */
    decode: function (input: string) {
        let output = ""
        let chr1: number, chr2: number, chr3: number
        let enc1: number, enc2: number, enc3: number, enc4: number
        let i = 0

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "")

        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++))
            enc2 = this._keyStr.indexOf(input.charAt(i++))
            enc3 = this._keyStr.indexOf(input.charAt(i++))
            enc4 = this._keyStr.indexOf(input.charAt(i++))

            chr1 = (enc1 << 2) | (enc2 >> 4)
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
            chr3 = ((enc3 & 3) << 6) | enc4

            output = output + String.fromCharCode(chr1)

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2)
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3)
            }
        }

        output = base64._utf8_decode(output)

        return output
    },

    /**
     * private method for UTF-8 encoding
     * @param text string
     * @returns string
     */
    _utf8_encode: function (text: string) {
        text = text.replace(/\r\n/g, "\n")
        let utf8text = ""

        for (let n = 0; n < text.length; n++) {
            const c = text.charCodeAt(n)

            if (c < 128) {
                utf8text += String.fromCharCode(c)
            } else if (c > 127 && c < 2048) {
                utf8text += String.fromCharCode((c >> 6) | 192)
                utf8text += String.fromCharCode((c & 63) | 128)
            } else {
                utf8text += String.fromCharCode((c >> 12) | 224)
                utf8text += String.fromCharCode(((c >> 6) & 63) | 128)
                utf8text += String.fromCharCode((c & 63) | 128)
            }
        }
        return utf8text
    },

    /**
     * private method for UTF-8 decoding
     * @param utf8text string
     * @returns string
     */
    _utf8_decode: function (utf8text: string) {
        let string = ""
        let i = 0
        let c = 0,
            c2 = 0,
            c3 = 0

        while (i < utf8text.length) {
            c = utf8text.charCodeAt(i)

            if (c < 128) {
                string += String.fromCharCode(c)
                i++
            } else if (c > 191 && c < 224) {
                c2 = utf8text.charCodeAt(i + 1)
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63))
                i += 2
            } else {
                c2 = utf8text.charCodeAt(i + 1)
                c3 = utf8text.charCodeAt(i + 2)
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63))
                i += 3
            }
        }
        return string
    },
}

export default base64
