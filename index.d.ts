/**
 * @name forNumber
 * @description query json string for number value
 * @param json string
 * @param query string
 * @returns number | null
 */
declare function forNumber(json: string, query: string): number;

/**
 * @name forString
 * @description query json string for string value
 * @param json
 * @param query
 * @returns string | null
 */
declare function forString(json: string, query: string): any;

/**
 * @name forBoolean
 * @description query json string for boolean value
 * @param json string
 * @param query string
 * @returns boolean | null
 */
declare function forBoolean(json: string, query: string): boolean;

declare const queryJsonStr: {
    forNumber: typeof forNumber;
    forString: typeof forString;
    forBoolean: typeof forBoolean;
}
/**
 *
 *  base64 encode / decode
 *  http://www.webtoolkit.info/
 *
 **/
declare const base64: {
    _keyStr: string;
    encode: (input: string) => string;
    decode: (input: string) => string;
    _utf8_encode: (text: string) => string;
    _utf8_decode: (utf8text: string) => string;
}
export  type ClassNameItem = string | number | Record<string, boolean> | ClassNameItem[];


/**
 * @name classNames
 * @description generate class names
 * @param args
 * @returns string
 */
declare function classNames(...args: ClassNameItem[]): string;

/**
 * Creates a promise that resolves after a specified number of seconds.
 *
 * @param {number} [seconds=1] - The number of seconds to delay before resolving the promise.
 * @returns {Promise<void>} A promise that resolves after the specified delay.
 */
declare function delayAsync(seconds: number): Promise<void>;

declare function isNil(value: any): value is null | undefined  ;

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
declare function isNumber(value: any, skipFinite?: boolean): value is number;

declare function isString(value: any): value is string;

declare function toNumber(value: any, skipFinite?: boolean): number;

/**
 * @name map
 * @description map an array to another array
 * @param arr input array
 * @param func map function
 * @param skipNil skip nil value default true
 * @returns mapped array
 */
declare function map<Input, Output>(arr: Input[], func: (item: Input, index: number) => Output, skipNil?: boolean): Output[];

declare function mergePath(paterPath?: string, path?: string): string;

declare function isInteger(value: any): boolean;

declare function isFunc(value: any): value is Function;

declare function isBoolean(value: any): value is Boolean;

declare function isObject(value: any): value is Object;

declare function toBoolean(value: any): boolean;

/**
 * @name toPercentage
 * @description convert number to percentage string, example: 0.1 => 10%
 * @param value input value
 * @param fixed default auto fixed, if you want to be fixed, you can set fixed value
 * @returns string
 * @example 1.126 => 112.6%, 1.126 => 113% (fixed = 0)
 */
declare function toPercentage(value: number, fixed?: number): string;

interface skipTakeOptions {
    defaultPage?: number
    defaultPageSize?: number
    maxPageSize?: number
    maxPage?: number
    minPageSize?: number
    minPage?: number
    allowAll?: boolean
}

interface skipTakePagination {
    page?: number | string
    pageSize?: number | string
}

interface skipTakeResult {
    skip?: number
    take?: number
    page: number
    pageSize: number
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
declare function skipTake(pagination?: skipTakePagination, options?: skipTakeOptions): skipTakeResult;

interface isTokenExpiredConfig {
    expireKey?: string,
    expiredTestCall?: (exp: number) => boolean,
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
declare function isTokenExpired(token?: string, config?: isTokenExpiredConfig): boolean;

/**
 * Inserts an item into an array or updates an existing item. If a key is provided, it uses the key to find an existing item.
 * Otherwise, it uses a comparison function. the default comparison function is (a,b) => a === b，if all can't find an existing item, it simply adds the item to the end of the array.
 * @name arrayUpsert
 * @template T - The type of elements in the array.
 * @param {T[]} target - The array to upsert into.
 * @param {T} item - The item to insert or update in the array.
 * @param {keyof T} [compareKey] - The property name to identify the item. If provided, items are compared based on this property.
 * @param {(targetItem: T, item: T) => boolean} [compare] - A comparison function to determine if the item exists in the array. default compare (a,b) => a === b  (optional)
 * @param {boolean} [returnOriginal] - Flag to return the original array or a copy of the array after the upsert operation. Defaults to false.(optional)
 * @returns {T[]} The array after the upsert operation.
 */
declare function arrayUpsert<T>(
    target: T[],
    item: T,
    compareKey?: keyof T,
    compare?: (targetItem: T, item: T) => boolean,
    returnOriginal?: boolean,
): T[];

declare const fortea: {
    base64: {
        _keyStr: string;
        encode: (input: string) => string;
        decode: (input: string) => string;
        _utf8_encode: (text: string) => string;
        _utf8_decode: (utf8text: string) => string;
    };
    arrayUpsert : typeof arrayUpsert;
    classNames: typeof classNames;
    delayAsync: typeof delayAsync;
    isBoolean: typeof isBoolean;
    isFunc: typeof isFunc;
    isInteger: typeof isInteger;
    isNil: typeof isNil;
    isNumber: typeof isNumber;
    isObject: typeof isObject;
    isString: typeof isString;
    isTokenExpired: typeof isTokenExpired;
    map: typeof map;
    mergePath: typeof mergePath;
    queryJsonStr: {
        forNumber: typeof forNumber;
        forString: typeof forString;
        forBoolean: typeof forBoolean;
    };
    skipTake: typeof skipTake;
    toBoolean: typeof toBoolean;
    toNumber: typeof toNumber;
    toPercentage: typeof toPercentage;
}
export {
    fortea as default,
    arrayUpsert,
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
}
