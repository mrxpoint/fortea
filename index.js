function includeQueryKey(json, query) {
    if (!json || !query)
        return false;
    return json.includes(`"${query}":`);
}
/**
 * @name forNumber
 * @description query json string for number value
 * @param json string
 * @param query string
 * @returns number | null
 */
function forNumber(json, query) {
    if (!includeQueryKey(json, query))
        return null;
    const reg = new RegExp(`.*"${query}":(\\d+).*`);
    const result = json.replace(reg, "$1");
    return Number(result);
}
/**
 * @name forString
 * @description query json string for string value
 * @param json
 * @param query
 * @returns string | null
 */
function forString(json, query) {
    if (!includeQueryKey(json, query))
        return null;
    const reg = new RegExp(`.*"${query}":"(.*)".*`);
    return json.replace(reg, "$1");
}
/**
 * @name forBoolean
 * @description query json string for boolean value
 * @param json string
 * @param query string
 * @returns boolean | null
 */
function forBoolean(json, query) {
    if (!includeQueryKey(json, query))
        return null;
    const reg = new RegExp(`.*"${query}":(true|false).*`);
    return json.replace(reg, "$1") === "true";
}
const queryJsonStr = {
    forNumber,
    forString,
    forBoolean,
};

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
    encode: function (input) {
        let output = "";
        let chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        let i = 0;
        input = base64._utf8_encode(input);
        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);
            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;
            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            }
            else if (isNaN(chr3)) {
                enc4 = 64;
            }
            output =
                output +
                    this._keyStr.charAt(enc1) +
                    this._keyStr.charAt(enc2) +
                    this._keyStr.charAt(enc3) +
                    this._keyStr.charAt(enc4);
        }
        return output;
    },
    /**
     * public method for decoding
     * @param input string
     * @returns string
     */
    decode: function (input) {
        let output = "";
        let chr1, chr2, chr3;
        let enc1, enc2, enc3, enc4;
        let i = 0;
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        while (i < input.length) {
            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));
            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;
            output = output + String.fromCharCode(chr1);
            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }
        }
        output = base64._utf8_decode(output);
        return output;
    },
    /**
     * private method for UTF-8 encoding
     * @param text string
     * @returns string
     */
    _utf8_encode: function (text) {
        text = text.replace(/\r\n/g, "\n");
        let utf8text = "";
        for (let n = 0; n < text.length; n++) {
            const c = text.charCodeAt(n);
            if (c < 128) {
                utf8text += String.fromCharCode(c);
            }
            else if (c > 127 && c < 2048) {
                utf8text += String.fromCharCode((c >> 6) | 192);
                utf8text += String.fromCharCode((c & 63) | 128);
            }
            else {
                utf8text += String.fromCharCode((c >> 12) | 224);
                utf8text += String.fromCharCode(((c >> 6) & 63) | 128);
                utf8text += String.fromCharCode((c & 63) | 128);
            }
        }
        return utf8text;
    },
    /**
     * private method for UTF-8 decoding
     * @param utf8text string
     * @returns string
     */
    _utf8_decode: function (utf8text) {
        let string = "";
        let i = 0;
        let c = 0, c2 = 0, c3 = 0;
        while (i < utf8text.length) {
            c = utf8text.charCodeAt(i);
            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if (c > 191 && c < 224) {
                c2 = utf8text.charCodeAt(i + 1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utf8text.charCodeAt(i + 1);
                c3 = utf8text.charCodeAt(i + 2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }
        }
        return string;
    },
};

function isNil(value) {
    return value === null || value === undefined;
}

/**
 * @name delayAsync
 * @description 异步延迟执行函数 Promise 封装
 * @param seconds 延迟秒数
 * @returns Promise<void>
 */
function delayAsync(seconds = 1) {
    let _timeID;
    return new Promise((resolve, _reject) => {
        _timeID = setTimeout(() => {
            resolve();
            if (!isNil(_timeID)) {
                clearTimeout(_timeID);
            }
        }, seconds * 1000);
    });
}

function classNames(...args) {
    const classes = [];
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (!arg)
            continue;
        const argType = typeof arg;
        if (argType === "string" || argType === "number") {
            classes.push(arg);
        }
        else if (Array.isArray(arg)) {
            classes.push(classNames(...arg));
        }
        else if (argType === "object") {
            for (const key in arg) {
                if (Object.prototype.hasOwnProperty.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }
    return classes.join(" ");
}

/**
 * Check if value is a number
 * @name isNumber
 * @param value value to check
 * @param skipFinite skip check if value is finite
 * @returns {boolean} true if value is a number
 * @example
 * isNumber(1) // => true
 * isNumber(Infinity) // => false
 * isNumber(NaN) // => false
 * isNumber(Infinity, true) // => true
 */
function isNumber(value, skipFinite = false) {
    if (skipFinite)
        return typeof value === "number" && !isNaN(value);
    return typeof value === "number" && Number.isFinite(value) && !isNaN(value);
}

function isString(value) {
    return typeof value === "string";
}

/**
 * Convert value to number
 * @name toNumber
 * @param value
 * @param skipFinite if false, infinity will be converted to 0 ，default is false
 * @return number
 * @example
 * toNumber(1) // => 1
 * toNumber(Infinity) // => 0
 * toNumber(NaN) // => 0
 * toNumber(Infinity, true) // => Infinity
 * toNumber(-0) // => 0
 */
function toNumber(value, skipFinite = false) {
    if (value === null || value === undefined)
        return 0;
    if (typeof value === "string") {
        const v = parseFloat(value);
        if (isNegativeZero(v))
            return 0;
        return isNumber(v, skipFinite) ? v : 0;
    }
    if (typeof value === "number") {
        if (isNegativeZero(value))
            return 0;
        return isNumber(value, skipFinite) ? value : 0;
    }
    return 0;
}
function isNegativeZero(value) {
    return Object.is(value, -0);
}

/**
 * @name map
 * @description map an array to another array
 * @param arr input array
 * @param func map function
 * @param skipNil skip nil value default true
 * @returns mapped array
 */
function map(arr, func, skipNil = true) {
    const result = [];
    if (Array.isArray(arr) === false)
        return [];
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (isNil(item) && skipNil)
            continue;
        result.push(func(item, i));
    }
    return result;
}

function mergePath(paterPath = "", path = "") {
    if (!path && !paterPath)
        return "";
    if (!path)
        return paterPath;
    if (!paterPath)
        return path;
    path = path.replace(/^\//, "");
    paterPath = paterPath.replace(/\/$/, "");
    return paterPath + "/" + path;
}

function isInteger(value) {
    return toNumber(value) % 1 === 0;
}

function isFunc(value) {
    return value !== null && typeof value === "function";
}

function isBoolean(value) {
    return value === true || value === false;
}

function isObject(value) {
    return value !== null && typeof value === "object";
}

const trueStrings = ["true", "1", "yes", "y", "on", "ok", "是"];
const falseStrings = ["false", "0", "no", "n", "off", "", "否"];
function toBoolean(value) {
    if (isNil(value))
        return false;
    if (isString(value)) {
        value = value.toLowerCase().trim();
        if (trueStrings.includes(value)) {
            return true;
        }
        else if (falseStrings.includes(value)) {
            return false;
        }
        else {
            return toNumber(value) > 0;
        }
    }
    else if (isNumber(value, true)) {
        return value > 0;
    }
    else if (typeof value === "object") {
        return true;
    }
    else if (isFunc(value)) {
        return toBoolean(value());
    }
    else if (isBoolean(value)) {
        return value;
    }
    return false;
}

/**
 * @name toPercentage
 * @description convert number to percentage string, example: 0.1 => 10%
 * @param value input value
 * @param fixed default auto fixed, if you want to be fixed, you can set fixed value
 * @returns string
 * @example 1.126 => 112.6%, 1.126 => 113% (fixed = 0)
 */
function toPercentage(value, fixed) {
    const percentage = toNumber(value) * 100;
    const isInt = isInteger(percentage);
    if (isInt) {
        if (isNil(fixed)) {
            return percentage + "%";
        }
        else {
            return percentage.toFixed(fixed) + "%";
        }
    }
    else {
        const str = percentage.toString();
        const autoFixed = str.length - str.indexOf(".") - 1;
        if (isNil(fixed)) {
            return percentage.toFixed(autoFixed) + "%";
        }
        else {
            return percentage.toFixed(fixed) + "%";
        }
    }
}

/**
 * @name skipTake
 * @description skip take pagination function for prisma orm
 * @example
 *    const { skip, take } = skipTake({ page: 2, pageSize: 10 })  // skip: 10, take: 10
 *
 *    const { skip, take } = skipTake({ page: 2, pageSize: -1 })  // skip: undefined, take: undefined
 *
 *    const { skip, take } = skipTake({ page: 1, pageSize: -1 }, { allowAll: false })  // skip: 0, take: 10  (pageSize = minPageSize || defaultPageSize)
 */
function skipTake(pagination, options) {
    let { page, pageSize } = pagination || {};
    const { defaultPage = 1, defaultPageSize = 10, maxPageSize, maxPage, minPageSize, minPage, allowAll = true, } = options || {};
    page = isNil(page) ? defaultPage : toNumber(page, true);
    pageSize = isNil(pageSize) ? defaultPageSize : toNumber(pageSize, true);
    if (maxPageSize && pageSize > maxPageSize)
        pageSize = maxPageSize;
    if (maxPage && page > maxPage)
        page = maxPage;
    if (minPageSize && pageSize < minPageSize)
        pageSize = minPageSize;
    if (minPage && page < minPage)
        page = minPage;
    if (!Number.isFinite(page))
        page = defaultPage;
    if (!Number.isFinite(pageSize))
        pageSize = defaultPageSize;
    if (pageSize < 1 && allowAll) {
        return {
            skip: undefined,
            take: undefined,
            page,
            pageSize,
        };
    }
    else {
        if (pageSize < 1)
            pageSize = minPageSize || defaultPageSize;
        return {
            skip: (page - 1) * pageSize,
            take: pageSize,
            page,
            pageSize,
        };
    }
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
function isTokenExpired(token, config) {
    const expireKey = (config === null || config === void 0 ? void 0 : config.expireKey) || "exp";
    const expiredTestCall = config === null || config === void 0 ? void 0 : config.expiredTestCall;
    if (!token)
        return true;
    const tokenArr = token.split(".");
    const encodedPayload = tokenArr[1];
    if (!encodedPayload)
        return true;
    const payloadJsonStr = base64.decode(encodedPayload);
    const exp = queryJsonStr.forNumber(payloadJsonStr, expireKey);
    if (!exp)
        return true;
    if (isFunc(expiredTestCall)) {
        return expiredTestCall(exp);
    }
    else {
        return exp < Date.now() / 1000;
    }
}

const fortea = {
    base64,
    classNames,
    delayAsync,
    isBoolean,
    isFunc,
    isInteger,
    isNil,
    isNumber,
    isObject,
    isString,
    isTokenExpired,
    map,
    mergePath,
    queryJsonStr,
    skipTake,
    toBoolean,
    toNumber,
    toPercentage,
};

export { base64, classNames, fortea as default, delayAsync, isBoolean, isFunc, isInteger, isNil, isNumber, isObject, isString, isTokenExpired, map, mergePath, queryJsonStr, skipTake, toBoolean, toNumber, toPercentage };
