import isFunc from "../isFunc"
import isNil from "../isNil"
import isObject from "../isObject"

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
 * @param merge - Flag to merge the item with the existing item. Defaults to false.(optional)
 * @returns {T[]} The array after the upsert operation.
 */
function arrayUpsert<T>(
    target: T[],
    item: T,
    compareKey?: keyof T,
    compare?: (targetItem: T, item: T) => boolean,
    returnOriginal?: boolean,
    merge?: boolean,
): T[] {
    const result = returnOriginal ? target : [...target]

    const updateOrInsert = (index: number) => {
        if (index > -1) {
            const targetItem = result[index]
            if (merge && isObject(targetItem) && isObject(item)) {
                result[index] = {
                    ...targetItem,
                    ...item,
                }
            } else {
                result[index] = item
            }
        } else {
            result.push(item)
        }
    }
    let index: number
    if (!isNil(compareKey)) {
        index = result.findIndex(i => i[compareKey] === item[compareKey])
    } else if (isFunc(compare)) {
        index = result.findIndex(targetItem => compare(targetItem, item))
    } else {
        // default  (a,b) => a === b
        index = result.findIndex(targetItem => targetItem === item)
    }
    updateOrInsert(index)
    return result
}

export default arrayUpsert
