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

declare function classNames(...args: ClassNameItem[]): string;

/**
 * @name delayAsync
 * @description 异步延迟执行函数 Promise 封装
 * @param seconds 延迟秒数
 * @returns Promise<void>
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

declare function skipTake(pagination?: skipTakePagination, options?: skipTakeOptions): skipTakeResult;

declare const fortea: {
    base64: {
        _keyStr: string;
        encode: (input: string) => string;
        decode: (input: string) => string;
        _utf8_encode: (text: string) => string;
        _utf8_decode: (utf8text: string) => string;
    };
    classNames: typeof classNames;
    delayAsync: typeof delayAsync;
    isBoolean: typeof isBoolean;
    isFunc: typeof isFunc;
    isInteger: typeof isInteger;
    isNil: typeof isNil;
    isNumber: typeof isNumber;
    isObject: typeof isObject;
    isString: typeof isString;
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
    map,
    mergePath,
    queryJsonStr,
    skipTake,
    toBoolean,
    toNumber,
    toPercentage,
}
